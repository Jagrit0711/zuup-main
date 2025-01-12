import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LiveStream = () => {
  const [streamKey, setStreamKey] = useState('');
  const { toast } = useToast();
  const streamUrl = 'rtmp://your-streaming-service-url/live';

  const handleCopyStreamUrl = () => {
    navigator.clipboard.writeText(streamUrl);
    toast({
      title: "Stream URL copied",
      description: "The stream URL has been copied to your clipboard",
    });
  };

  const handleCopyStreamKey = () => {
    if (streamKey) {
      navigator.clipboard.writeText(streamKey);
      toast({
        title: "Stream key copied",
        description: "The stream key has been copied to your clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Live Stream</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Stream Settings</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="streamUrl">Stream URL</Label>
                <div className="flex gap-2">
                  <Input 
                    id="streamUrl"
                    value={streamUrl}
                    readOnly
                    className="flex-1"
                  />
                  <Button onClick={handleCopyStreamUrl}>Copy</Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="streamKey">Stream Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="streamKey"
                    type="password"
                    value={streamKey}
                    onChange={(e) => setStreamKey(e.target.value)}
                    placeholder="Enter your stream key"
                    className="flex-1"
                  />
                  <Button onClick={handleCopyStreamKey}>Copy</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Live Stream</h2>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <p className="text-white">Stream preview will appear here</p>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">How to Stream</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open OBS Studio on your computer</li>
            <li>Go to Settings → Stream</li>
            <li>Select "Custom" as the service</li>
            <li>Copy and paste the Stream URL provided above</li>
            <li>Copy and paste your Stream Key</li>
            <li>Click "Start Streaming" in OBS</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;