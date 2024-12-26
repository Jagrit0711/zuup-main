import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SiteStats = () => {
  const [viewsData, setViewsData] = useState([]);

  useEffect(() => {
    // Load or initialize view data
    const loadViewData = () => {
      const savedViews = localStorage.getItem('siteViews');
      if (savedViews) {
        setViewsData(JSON.parse(savedViews));
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
      <Card className="bg-gray-900 text-white border-gray-800">
        <CardHeader>
          <CardTitle>Site Views Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsData}>
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
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#FF6D59" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteStats;