import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DonationEntry } from '@/types/admin';
import { format } from 'date-fns';
import { Upload, ExternalLink } from 'lucide-react';

const DonationTracker = ({ currentUser }: { currentUser: string }) => {
  const { toast } = useToast();
  const [donations, setDonations] = useState<DonationEntry[]>([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<string>('');

  useEffect(() => {
    const savedDonations = localStorage.getItem('donations');
    if (savedDonations) {
      setDonations(JSON.parse(savedDonations));
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitDonation = () => {
    if (!amount || !description || !screenshot) {
      toast({
        title: "Error",
        description: "Please fill all fields and upload a screenshot",
        variant: "destructive"
      });
      return;
    }

    const donation: DonationEntry = {
      id: Date.now().toString(),
      userId: currentUser,
      amount: parseFloat(amount),
      screenshot,
      timestamp: new Date().toISOString(),
      userName: currentUser,
      description
    };

    const updatedList = [...donations, donation];
    setDonations(updatedList);
    localStorage.setItem('donations', JSON.stringify(updatedList));
    
    // Reset form
    setAmount('');
    setDescription('');
    setScreenshot('');
    
    toast({
      title: "Success",
      description: "Donation entry added successfully",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Add Donation Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="Enter amount"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-24 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none"
                placeholder="Enter donation details"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Screenshot
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                  <Upload size={20} className="text-white" />
                  <span className="text-white">Upload Screenshot</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {screenshot && (
                  <span className="text-green-500">Screenshot uploaded</span>
                )}
              </div>
            </div>

            <Button 
              onClick={handleSubmitDonation}
              className="bg-[#FF6D59] hover:bg-[#ff8574]"
            >
              Submit Donation Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {donations
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .map((donation) => (
            <Card key={donation.id} className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{donation.userName}</h3>
                    <p className="text-sm text-gray-400">
                      {format(new Date(donation.timestamp), 'PPpp')}
                    </p>
                    <p className="text-xl font-bold text-[#FF6D59] mt-2">
                      ₹{donation.amount.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(donation.screenshot, '_blank')}
                  >
                    <ExternalLink size={16} />
                    View Screenshot
                  </Button>
                </div>
                <p className="text-gray-300 whitespace-pre-wrap">{donation.description}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DonationTracker;