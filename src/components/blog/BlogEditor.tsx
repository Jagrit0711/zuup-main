
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Bold, 
  Italic, 
  List, 
  Heading2, 
  Link as LinkIcon,
  X
} from 'lucide-react';

interface BlogEditorProps {
  onClose: () => void;
}

const BlogEditor = ({ onClose }: BlogEditorProps) => {
  const [title, setTitle] = useState('');
  const { toast } = useToast();
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 hover:text-blue-600 underline',
        },
      })
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-invert min-h-[200px] w-full p-4 focus:outline-none',
      },
    },
  });

  const handleSubmit = async () => {
    if (!title || !editor?.getHTML()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: authorData, error: authorError } = await supabase
      .from('blog_authors')
      .select('name')
      .eq('user_id', user.id)
      .single();

    if (authorError || !authorData) {
      toast({
        title: "Error",
        description: "Could not verify author",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('blog_posts')
      .insert({
        title,
        content: editor.getText(),
        content_html: editor.getHTML(),
        author_name: authorData.name,
        author_id: user.id
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Post created successfully",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-4xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">Create New Post</h2>
        
        <div className="space-y-4">
          <Input
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg font-bold"
          />
          
          <div className="flex gap-2 border-b border-gray-700 pb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive('bold') ? 'bg-gray-700' : ''}
            >
              <Bold size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive('italic') ? 'bg-gray-700' : ''}
            >
              <Italic size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={editor?.isActive('bulletList') ? 'bg-gray-700' : ''}
            >
              <List size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor?.isActive('heading') ? 'bg-gray-700' : ''}
            >
              <Heading2 size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt('Enter URL');
                if (url) {
                  editor?.chain().focus().toggleLink({ href: url }).run();
                }
              }}
              className={editor?.isActive('link') ? 'bg-gray-700' : ''}
            >
              <LinkIcon size={20} />
            </Button>
          </div>
          
          <EditorContent editor={editor} className="min-h-[300px] bg-gray-900 rounded-lg" />
          
          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-[#FF6D59] hover:bg-[#ff8574]"
            >
              Publish Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
