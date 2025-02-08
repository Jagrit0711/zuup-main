
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { Plus, X, Save, Image } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author_name: string;
}

const BlogEditor = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image_url: '',
  });

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Error fetching posts',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    setPosts(data || []);
  };

  const handleAddPost = async () => {
    if (!newPost.title || !newPost.content) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    const { error } = await supabase
      .from('blog_posts')
      .insert({
        title: newPost.title,
        content: newPost.content,
        image_url: newPost.image_url || null,
        author_name: 'Admin' // You might want to get this from the current user
      });

    if (error) {
      toast({
        title: 'Error adding post',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Post added',
      description: 'New blog post has been created successfully'
    });

    setNewPost({
      title: '',
      content: '',
      image_url: '',
    });

    fetchPosts();
  };

  const handleDeletePost = async (postId: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', postId);

    if (error) {
      toast({
        title: 'Error deleting post',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Post deleted',
      description: 'Blog post has been removed successfully'
    });

    fetchPosts();
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-800/50 rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">Add New Blog Post</h3>
        <div className="grid gap-4">
          <Input
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            className="min-h-[200px]"
          />
          <Input
            placeholder="Image URL (optional)"
            value={newPost.image_url}
            onChange={(e) => setNewPost({ ...newPost, image_url: e.target.value })}
          />
          <Button
            onClick={handleAddPost}
            className="bg-[#FF6D59] hover:bg-[#ff8574] text-white flex items-center gap-2"
          >
            <Plus size={20} />
            Add Post
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Current Blog Posts</h3>
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800/30 rounded-lg p-4 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white">{post.title}</h4>
                  <p className="text-sm text-gray-400">By {post.author_name}</p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeletePost(post.id)}
                >
                  <X size={16} />
                </Button>
              </div>
              <p className="text-gray-300">{post.content}</p>
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
