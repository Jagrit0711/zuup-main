import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactEditor = () => {
  const { toast } = useToast();
  const [contactInfo, setContactInfo] = useState({
    phone1: "+91 113-550-4576",
    phone2: "+91 885-184-4602",
    email1: "jag@techygram.onmicrosoft.com",
    email2: "jagrit0711@gmail.com"
  });

  // Load saved contact info on mount
  useEffect(() => {
    const savedInfo = localStorage.getItem('contactInfo');
    if (savedInfo) {
      setContactInfo(JSON.parse(savedInfo));
    }
  }, []);

  // Listen for changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'contactInfo' && e.newValue) {
        setContactInfo(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSave = () => {
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    // Dispatch event for other components
    window.dispatchEvent(new Event('contactInfoUpdated'));
    toast({
      title: "Changes saved",
      description: "Contact information has been updated successfully.",
    });
  };

  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Primary Phone</label>
              <input
                type="text"
                value={contactInfo.phone1}
                onChange={(e) => setContactInfo({ ...contactInfo, phone1: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Secondary Phone</label>
              <input
                type="text"
                value={contactInfo.phone2}
                onChange={(e) => setContactInfo({ ...contactInfo, phone2: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Primary Email</label>
              <input
                type="email"
                value={contactInfo.email1}
                onChange={(e) => setContactInfo({ ...contactInfo, email1: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Secondary Email</label>
              <input
                type="email"
                value={contactInfo.email2}
                onChange={(e) => setContactInfo({ ...contactInfo, email2: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-[#FF6D59] text-white py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
        >
          Save Changes
        </button>
      </CardContent>
    </Card>
  );
};

export default ContactEditor;