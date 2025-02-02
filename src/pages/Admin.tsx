import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import SiteStats from '@/components/admin/SiteStats';
import DailyUpdates from '@/components/admin/DailyUpdates';
import DonationTracker from '@/components/admin/DonationTracker';
import VideoCall from '@/components/admin/VideoCall';
import { AdminUser } from '@/types/admin';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import AdminLogin from '@/components/admin/auth/AdminLogin';
import UnifiedAdminManager from '@/components/admin/UnifiedAdminManager';
import { supabase } from '@/integrations/supabase/client';

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select()
        .eq('username', username)
        .eq('password', password)
        .single();

      if (error) throw error;
      
      if (data) {
        setIsAuthenticated(true);
        setCurrentUser({
          username: data.username,
          password: data.password,
          role: data.role as 'team_member' | 'super_admin',
          name: data.name
        });
        toast({
          title: "Logged in successfully",
          description: `Welcome back, ${data.name}!`,
        });
      } else {
        toast({
          title: "Invalid credentials",
          description: "Please check your username and password",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
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
                <TabsTrigger 
                  value="admin"
                  className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white text-gray-300"
                >
                  Admin Management
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

                <TabsContent value="admin">
                  <UnifiedAdminManager />
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