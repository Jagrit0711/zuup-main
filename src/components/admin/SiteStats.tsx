import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, TrendingUp, Eye } from 'lucide-react';

const SiteStats = () => {
  const [viewsData, setViewsData] = useState([]);
  const [quickStats, setQuickStats] = useState({
    totalViews: 0,
    growthRate: '+12.5%',
    activeUsers: 245
  });

  useEffect(() => {
    // Load or initialize view data
    const loadViewData = () => {
      const savedViews = localStorage.getItem('siteViews');
      if (savedViews) {
        const data = JSON.parse(savedViews);
        setViewsData(data);
        setQuickStats(prev => ({
          ...prev,
          totalViews: data.reduce((acc, curr) => acc + curr.views, 0)
        }));
      } else {
        // Initialize with empty data for current month
        const currentDate = new Date();
        const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        const initialData = [{
          date: currentMonth,
          views: 0
        }];
        localStorage.setItem('siteViews', JSON.stringify(initialData));
        setViewsData(initialData);
      }
    };

    loadViewData();

    // Set up view tracking
    const trackPageView = () => {
      const currentDate = new Date();
      const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
      
      const savedViews = JSON.parse(localStorage.getItem('siteViews') || '[]');
      const currentMonthData = savedViews.find(item => item.date === currentMonth);
      
      if (currentMonthData) {
        currentMonthData.views += 1;
        localStorage.setItem('siteViews', JSON.stringify(savedViews));
        setViewsData(savedViews);
      } else {
        const newData = [...savedViews, { date: currentMonth, views: 1 }];
        localStorage.setItem('siteViews', JSON.stringify(newData));
        setViewsData(newData);
      }
    };

    // Track view on component mount
    trackPageView();

    // Listen for navigation events
    const handleNavigation = () => {
      trackPageView();
    };

    window.addEventListener('popstate', handleNavigation);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-purple-500">Total Views</p>
                <h3 className="text-2xl font-bold text-white">{quickStats.totalViews}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-500">Growth Rate</p>
                <h3 className="text-2xl font-bold text-white">{quickStats.growthRate}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-500">Active Users</p>
                <h3 className="text-2xl font-bold text-white">{quickStats.activeUsers}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Views Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewsData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6D59" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6D59" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#FF6D59"
                  fill="url(#colorViews)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteStats;