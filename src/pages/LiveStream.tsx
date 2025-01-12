import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LiveStream = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const { toast } = useToast();

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setIsStreaming(true);

      toast({
        title: "Stream started",
        description: "Your camera and microphone are now live",
      });
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast({
        title: "Error starting stream",
        description: "Please make sure you have a camera and microphone connected",
        variant: "destructive"
      });
    }
  };

  const stopStream = () => {
    if (mediaRecorderRef.current && videoRef.current) {
      mediaRecorderRef.current.stop();
      const tracks = (videoRef.current.srcObject as MediaStream)?.getTracks();
      tracks?.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
      
      toast({
        title: "Stream stopped",
        description: "Your stream has ended",
      });
    }
  };

  useEffect(() => {
    return () => {
      if (isStreaming) {
        stopStream();
      }
    };
  }, [isStreaming]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Live Stream</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Stream Controls</h2>
            <div className="space-y-4">
              <Button 
                onClick={isStreaming ? stopStream : startStream}
                className={isStreaming ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
              >
                {isStreaming ? "Stop Streaming" : "Start Streaming"}
              </Button>
              
              <div className="text-sm text-gray-500">
                {isStreaming ? (
                  <p>🔴 Live: Your camera and microphone are active</p>
                ) : (
                  <p>Click 'Start Streaming' to begin broadcasting</p>
                )}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Stream Preview</h2>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">How to Use</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Make sure your camera and microphone are connected</li>
            <li>Click the "Start Streaming" button to begin</li>
            <li>Allow browser permissions for camera and microphone access</li>
            <li>Your stream will appear in the preview window</li>
            <li>Click "Stop Streaming" when you're done</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;