import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { X, Plus } from 'lucide-react';
import { Database } from '@/integrations/supabase/types';

type AdminPermission = Database['public']['Enums']['admin_permission'];

interface AdminForm {
  username: string;
  password: string;
  name: string;
  role: 'admin' | 'super_admin';
  permissions: AdminPermission[];
}

const PERMISSIONS: { id: AdminPermission; label: string }[] = [
  { id: 'manage_team', label: 'Manage Team' },
  { id: 'manage_content', label: 'Manage Content' },
  { id: 'manage_donations', label: 'Manage Donations' },
  { id: 'view_stats', label: 'View Statistics' },
  { id: 'manage_meetings', label: 'Manage Meetings' },
  { id: 'manage_admins', label: 'Manage Admins' }
];

const AdminManager = () => {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<any[]>([]);
  const [newAdmin, setNewAdmin] = useState<AdminForm>({
    username: '',
    password: '',
    name: '',
    role: 'admin',
    permissions: []
  });

  const fetchAdmins = async () => {
    const { data, error } = await supabase
      .from('admin_users')
      .select(`
        *,
        admin_permissions (
          permission
        )
      `);

    if (error) {
      toast({
        title: 'Error fetching admins',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    setAdmins(data || []);
  };

  const handleAddAdmin = async () => {
    if (!newAdmin.username || !newAdmin.password || !newAdmin.name) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Add new admin user
    const { data: adminData, error: adminError } = await supabase
      .from('admin_users')
      .insert({
        username: newAdmin.username,
        password: newAdmin.password,
        name: newAdmin.name,
        role: newAdmin.role
      })
      .select()
      .single();

    if (adminError) {
      toast({
        title: 'Error adding admin',
        description: adminError.message,
        variant: 'destructive'
      });
      return;
    }

    // Add permissions for the new admin
    if (newAdmin.permissions.length > 0) {
      const permissionsToInsert = newAdmin.permissions.map(permission => ({
        admin_id: adminData.id,
        permission: permission
      }));

      const { error: permissionsError } = await supabase
        .from('admin_permissions')
        .insert(permissionsToInsert);

      if (permissionsError) {
        toast({
          title: 'Error setting permissions',
          description: permissionsError.message,
          variant: 'destructive'
        });
      }
    }

    toast({
      title: 'Admin added',
      description: 'New admin user has been created successfully'
    });

    setNewAdmin({
      username: '',
      password: '',
      name: '',
      role: 'admin',
      permissions: []
    });

    fetchAdmins();
  };

  const handleDeleteAdmin = async (adminId: string) => {
    const { error } = await supabase
      .from('admin_users')
      .delete()
      .eq('id', adminId);

    if (error) {
      toast({
        title: 'Error deleting admin',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Admin deleted',
      description: 'Admin user has been removed successfully'
    });

    fetchAdmins();
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-800/50 rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">Add New Admin</h3>
        <div className="grid gap-4">
          <Input
            placeholder="Username"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
          />
          <Input
            placeholder="Full Name"
            value={newAdmin.name}
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          />
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Permissions</label>
            <div className="grid grid-cols-2 gap-2">
              {PERMISSIONS.map((permission) => (
                <div key={permission.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={permission.id}
                    checked={newAdmin.permissions.includes(permission.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setNewAdmin({
                          ...newAdmin,
                          permissions: [...newAdmin.permissions, permission.id]
                        });
                      } else {
                        setNewAdmin({
                          ...newAdmin,
                          permissions: newAdmin.permissions.filter(p => p !== permission.id)
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor={permission.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                  >
                    {permission.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAddAdmin}
            className="bg-[#FF6D59] hover:bg-[#ff8574] text-white flex items-center gap-2"
          >
            <Plus size={20} />
            Add Admin
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Current Admins</h3>
        <div className="grid gap-4">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="bg-gray-800/30 rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-white">{admin.name}</p>
                <p className="text-sm text-gray-400">@{admin.username}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {admin.admin_permissions?.map((p: any) => (
                    <span
                      key={p.permission}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {p.permission}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDeleteAdmin(admin.id)}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminManager;