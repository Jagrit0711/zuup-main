
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Define a custom type for gallery items
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

  // Fetch items from DB
  const fetchItems = async () => {
    setLoading(true);
    // Using generic query without type checks
    const { data, error } = await supabase
      .from("gallery_items")
      .select("*")
      .order("created_at", { ascending: false }) as { data: GalleryItem[] | null, error: any };
    
    if (error) {
      toast({ title: "Failed to load gallery", description: error.message, variant: "destructive" });
    } else {
      setItems(data || []);
    }
    setLoading(false);
  };

  // Check auth
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();
    fetchItems();
  }, []);

  // File preview
  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }, [file]);

  // Upload handler
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) {
      toast({ title: "Login required", description: "Sign in to upload", variant: "destructive" });
      return;
    }
    setLoading(true);
    const path = `${user.id}/${Date.now()}-${file.name}`;
    // Upload to Storage
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

    // Insert metadata using generic query
    const { error: insertError } = await supabase
      .from("gallery_items")
      .insert([
        {
          user_id: user.id,
          file_url: publicUrl,
          file_type: file.type || "",
          title: title || null,
          description: description || null,
        },
      ]) as { error: any };
      
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

  // Delete handler
  const handleDelete = async (item: GalleryItem) => {
    if (!user || item.user_id !== user.id) {
      toast({ title: "No permission", description: "You can only delete your uploads", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Remove from bucket
    const arr = item.file_url.split("/");
    const idx = arr.findIndex((x) => x === GALLERY_BUCKET);
    const filePath = arr.slice(idx + 1).join("/");
    await supabase.storage.from(GALLERY_BUCKET).remove([filePath]);
    
    // Using generic query for delete
    await supabase
      .from("gallery_items")
      .delete()
      .eq("id", item.id);
      
    toast({ title: "Deleted!" });
    fetchItems();
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>

      {/* Upload */}
      {user && (
        <form className="bg-gray-900/80 p-6 rounded-lg mb-8 flex flex-col gap-3 items-start shadow" onSubmit={handleUpload}>
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
        <div className="bg-yellow-200/10 border border-yellow-600/30 text-yellow-400 rounded p-4 mb-8 text-center w-full">
          Sign in to upload your own images/videos.
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
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
  );
};

export default Gallery;
