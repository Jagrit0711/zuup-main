import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

interface DonationListProps {
  donations: Array<{
    id: string;
    user_name: string;
    created_at: string;
    amount: number;
    screenshot_url: string;
    description: string;
  }>;
}

const DonationList = ({ donations }: DonationListProps) => {
  return (
    <div className="space-y-4">
      {donations.map((donation) => (
        <Card key={donation.id} className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{donation.user_name}</h3>
                <p className="text-sm text-gray-400">
                  {format(new Date(donation.created_at), 'PPpp')}
                </p>
                <p className="text-xl font-bold text-[#FF6D59] mt-2">
                  ₹{donation.amount.toLocaleString()}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(donation.screenshot_url, '_blank')}
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
  );
};

export default DonationList;