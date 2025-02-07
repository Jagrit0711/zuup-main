
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        toast({
          title: "Installation successful!",
          description: "The app has been installed on your device.",
        });
      }
    } catch (error) {
      console.error('Installation failed:', error);
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-16 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gradient-to-r from-purple-900 to-blue-900 p-4 rounded-lg shadow-xl z-50 animate-fade-in">
      <button
        onClick={() => setShowPrompt(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>
      
      <h3 className="text-lg font-semibold text-white mb-2">
        Install Zuup App
      </h3>
      <p className="text-gray-200 text-sm mb-4">
        Install our app for a better experience and quick access!
      </p>
      
      <Button
        onClick={handleInstall}
        className="w-full bg-white text-purple-900 hover:bg-gray-100"
      >
        Install Now
      </Button>
    </div>
  );
};

export default InstallPrompt;
