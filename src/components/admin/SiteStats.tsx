import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, DollarSign } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

const SiteStats = () => {
  const { data: donations = [] } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('donations')
        .select('*')
        .order('amount', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data || [];
    }
  });

  const { data: viewsData = [] } = useQuery({
    queryKey: ['page-views'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_views')
        .select('*')
        .order('date', { ascending: true });
      
      if (error) throw error;
      return data || [];
    }
  });

  const { data: adminDonations = [] } = useQuery({
    queryKey: ['admin-donations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('donations')
        .select('user_name, amount')
        .eq('is_admin', true)
        .order('amount', { ascending: false });
      
      if (error) throw error;
      
      // Group donations by admin
      const groupedDonations = data?.reduce((acc, curr) => {
        acc[curr.user_name] = (acc[curr.user_name] || 0) + curr.amount;
        return acc;
      }, {});
      
      // Convert to array format for chart
      return Object.entries(groupedDonations || {}).map(([name, amount]) => ({
        name,
        amount
      }));
    }
  });

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
            <CardTitle className="text-gray-100">Admin Donation Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adminDonations}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
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
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }}
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