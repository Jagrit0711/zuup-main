import { Bell, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdminUser } from '@/types/admin';

interface AdminHeaderProps {
  currentUser: AdminUser;
  notifications: string[];
  onLogout: () => void;
}

const AdminHeader = ({ currentUser, notifications, onLogout }: AdminHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-300">Manage your website content and track performance</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
          >
            <Bell className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Notifications</span>
            <span className="absolute -top-1 -right-1 bg-[#FF6D59] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          </Button>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
          <div className="bg-gray-700 p-2 rounded-full">
            <User className="h-4 w-4 text-white" />
          </div>
          <span className="text-white hidden md:inline">{currentUser.name}</span>
        </div>
        <Button
          onClick={onLogout}
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-gray-800"
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span className="hidden md:inline">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;