import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AdminEditorContextType {
  isEditorMode: boolean;
  setIsEditorMode: (value: boolean) => void;
}

const AdminEditorContext = createContext<AdminEditorContextType | undefined>(undefined);

export const AdminEditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEditorMode, setIsEditorMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminUpdate = location.pathname.includes('/adminupdate');
    if (isAdminUpdate && !isEditorMode) {
      setIsEditorMode(true);
    }
  }, [location]);

  return (
    <AdminEditorContext.Provider value={{ isEditorMode, setIsEditorMode }}>
      {children}
    </AdminEditorContext.Provider>
  );
};

export const useAdminEditor = () => {
  const context = useContext(AdminEditorContext);
  if (context === undefined) {
    throw new Error('useAdminEditor must be used within an AdminEditorProvider');
  }
  return context;
};