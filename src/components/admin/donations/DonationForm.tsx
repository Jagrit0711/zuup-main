import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface DonationFormProps {
  currentUser: string;
}

const DonationForm = ({ currentUser }: DonationFormProps) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();

  const addDonation = useMutation({
    mutationFn: async (newDonation: {
      userId: string;
      amount: number;
      userName: string;
      description: string;
    }) => {
      const { data, error } = await supabase
        .from('donations')
        .insert([{
          user_id: newDonation.userId,
          amount: newDonation.amount,
          screenshot_url: 'https://placeholder.com/donation-placeholder.png', // Default placeholder URL
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

  const handleSubmitDonation = () => {
    if (!amount || !description) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    addDonation.mutate({
      userId: currentUser,
      amount: parseFloat(amount),
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