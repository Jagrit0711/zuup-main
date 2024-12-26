import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, DollarSign } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { format, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';

const SiteStats = () => {
  const { data: donations = [] } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('donations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Generate dates from December 2nd to current date
  const startDate = new Date('2023-12-02');
  const endDate = new Date();
  
  const dateRange = eachDayOfInterval({ start: startDate, end: endDate });
  
  // Generate mock views data for each day (25-100 range)
  const viewsData = dateRange.map(date => ({
    date: format(date, 'MMM d'),
    views: Math.floor(Math.random() * (100 - 25 + 1)) + 25
  }));

  // Group donations by user and calculate total amount
  const donationsByUser = donations.reduce((acc, curr) => {
    if (!acc[curr.user_name]) {
      acc[curr.user_name] = 0;
    }
    acc[curr.user_name] += curr.amount;
    return acc;
  }, {});

  // Convert to array format for chart
  const donationData = Object.entries(donationsByUser)
    .map(([name, amount]) => ({
      name,
      amount: amount as number
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5); // Show top 5 donors

  const totalDonations = donations.reduce((acc, curr) => acc + curr.amount, 0);
  const totalViews = viewsData.reduce((acc, curr) => acc + curr.views, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-[#E5DEFF] to-[#9b87f5] border-[#9b87f5]/30 hover:scale-105 transition-transform duration-300">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#9b87f5]/20 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-[#6E59A5]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#6E59A5]">Total Views</p>
                <h3 className="text-2xl font-bold text-[#7E69AB]">{totalViews.toLocaleString()}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#FEC6A1] to-[#F97316] border-[#F97316]/30 hover:scale-105 transition-transform duration-300">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#F97316]/20 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-[#F97316]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#F97316]">Total Donations</p>
                <h3 className="text-2xl font-bold text-[#F97316]">₹{totalDonations.toLocaleString()}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Donation Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                    formatter={(value) => [`₹${value}`, 'Amount']}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="url(#adminBarGradient)"
                    radius={[4, 4, 0, 0]}
                  >
                    <defs>
                      <linearGradient id="adminBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#9b87f5" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#9b87f5" stopOpacity={0.3}/>
                      </linearGradient>
                    </defs>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-100">Views Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={viewsData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                    domain={[0, 100]}
                    tickCount={6}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
                    formatter={(value) => [`${value} views`, 'Views']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#9b87f5"
                    fill="url(#colorViews)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SiteStats;