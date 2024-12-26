import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const LogoEditor = () => {
  const { toast } = useToast();
  const [logoUrl, setLogoUrl] = useState("/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
        localStorage.setItem('siteLogoUrl', reader.result as string);
        toast({
          title: "Logo updated",
          description: "The logo has been updated successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <CardTitle>Logo Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center p-4 border-2 border-dashed border-gray-700 rounded-lg">
          <img src={logoUrl} alt="Current Logo" className="h-20 w-auto" />
        </div>
        <label className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors justify-center">
          <Upload size={20} className="text-white" />
          <span className="text-white">Upload New Logo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </CardContent>
    </Card>
  );
};

export default LogoEditor;