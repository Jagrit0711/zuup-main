import { useState, useEffect } from 'react';
import { adminUsers } from '@/data/adminUsers';
import PageEditor from '@/components/admin/editor/PageEditor';

const ZuupAI = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const checkAdminStatus = () => {
      // For now, we'll just check if they're logged in as an admin
      // In the future, this will be replaced with proper auth
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        const user = adminUsers.find(u => u.username === currentUser);
        setIsAdmin(!!user);
      }
    };

    checkAdminStatus();
  }, []);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400">Please log in as an admin to access the page editor.</p>
        </div>
      </div>
    );
  }

  return <PageEditor />;
};

export default ZuupAI;