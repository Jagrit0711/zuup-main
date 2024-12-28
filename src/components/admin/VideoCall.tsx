import { useEffect, useState } from 'react';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy } from 'lucide-react';

interface Meeting {
  id: string;
  title: string;
  created_at?: string;
}

const VideoCall = () => {
  const [meeting, setMeeting] = useState<any>(null);
  const [client, initClient] = useDyteClient();
  const { toast } = useToast();
  const [pastMeetings, setPastMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    // Load past meetings from localStorage
    const savedMeetings = localStorage.getItem('dyteMeetings');
    if (savedMeetings) {
      setPastMeetings(JSON.parse(savedMeetings));
    }
  }, []);

  const saveMeetingToHistory = (newMeeting: Meeting) => {
    const updatedMeetings = [newMeeting, ...pastMeetings].slice(0, 10); // Keep last 10 meetings
    setPastMeetings(updatedMeetings);
    localStorage.setItem('dyteMeetings', JSON.stringify(updatedMeetings));
  };

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
      
      // Save to meeting history
      saveMeetingToHistory({
        id: meetingData.data.id,
        title: 'Admin Support Call',
        created_at: new Date().toISOString(),
      });

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
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button onClick={createMeeting} disabled={!!meeting}>
          Create Meeting
        </Button>
        <Button onClick={() => joinMeeting()} disabled={!meeting || !!client}>
          Join Meeting
        </Button>
      </div>
      
      {/* Past Meetings Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Meetings</h3>
        <ScrollArea className="h-[200px] w-full rounded-md border border-gray-700 p-4">
          {pastMeetings.length === 0 ? (
            <p className="text-gray-500 text-center">No previous meetings found</p>
          ) : (
            <div className="space-y-4">
              {pastMeetings.map((pastMeeting) => (
                <div
                  key={pastMeeting.id}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium">{pastMeeting.title}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(pastMeeting.created_at || '').toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyMeetingId(pastMeeting.id)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => joinMeeting(pastMeeting.id)}
                      disabled={!!client}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
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