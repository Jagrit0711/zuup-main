import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface Message {
  id: string;
  user_name: string;
  content: string;
  created_at: string;
}

const TeamChat = ({ currentUser }: { currentUser: string }) => {
  const [message, setMessage] = useState('');

  const { data: messages = [], refetch } = useQuery({
    queryKey: ['team-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      return data || [];
    },
    refetchInterval: 3000 // Refetch every 3 seconds
  });

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    await supabase.from('team_messages').insert({
      user_name: currentUser,
      content: message
    });

    setMessage('');
    refetch();
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Team Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ScrollArea className="h-[300px] rounded-md border border-gray-700 p-4">
            <div className="space-y-4">
              {messages.map((msg: Message) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.user_name === currentUser ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.user_name === currentUser
                        ? 'bg-[#FF6D59] text-white'
                        : 'bg-gray-700 text-gray-100'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">{msg.user_name}</p>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {new Date(msg.created_at).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <form onSubmit={sendMessage} className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button type="submit" className="bg-[#FF6D59] hover:bg-[#ff8574]">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamChat;