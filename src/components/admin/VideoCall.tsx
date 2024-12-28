import { useEffect, useState } from 'react';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy, Video, Calendar, Users } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';

interface Meeting {
  id: string;
  title: string;
  created_at: string;
  created_by: string;
}

const VideoCall = () => {
  const [meeting, setMeeting] = useState<any>(null);
  const [client, initClient] = useDyteClient();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch meetings from Supabase
  const { data: meetings = [], isLoading } = useQuery({
    queryKey: ['meetings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return data;
    },
  });

  const copyMeetingId = (meetingId: string) => {
    navigator.clipboard.writeText(meetingId);
    toast({
      title: "Meeting ID copied",
      description: "The meeting ID has been copied to your clipboard",
    });
  };

  const createMeeting = async () => {
    try {
      const DYTE_ORGANIZATION_ID = import.meta.env.VITE_DYTE_ORG_ID;
      const DYTE_API_KEY = import.meta.env.VITE_DYTE_API_KEY;

      const response = await fetch('https://api.dyte.io/v2/meetings', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(DYTE_ORGANIZATION_ID + ':' + DYTE_API_KEY)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Admin Support Call',
          preferred_region: 'ap-south-1',
          record_on_start: false,
        }),
      });

      const meetingData = await response.json();
      setMeeting(meetingData.data);
      
      // Save to Supabase
      const { error } = await supabase
        .from('meetings')
        .insert({
          meeting_id: meetingData.data.id,
          title: 'Admin Support Call',
          created_by: 'Admin',
        });

      if (error) throw error;

      // Invalidate meetings query to refresh the list
      queryClient.invalidateQueries({ queryKey: ['meetings'] });

      toast({
        title: "Meeting created",
        description: "You can now join the video call",
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
      toast({
        title: "Error creating meeting",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  const joinMeeting = async (meetingId?: string) => {
    const meetingToJoin = meetingId || meeting?.id;
    if (!meetingToJoin) return;
    
    try {
      const DYTE_ORGANIZATION_ID = import.meta.env.VITE_DYTE_ORG_ID;
      const DYTE_API_KEY = import.meta.env.VITE_DYTE_API_KEY;

      const response = await fetch(`https://api.dyte.io/v2/meetings/${meetingToJoin}/participants`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(DYTE_ORGANIZATION_ID + ':' + DYTE_API_KEY)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Admin',
          preset_name: 'group_call_host',
          custom_participant_id: 'admin-' + Date.now(),
        }),
      });

      const { data } = await response.json();
      await initClient({
        authToken: data.token,
        defaults: {
          audio: true,
          video: true,
        },
      });
    } catch (error) {
      console.error('Error joining meeting:', error);
      toast({
        title: "Error joining meeting",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={createMeeting} 
          disabled={!!meeting}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
        >
          <Video className="h-5 w-5" />
          Create New Meeting
        </Button>
        <Button 
          onClick={() => joinMeeting()} 
          disabled={!meeting || !!client}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Users className="h-5 w-5" />
          Join Current Meeting
        </Button>
      </div>
      
      {/* Recent Meetings Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <Calendar className="h-5 w-5" />
          Recent Meetings
        </h3>
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
              {meetings.map((pastMeeting) => (
                <Card
                  key={pastMeeting.id}
                  className="p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{pastMeeting.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Created by {pastMeeting.created_by} • {new Date(pastMeeting.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyMeetingId(pastMeeting.meeting_id)}
                        className="hover:bg-accent"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => joinMeeting(pastMeeting.meeting_id)}
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
      </div>
      
      {client && (
        <div className="h-[600px] w-full rounded-lg overflow-hidden border">
          <DyteProvider value={client}>
            <DyteMeeting meeting={client} />
          </DyteProvider>
        </div>
      )}
    </div>
  );
};

export default VideoCall;