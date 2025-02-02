import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminLogin from '@/components/admin/auth/AdminLogin';
import PageEditor from '@/components/admin/editor/PageEditor';

const AdminUpdate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminEditorAuth');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data: adminUser, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

      if (error) {
        throw error;
      }

      if (adminUser) {
        setIsAuthenticated(true);
        localStorage.setItem('adminEditorAuth', 'true');
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
        toast({
          title: "Login successful",
          description: `Welcome back, ${adminUser.name}!`,
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: "An error occurred during login.",
        variant: "destructive"
      });
    }
  };

  if (!isAuthenticated) {
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
    <div className="min-h-screen bg-gray-900">
      <PageEditor />
    </div>
  );
};

export default AdminUpdate;