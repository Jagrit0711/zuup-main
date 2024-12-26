import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTeamMembers } from './team/useTeamMembers';
import TeamMemberForm from './team/TeamMemberForm';
import { useToast } from '@/hooks/use-toast';
import { TeamMember } from '@/types/admin';

const TeamEditor = () => {
  const { toast } = useToast();
  const { teamMembers, updateTeamMember, deleteTeamMember, addTeamMember } = useTeamMembers();

  const handleAddMember = () => {
    const newMember = {
      name: "",
      role: "",
      description: "",
    };
    
    addTeamMember(newMember);
    toast({
      title: "Team member added",
      description: "New team member has been added successfully.",
    });
  };

  const handleUpdateMember = (id: string, field: keyof TeamMember, value: string) => {
    updateTeamMember(id, { [field]: value });
  };

  const handleDeleteMember = (id: string) => {
    deleteTeamMember(id);
    toast({
      title: "Team member removed",
      description: "The team member has been deleted successfully.",
    });
  };

  const handleImageUpload = async (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateTeamMember(id, { image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Team Members</h2>
        <button
          onClick={handleAddMember}
          className="flex items-center gap-2 bg-[#FF6D59] text-white px-4 py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
        >
          <Plus size={20} />
          Add Member
        </button>
      </div>

      <div className="grid gap-6">
        {teamMembers.map(member => (
          <TeamMemberForm
            key={member.id}
            member={member}
            onUpdate={handleUpdateMember}
            onDelete={handleDeleteMember}
            onImageUpload={handleImageUpload}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamEditor;