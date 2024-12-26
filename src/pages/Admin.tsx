import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import SiteStats from '@/components/admin/SiteStats';
import DailyUpdates from '@/components/admin/DailyUpdates';
import DonationTracker from '@/components/admin/DonationTracker';
import TeamChat from '@/components/admin/TeamChat';
import { Lock, LogOut, User, Bell } from 'lucide-react';
import { adminUsers } from '@/data/adminUsers';
import { AdminUser } from '@/types/admin';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate some notifications
    setNotifications([
      'New donation received: ₹5000',
      'Team member updated their daily status',
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

  if (!isAuthenticated || !currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md space-y-8 p-8 bg-gray-800/50 border-gray-700">
          <div className="text-center">
            <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-[#FF6D59]" />
            </div>
            <h2 className="text-3xl font-bold text-white">Admin Access</h2>
            <p className="text-gray-400 mt-2">Enter your credentials to continue</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FF6D59] focus:border-transparent transition-all"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1 block">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FF6D59] focus:border-transparent transition-all"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FF6D59] text-white py-6 rounded-lg hover:bg-[#ff8574] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Lock className="h-4 w-4" />
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage your website content and track performance</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button
                variant="outline"
                className="bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50"
              >
                <Bell className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Notifications</span>
                <span className="absolute -top-1 -right-1 bg-[#FF6D59] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              </Button>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-lg border border-gray-700">
              <div className="bg-gray-700 p-2 rounded-full">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-white hidden md:inline">{currentUser.name}</span>
            </div>
            <Button
              onClick={() => {
                setIsAuthenticated(false);
                setCurrentUser(null);
                setUsername('');
                setPassword('');
              }}
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="stats" className="space-y-8">
          <TabsList className="bg-gray-800/50 border-gray-700 p-1">
            <TabsTrigger 
              value="stats"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
            >
              Site Statistics
            </TabsTrigger>
            <TabsTrigger 
              value="chat"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
            >
              Team Chat
            </TabsTrigger>
            <TabsTrigger 
              value="updates"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
            >
              Daily Updates
            </TabsTrigger>
            <TabsTrigger 
              value="donations"
              className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
            >
              Donations
            </TabsTrigger>
            {currentUser?.role === 'super_admin' && (
              <>
                <TabsTrigger 
                  value="team"
                  className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
                >
                  Team Management
                </TabsTrigger>
                <TabsTrigger 
                  value="contact"
                  className="data-[state=active]:bg-[#FF6D59] data-[state=active]:text-white"
                >
                  Contact Information
                </TabsTrigger>
              </>
            )}
          </TabsList>

          <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-6">
            <TabsContent value="stats">
              <SiteStats />
            </TabsContent>

            <TabsContent value="chat">
              <TeamChat currentUser={currentUser?.username || ''} />
            </TabsContent>

            <TabsContent value="updates">
              <DailyUpdates currentUser={currentUser.username} />
            </TabsContent>

            <TabsContent value="donations">
              <DonationTracker currentUser={currentUser.username} />
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
