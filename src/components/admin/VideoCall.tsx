import { useState } from 'react';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import VideoCallList from './video/VideoCallList';
import VideoCallControls from './video/VideoCallControls';

const VideoCall = () => {
  const [meeting, setMeeting] = useState<any>(null);
  const [client, initClient] = useDyteClient();
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
      
      const { error } = await supabase
        .from('meetings')
        .insert({
          meeting_id: meetingData.data.id,
          title: 'Admin Support Call',
          created_by: 'Admin',
        });

      if (error) throw error;

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
      <VideoCallControls
        meeting={meeting}
        client={client}
        onCreateMeeting={createMeeting}
        onJoinMeeting={() => joinMeeting()}
      />
      
      <VideoCallList
        meetings={meetings}
        isLoading={isLoading}
        onJoinMeeting={joinMeeting}
        refetchMeetings={() => queryClient.invalidateQueries({ queryKey: ['meetings'] })}
        client={client}
      />
      
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