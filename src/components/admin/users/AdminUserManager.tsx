import { useState } from 'react';
import { Plus, Save, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AdminUser } from '@/types/admin';

const AdminUserManager = () => {
  const { toast } = useToast();
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAdminUsers = async () => {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      toast({
        title: "Error loading admin users",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    if (data) {
      setAdminUsers(data);
    }
    setLoading(false);
  };

  const handleAddUser = async () => {
    const newUser = {
      username: "",
      password: "",
      role: "team_member",
      name: "",
    };

    const { error } = await supabase
      .from('admin_users')
      .insert([newUser]);

    if (error) {
      toast({
        title: "Error adding user",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadAdminUsers();
    toast({
      title: "User added",
      description: "New admin user has been added successfully.",
    });
  };

  const handleUpdateUser = async (id: string, updates: Partial<AdminUser>) => {
    const { error } = await supabase
      .from('admin_users')
      .update(updates)
      .eq('id', id);

    if (error) {
      toast({
        title: "Error updating user",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadAdminUsers();
    toast({
      title: "User updated",
      description: "Admin user has been updated successfully.",
    });
  };

  const handleDeleteUser = async (id: string) => {
    const { error } = await supabase
      .from('admin_users')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error deleting user",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadAdminUsers();
    toast({
      title: "User deleted",
      description: "Admin user has been deleted successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Admin Users</h2>
        <Button
          onClick={handleAddUser}
          className="flex items-center gap-2 bg-[#FF6D59] hover:bg-[#ff8574] text-white"
        >
          <Plus size={20} />
          Add User
        </Button>
      </div>

      <div className="grid gap-6">
        {adminUsers.map(user => (
          <div key={user.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  value={user.username}
                  onChange={(e) => handleUpdateUser(user.id, { username: e.target.value })}
                  placeholder="Username"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => handleUpdateUser(user.id, { password: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleUpdateUser(user.id, { name: e.target.value })}
                  placeholder="Name"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-4">
                <select
                  value={user.role}
                  onChange={(e) => handleUpdateUser(user.id, { role: e.target.value as 'super_admin' | 'team_member' })}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2"
                >
                  <option value="team_member">Team Member</option>
                  <option value="super_admin">Super Admin</option>
                </select>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => handleDeleteUser(user.id)}
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserManager;