import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle } from 'lucide-react';
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
    refetchInterval: 3000
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
    <Card className="bg-gray-900 border-gray-800 h-[600px] flex flex-col">
      <CardHeader className="border-b border-gray-800">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-white" />
          <CardTitle className="text-white">Team Updates</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg: Message) => {
              const isCurrentUser = msg.user_name === currentUser;
              return (
                <div
                  key={msg.id}
                  className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex flex-col max-w-[75%] space-y-1">
                    <div
                      className={`rounded-2xl px-4 py-2 break-words ${
                        isCurrentUser
                          ? 'bg-[#FF6D59] text-white rounded-br-none'
                          : 'bg-gray-800 text-gray-100 rounded-bl-none'
                      }`}
                    >
                      {!isCurrentUser && (
                        <p className="text-xs font-medium text-gray-400 mb-1">
                          {msg.user_name}
                        </p>
                      )}
                      <p className="text-sm">{msg.content}</p>
                    </div>
                    <span className={`text-xs text-gray-500 ${
                      isCurrentUser ? 'text-right' : 'text-left'
                    }`}>
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t border-gray-800">
          <form onSubmit={sendMessage} className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="bg-gray-800 border-gray-700 text-white focus:ring-[#FF6D59] focus:border-[#FF6D59]"
            />
            <Button 
              type="submit" 
              size="icon"
              className="bg-[#FF6D59] hover:bg-[#ff8574] text-white"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamChat;