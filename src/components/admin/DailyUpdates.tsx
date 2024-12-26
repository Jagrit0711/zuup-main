import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { supabase } from '@/lib/supabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const DailyUpdates = ({ currentUser }: { currentUser: string }) => {
  const { toast } = useToast();
  const [newUpdate, setNewUpdate] = useState('');
  const queryClient = useQueryClient();

  // Fetch updates
  const { data: updates = [], isLoading } = useQuery({
    queryKey: ['daily-updates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('daily_updates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  // Add new update
  const addUpdateMutation = useMutation({
    mutationFn: async (content: string) => {
      const { data, error } = await supabase
        .from('daily_updates')
        .insert([
          {
            user_id: currentUser,
            content,
            user_name: currentUser,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily-updates'] });
      setNewUpdate('');
      toast({
        title: "Success",
        description: "Daily update posted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to post update: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmitUpdate = () => {
    if (!newUpdate.trim()) {
      toast({
        title: "Error",
        description: "Please enter your daily update",
        variant: "destructive"
      });
      return;
    }

    addUpdateMutation.mutate(newUpdate);
  };

  if (isLoading) {
    return <div>Loading updates...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800 hover:bg-gray-900/80 transition-colors">
        <CardHeader>
          <CardTitle className="text-white">Post Team Update</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="Share your progress with the team..."
              className="w-full h-32 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none focus:ring-2 focus:ring-[#FF6D59] focus:border-transparent transition-all"
            />
            <Button 
              onClick={handleSubmitUpdate}
              className="bg-[#FF6D59] hover:bg-[#ff8574] transition-colors"
              disabled={addUpdateMutation.isPending}
            >
              {addUpdateMutation.isPending ? 'Posting...' : 'Post Update'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {updates.map((update) => (
          <Card key={update.id} className="bg-gray-900 border-gray-800 hover:bg-gray-900/80 transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{update.user_name}</h3>
                  <p className="text-sm text-gray-400">
                    {format(new Date(update.created_at), 'PPpp')}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{update.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyUpdates;