import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatUrlEditor = () => {
  const { toast } = useToast();
  const [chatUrl, setChatUrl] = useState(localStorage.getItem('chatUrl') || '');

  const handleSave = () => {
    localStorage.setItem('chatUrl', chatUrl);
    toast({
      title: "Chat URL updated",
      description: "The chat URL has been saved successfully.",
    });
  };

  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <CardTitle>Chat URL Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <input
          type="url"
          value={chatUrl}
          onChange={(e) => setChatUrl(e.target.value)}
          placeholder="Enter chat URL"
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

export default ChatUrlEditor;