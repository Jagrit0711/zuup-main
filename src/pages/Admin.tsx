import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import SiteStats from '@/components/admin/SiteStats';
import DailyUpdates from '@/components/admin/DailyUpdates';
import DonationTracker from '@/components/admin/DonationTracker';
import VideoCall from '@/components/admin/VideoCall';
import { adminUsers } from '@/data/adminUsers';
import { AdminUser } from '@/types/admin';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import AdminLogin from '@/components/admin/auth/AdminLogin';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    setNotifications([
      'New donation received: ₹5000',
      'Team member updated their status',
      'Website traffic increased by 25%'
    ]);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = adminUsers.find(
      u => u.username === username && u.password === password
    );
    
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      toast({
        title: "Logged in successfully",
        description: `Welcome back, ${user.name}!`,
      });
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your username and password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated || !currentUser) {
    return (
      <AdminLogin
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <AdminHeader
          currentUser={currentUser}
          notifications={notifications}
          onLogout={handleLogout}
        />
        
        <Tabs defaultValue="stats" className="space-y-8">
          <TabsList className="bg-gray-800 border-gray-700 p-1">
            <TabsTrigger 
              value="stats"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
            >
              Site Statistics
            </TabsTrigger>
            <TabsTrigger 
              value="updates"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
            >
              Team Updates
            </TabsTrigger>
            <TabsTrigger 
              value="donations"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
            >
              Donations
            </TabsTrigger>
            <TabsTrigger 
              value="video"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
            >
              Video Call
            </TabsTrigger>
            {currentUser?.role === 'super_admin' && (
              <>
                <TabsTrigger 
                  value="team"
                  className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
                >
                  Team Management
                </TabsTrigger>
                <TabsTrigger 
                  value="contact"
                  className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
                >
                  Contact Information
                </TabsTrigger>
              </>
            )}
          </TabsList>

          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6 animate-fade-in">
            <TabsContent value="stats">
              <SiteStats />
            </TabsContent>

            <TabsContent value="updates">
              <DailyUpdates currentUser={currentUser.username} />
            </TabsContent>

            <TabsContent value="donations">
              <DonationTracker currentUser={currentUser.username} />
            </TabsContent>

            <TabsContent value="video">
              <VideoCall />
            </TabsContent>

            {currentUser.role === 'super_admin' && (
              <>
                <TabsContent value="team">
                  <TeamEditor />
                </TabsContent>

                <TabsContent value="contact">
                  <ContactEditor />
                </TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;