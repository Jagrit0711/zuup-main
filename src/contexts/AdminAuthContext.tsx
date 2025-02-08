
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

interface AdminUser {
  username: string;
  name: string;
  role: 'admin' | 'super_admin';
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      const { user } = JSON.parse(storedAuth);
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  const login = (username: string, password: string) => {
    // For demo purposes, hardcoded credentials
    const validUsers = [
      { username: 'admin', password: 'admin123', name: 'Admin User', role: 'admin' as const },
      { username: 'superadmin', password: 'super123', name: 'Super Admin', role: 'super_admin' as const }
    ];

    const user = validUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser({ username: user.username, name: user.name, role: user.role });
      localStorage.setItem('adminAuth', JSON.stringify({ user: { username: user.username, name: user.name, role: user.role } }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
