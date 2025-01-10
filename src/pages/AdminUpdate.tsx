import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { adminUsers } from '@/data/adminUsers';
import { useToast } from '@/components/ui/use-toast';
import AdminLogin from '@/components/admin/auth/AdminLogin';
import PageEditor from '@/components/admin/editor/PageEditor';

const AdminUpdate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminEditorAuth');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = adminUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem('adminEditorAuth', 'true');
      toast({
        title: "Login successful",
        description: "You can now edit the website content.",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
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