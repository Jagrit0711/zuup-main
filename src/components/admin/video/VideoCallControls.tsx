import { Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCallControlsProps {
  meeting: any;
  client: any;
  onCreateMeeting: () => void;
  onJoinMeeting: () => void;
}

const VideoCallControls = ({ meeting, client, onCreateMeeting, onJoinMeeting }: VideoCallControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button 
        onClick={onCreateMeeting} 
        disabled={!!meeting}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
      >
        <Video className="h-5 w-5" />
        Create New Meeting
      </Button>
      <Button 
        onClick={onJoinMeeting} 
        disabled={!meeting || !!client}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Users className="h-5 w-5" />
        Join Current Meeting
      </Button>
    </div>
  );
};

export default VideoCallControls;