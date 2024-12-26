import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock } from 'lucide-react';
import TeamEditor from '@/components/admin/TeamEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import LogoEditor from '@/components/admin/LogoEditor';
import NavLinksEditor from '@/components/admin/NavLinksEditor';
import TextEditor from '@/components/admin/TextEditor';
import ChatUrlEditor from '@/components/admin/ChatUrlEditor';
import SiteStats from '@/components/admin/SiteStats';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Logged in successfully",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Invalid password",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-[#FF6D59]" />
            <h2 className="mt-6 text-3xl font-bold text-white">Admin Access</h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
            />
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
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="branding" className="space-y-8">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-8">
          <LogoEditor />
          <ChatUrlEditor />
        </TabsContent>

        <TabsContent value="navigation">
          <NavLinksEditor />
        </TabsContent>

        <TabsContent value="content" className="space-y-8">
          <TextEditor
            title="Home Page Content"
            initialContent="By Youth, For All Generations"
            storageKey="homeContent"
          />
          <TextEditor
            title="About Text"
            initialContent="We're a group of passionate teenagers on a mission to make digital skills and opportunities accessible to everyone."
            storageKey="aboutContent"
          />
          <TextEditor
            title="Terms and Conditions"
            initialContent="Welcome to Zuup! By using our website, services, or engaging with our initiatives..."
            storageKey="termsContent"
          />
        </TabsContent>

        <TabsContent value="team">
          <TeamEditor />
        </TabsContent>

        <TabsContent value="contact">
          <ContactEditor />
        </TabsContent>

        <TabsContent value="stats">
          <SiteStats />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;