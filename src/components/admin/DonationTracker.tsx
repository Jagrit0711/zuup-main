import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import DonationForm from './donations/DonationForm';
import DonationList from './donations/DonationList';

const DonationTracker = ({ currentUser }: { currentUser: string }) => {
  // Fetch donations
  const { data: donations = [] } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('donations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="space-y-6">
      <DonationForm currentUser={currentUser} />
      <DonationList donations={donations} />
    </div>
  );
};

export default DonationTracker;