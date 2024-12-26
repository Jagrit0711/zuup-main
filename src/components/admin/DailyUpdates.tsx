import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DailyUpdate } from '@/types/admin';
import { format } from 'date-fns';

const DailyUpdates = ({ currentUser }: { currentUser: string }) => {
  const { toast } = useToast();
  const [updates, setUpdates] = useState<DailyUpdate[]>([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    const savedUpdates = localStorage.getItem('dailyUpdates');
    if (savedUpdates) {
      setUpdates(JSON.parse(savedUpdates));
    }
  }, []);

  const handleSubmitUpdate = () => {
    if (!newUpdate.trim()) {
      toast({
        title: "Error",
        description: "Please enter your daily update",
        variant: "destructive"
      });
      return;
    }

    const update: DailyUpdate = {
      id: Date.now().toString(),
      userId: currentUser,
      content: newUpdate,
      timestamp: new Date().toISOString(),
      userName: currentUser
    };

    const updatedList = [...updates, update];
    setUpdates(updatedList);
    localStorage.setItem('dailyUpdates', JSON.stringify(updatedList));
    setNewUpdate('');
    
    toast({
      title: "Success",
      description: "Daily update posted successfully",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Post Daily Update</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="What did you work on today?"
              className="w-full h-32 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none"
            />
            <Button 
              onClick={handleSubmitUpdate}
              className="bg-[#FF6D59] hover:bg-[#ff8574]"
            >
              Post Update
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {updates
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .map((update) => (
            <Card key={update.id} className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{update.userName}</h3>
                    <p className="text-sm text-gray-400">
                      {format(new Date(update.timestamp), 'PPpp')}
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