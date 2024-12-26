import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import SiteStats from '@/components/admin/SiteStats';
import DailyUpdates from '@/components/admin/DailyUpdates';
import DonationTracker from '@/components/admin/DonationTracker';
import { Lock } from 'lucide-react';
import { adminUsers } from '@/data/adminUsers';
import { AdminUser } from '@/types/admin';
import { supabase } from '@/lib/supabase';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = adminUsers.find(
      u => u.username === username && u.password === password
    );
    
    if (user) {
      try {
        // Sign in with Supabase using a shared admin account
        const { error } = await supabase.auth.signInWithPassword({
          email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@example.com',
          password: import.meta.env.VITE_ADMIN_PASSWORD || 'admin123',
        });

        if (error) throw error;

        setIsAuthenticated(true);
        setCurrentUser(user);
        toast({
          title: "Logged in successfully",
          description: `Welcome back, ${user.name}!`,
        });
      } catch (error) {
        console.error('Supabase auth error:', error);
        toast({
          title: "Authentication error",
          description: "Failed to authenticate with storage service",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your username and password",
        variant: "destructive",
      });
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session && isAuthenticated) {
        setIsAuthenticated(false);
        setCurrentUser(null);
        toast({
          title: "Session expired",
          description: "Please log in again",
          variant: "destructive",
        });
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated || !currentUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-[#FF6D59]" />
            <h2 className="mt-6 text-3xl font-bold text-white">Admin Access</h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6D59] text-white py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-400">Welcome, {currentUser.name}</span>
          <button
            onClick={handleLogout}
            className="text-[#FF6D59] hover:text-[#ff8574] transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="stats" className="space-y-8">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="stats">Site Statistics</TabsTrigger>
          <TabsTrigger value="updates">Daily Updates</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          {currentUser.role === 'super_admin' && (
            <>
              <TabsTrigger value="team">Team Management</TabsTrigger>
              <TabsTrigger value="contact">Contact Information</TabsTrigger>
            </>
          )}
        </TabsList>

        <TabsContent value="stats">
          <SiteStats />
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
      </Tabs>
    </div>
  );
};

export default Admin;