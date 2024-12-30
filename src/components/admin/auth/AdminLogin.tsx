import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: adminUsers, error: fetchError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

      if (fetchError || !adminUsers) {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
        return;
      }

      // Store admin user data in localStorage
      localStorage.setItem('adminUser', JSON.stringify(adminUsers));

      toast({
        title: "Login successful",
        description: `Welcome back, ${adminUsers.name}!`,
      });

      // Refresh the page to trigger re-render with authenticated state
      window.location.reload();

    } catch (error) {
      toast({
        title: "Login error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md space-y-8 p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Admin Login</h2>
          <p className="mt-2 text-gray-400">Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF6D59] hover:bg-[#ff8574] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;