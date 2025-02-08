
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import BlogAuth from '@/components/blog/BlogAuth';
import BlogEditor from '@/components/blog/BlogEditor';
import { LogIn, LogOut, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  content_html: string;
  image_url: string | null;
  author_name: string;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [session, setSession] = useState(null);
  const { toast } = useToast();

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return;
    }

    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <div className="flex gap-4">
            {session && (
              <Button
                onClick={() => setShowEditor(true)}
                className="bg-[#FF6D59] hover:bg-[#ff8574] flex items-center gap-2"
              >
                <Plus size={20} />
                Create Post
              </Button>
            )}
            {session ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut size={20} />
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => setShowAuth(true)}
                className="bg-[#FF6D59] hover:bg-[#ff8574] flex items-center gap-2"
              >
                <LogIn size={20} />
                Login
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-4">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          ) : posts.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                {post.image_url && (
                  <img 
                    src={post.image_url} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                  <div 
                    className="text-gray-400 mb-4 line-clamp-3 prose prose-invert"
                    dangerouslySetInnerHTML={{ __html: post.content_html || post.content }}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author_name}</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </main>

      {showAuth && <BlogAuth onClose={() => setShowAuth(false)} />}
      {showEditor && <BlogEditor onClose={() => {
        setShowEditor(false);
        fetchPosts();
      }} />}
      <Footer />
    </div>
  );
};

export default Blog;
