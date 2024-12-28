import { useEffect, useState } from 'react';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const VideoCall = () => {
  const [meeting, setMeeting] = useState<any>(null);
  const [client, initClient] = useDyteClient();
  const { toast } = useToast();

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

  const joinMeeting = async () => {
    if (!meeting) return;
    
    try {
      const DYTE_ORGANIZATION_ID = import.meta.env.VITE_DYTE_ORG_ID;
      const DYTE_API_KEY = import.meta.env.VITE_DYTE_API_KEY;

      const response = await fetch(`https://api.dyte.io/v2/meetings/${meeting.id}/participants`, {
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
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button onClick={createMeeting} disabled={!!meeting}>
          Create Meeting
        </Button>
        <Button onClick={joinMeeting} disabled={!meeting || !!client}>
          Join Meeting
        </Button>
      </div>
      
      {client && (
        <div className="h-[600px] w-full rounded-lg overflow-hidden border border-gray-700">
          <DyteProvider value={client}>
            <DyteMeeting meeting={client} />
          </DyteProvider>
        </div>
      )}
    </div>
  );
};

export default VideoCall;