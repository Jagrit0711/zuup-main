import { useState, useEffect } from 'react';
import { TeamMember } from '@/types/admin';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      toast({
        title: "Error loading team members",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    if (data) {
      setTeamMembers(data as TeamMember[]);
    }
  };

  const updateTeamMember = async (id: string, updates: Partial<TeamMember>) => {
    const { error } = await supabase
      .from('team_members')
      .update(updates)
      .eq('id', id);

    if (error) {
      toast({
        title: "Error updating team member",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadTeamMembers();
  };

  const deleteTeamMember = async (id: string) => {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error deleting team member",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadTeamMembers();
  };

  const addTeamMember = async (member: Omit<TeamMember, 'id' | 'created_at'>) => {
    const { error } = await supabase
      .from('team_members')
      .insert([member]);

    if (error) {
      toast({
        title: "Error adding team member",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    await loadTeamMembers();
  };

  return {
    teamMembers,
    updateTeamMember,
    deleteTeamMember,
    addTeamMember
  };
};