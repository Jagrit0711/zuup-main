import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminLogin from '@/components/admin/auth/AdminLogin';
import PageEditor from '@/components/admin/editor/PageEditor';

const AdminUpdate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminUser');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <PageEditor />
    </div>
  );
};

export default AdminUpdate;