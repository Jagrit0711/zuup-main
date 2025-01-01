import { Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AdminLoginProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AdminLogin = ({ username, password, onUsernameChange, onPasswordChange, onSubmit }: AdminLoginProps) => {
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
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => onUsernameChange(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#FF6D59] focus:border-transparent transition-all"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
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