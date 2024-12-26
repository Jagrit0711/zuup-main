import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { uploadImage } from '@/utils/uploadUtils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface DonationFormProps {
  currentUser: string;
}

const DonationForm = ({ currentUser }: DonationFormProps) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState<string>('');
  const queryClient = useQueryClient();

  const addDonation = useMutation({
    mutationFn: async (newDonation: {
      userId: string;
      amount: number;
      screenshot: string;
      userName: string;
      description: string;
    }) => {
      const { data, error } = await supabase
        .from('donations')
        .insert([{
          user_id: newDonation.userId,
          amount: newDonation.amount,
          screenshot_url: newDonation.screenshot,
          user_name: newDonation.userName,
          description: newDonation.description
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
      toast({
        title: "Success",
        description: "Donation entry added successfully",
      });
      // Reset form
      setAmount('');
      setDescription('');
      setScreenshot('');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add donation entry",
        variant: "destructive"
      });
      console.error('Error adding donation:', error);
    }
  });

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const publicUrl = await uploadImage(file);
        setScreenshot(publicUrl);
        toast({
          title: "Success",
          description: "Screenshot uploaded successfully",
        });
      } catch (error) {
        console.error('Error uploading image:', error);
        toast({
          title: "Error",
          description: "Failed to upload screenshot",
          variant: "destructive"
        });
      }
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

    addDonation.mutate({
      userId: currentUser,
      amount: parseFloat(amount),
      screenshot,
      userName: currentUser,
      description
    });
  };

  return (
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
            disabled={addDonation.isPending}
          >
            {addDonation.isPending ? 'Submitting...' : 'Submit Donation Entry'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationForm;