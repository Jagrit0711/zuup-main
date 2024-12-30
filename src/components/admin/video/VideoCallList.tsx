import { useState } from 'react';
import { Copy, Video, Calendar, Users, Trash, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface Meeting {
  id: string;
  title: string;
  meeting_id: string;
  created_at: string;
  created_by: string;
}

interface VideoCallListProps {
  meetings: Meeting[];
  isLoading: boolean;
  onJoinMeeting: (meetingId: string) => void;
  refetchMeetings: () => void;
  client: any;
}

const VideoCallList = ({ meetings, isLoading, onJoinMeeting, refetchMeetings, client }: VideoCallListProps) => {
  const [editingMeeting, setEditingMeeting] = useState<Meeting | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const { toast } = useToast();

  const copyMeetingId = (meetingId: string) => {
    navigator.clipboard.writeText(meetingId);
    toast({
      title: "Meeting ID copied",
      description: "The meeting ID has been copied to your clipboard",
    });
  };

  const handleDelete = async (meetingId: string) => {
    try {
      const { error } = await supabase
        .from('meetings')
        .delete()
        .eq('meeting_id', meetingId);

      if (error) throw error;

      toast({
        title: "Meeting deleted",
        description: "The meeting has been removed successfully",
      });
      
      refetchMeetings();
    } catch (error) {
      console.error('Error deleting meeting:', error);
      toast({
        title: "Error deleting meeting",
        description: "Failed to delete the meeting",
        variant: "destructive",
      });
    }
  };

  const handleRename = async () => {
    if (!editingMeeting) return;

    try {
      const { error } = await supabase
        .from('meetings')
        .update({ title: newTitle })
        .eq('meeting_id', editingMeeting.meeting_id);

      if (error) throw error;

      toast({
        title: "Meeting renamed",
        description: "The meeting title has been updated successfully",
      });
      
      setEditingMeeting(null);
      refetchMeetings();
    } catch (error) {
      console.error('Error renaming meeting:', error);
      toast({
        title: "Error renaming meeting",
        description: "Failed to update the meeting title",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <ScrollArea className="h-[300px] w-full rounded-md border">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : meetings.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
            <Calendar className="h-12 w-12 mb-2 opacity-50" />
            <p className="text-center">No previous meetings found</p>
          </div>
        ) : (
          <div className="space-y-3 p-4">
            {meetings.map((meeting) => (
              <Card
                key={meeting.id}
                className="p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{meeting.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Created by {meeting.created_by} • {new Date(meeting.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyMeetingId(meeting.meeting_id)}
                      className="hover:bg-accent"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setEditingMeeting(meeting);
                        setNewTitle(meeting.title);
                      }}
                      className="hover:bg-accent"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(meeting.meeting_id)}
                      className="hover:bg-red-100 hover:text-red-600"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => onJoinMeeting(meeting.meeting_id)}
                      disabled={!!client}
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </ScrollArea>

      <Dialog open={!!editingMeeting} onOpenChange={() => setEditingMeeting(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Meeting</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter new meeting title"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingMeeting(null)}>
              Cancel
            </Button>
            <Button onClick={handleRename}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoCallList;