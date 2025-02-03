import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .maybeSingle();

      if (error) {
        console.error('Login error:', error);
        toast({
          title: "Login failed",
          description: "An error occurred during login",
          variant: "destructive",
        });
        return;
      }

      if (!data) {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return;
      }

      // Store admin data in localStorage
      localStorage.setItem('adminUser', JSON.stringify(data));
      
      // Reload the page to trigger the auth check
      window.location.reload();
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${data.name}!`,
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: "Please check your credentials",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md space-y-8 p-8 bg-gray-800/50 border-gray-700 animate-fade-in">
        <div className="text-center">
          <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-[#FF6D59]" />
          </div>
          <h2 className="text-3xl font-bold text-white">Admin Access</h2>
          <p className="text-gray-300 mt-2">Enter your credentials to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FF6D59] focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Password</label>
              <Input
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
};

export default AdminLogin;