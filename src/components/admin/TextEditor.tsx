import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TextEditorProps {
  title: string;
  initialContent: string;
  storageKey: string;
}

const TextEditor = ({ title, initialContent, storageKey }: TextEditorProps) => {
  const { toast } = useToast();
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    localStorage.setItem(storageKey, content);
    toast({
      title: `${title} updated`,
      description: "The content has been saved successfully.",
    });
  };

  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
        />
        <button
          onClick={handleSave}
          className="w-full bg-[#FF6D59] text-white py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
        >
          Save Changes
        </button>
      </CardContent>
    </Card>
  );
};

export default TextEditor;