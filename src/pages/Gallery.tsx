
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { SignInButton } from "@/components/SignInButton";

interface GalleryItem {
  id: string;
  created_at: string | null;
  user_id: string;
  file_url: string;
  file_type: string;
  title: string | null;
  description: string | null;
}

const GALLERY_BUCKET = "gallery";

const Gallery = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState<any>(null);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await (supabase as any)
      .from("gallery_items")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Failed to load gallery", description: error.message, variant: "destructive" });
    } else {
      setItems(data as GalleryItem[] || []);
    }
    setLoading(false);
  };

  // Listen to authentication state changes to update 'user' live
  useEffect(() => {
    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    // Check initial user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });

    fetchItems();

    // Cleanup
    return () => {
      authListener?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) {
      toast({ title: "Login required", description: "Sign in to upload", variant: "destructive" });
      return;
    }
    setLoading(true);
    const path = `${user.id}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from(GALLERY_BUCKET)
      .upload(path, file);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setLoading(false);
      return;
    }
    const { data: publicUrlData } = supabase.storage.from(GALLERY_BUCKET).getPublicUrl(path);
    const publicUrl = publicUrlData?.publicUrl;

    const { error: insertError } = await (supabase as any)
      .from("gallery_items")
      .insert([
        {
          user_id: user.id,
          file_url: publicUrl,
          file_type: file.type || "",
          title: title || null,
          description: description || null,
        },
      ]);
      
    if (insertError) {
      toast({ title: "Save failed", description: insertError.message, variant: "destructive" });
    } else {
      toast({ title: "Upload successful!" });
      setFile(null);
      setTitle("");
      setDescription("");
      fetchItems();
    }
    setLoading(false);
  };

  const handleDelete = async (item: GalleryItem) => {
    if (!user || item.user_id !== user.id) {
      toast({ title: "No permission", description: "You can only delete your uploads", variant: "destructive" });
      return;
    }
    setLoading(true);
    const arr = item.file_url.split("/");
    const idx = arr.findIndex((x) => x === GALLERY_BUCKET);
    const filePath = arr.slice(idx + 1).join("/");
    await supabase.storage.from(GALLERY_BUCKET).remove([filePath]);
    await (supabase as any)
      .from("gallery_items")
      .delete()
      .eq("id", item.id);
    toast({ title: "Deleted!" });
    fetchItems();
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pb-12"
      style={{
        background:
          "linear-gradient(135deg, #1A1F2C 0%, #3f3356 100%)",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden style={{
        background: "radial-gradient(circle at 70% 20%,rgba(155,135,245,0.22),rgba(33,0,74,0.15) 80%)"
      }} />
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-16 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow">Gallery</h1>

        {user && (
          <form className="bg-gray-900/80 p-6 rounded-lg mb-8 flex flex-col gap-3 items-start shadow-lg"
            onSubmit={handleUpload}>
            <label className="font-semibold">Upload</label>
            <Input
              type="file"
              accept="image/*,video/*"
              required
              onChange={e => {
                setFile(e.target.files?.[0] || null);
              }}
            />
            {preview && (
              <div className="mt-2 mb-2">
                {file?.type.startsWith("image") ? (
                  <img src={preview} alt="Preview" className="max-h-40 rounded shadow" />
                ) : (
                  <video src={preview} className="max-h-40 rounded" controls />
                )}
              </div>
            )}
            <Input
              type="text"
              placeholder="Title (optional)"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Button type="submit" className="mt-1" disabled={loading || !file}>
              <Upload className="mr-2" /> {loading ? "Uploading..." : "Upload"}
            </Button>
          </form>
        )}
        {!user && (
          <div className="flex flex-col items-center gap-5 bg-yellow-200/10 border border-yellow-600/30 text-yellow-100 rounded-xl p-8 mb-10 shadow-lg relative w-full">
            <div className="mb-2 text-center font-semibold text-lg">
              Sign in to upload your own images/videos.
            </div>
            <SignInButton className="w-full max-w-xs" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 z-10 relative">
          {loading && (
            <div className="text-center col-span-3 text-lg text-gray-400">
              Loading...
            </div>
          )}
          {items.length === 0 && !loading && (
            <div className="col-span-3 text-center text-gray-500">No items yet.</div>
          )}
          {items.map(item => (
            <Card key={item.id} className="bg-gray-800/90 border-gray-700 relative group">
              <div className="aspect-video overflow-hidden rounded-t">
                {item.file_type.startsWith("image") ? (
                  <img src={item.file_url} alt={item.title || "Gallery"} className="w-full object-cover max-h-48" />
                ) : (
                  <video src={item.file_url} controls className="w-full max-h-48 object-cover" />
                )}
              </div>
              <div className="p-4">
                {item.title && <div className="font-bold">{item.title}</div>}
                {item.description && <div className="text-sm text-gray-400">{item.description}</div>}
                <div className="mt-2 text-xs text-gray-400">{item.created_at ? new Date(item.created_at).toLocaleString() : ""}</div>
              </div>
              {user && item.user_id === user.id && (
                <button
                  className="absolute top-2 right-2 rounded-full bg-black/70 p-1 text-white hover:bg-red-700 transition group-hover:scale-110"
                  onClick={() => handleDelete(item)}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

