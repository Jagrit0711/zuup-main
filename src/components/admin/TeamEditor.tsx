import { Plus } from 'lucide-react';
import { useTeamMembers } from './team/useTeamMembers';
import TeamMemberForm from './team/TeamMemberForm';
import { useToast } from '@/hooks/use-toast';
import { TeamMember } from '@/types/admin';
import { Button } from '@/components/ui/button';

const TeamEditor = () => {
  const { toast } = useToast();
  const { teamMembers, updateTeamMember, deleteTeamMember, addTeamMember } = useTeamMembers();

  const handleAddMember = async () => {
    const newMember = {
      name: "",
      role: "",
      description: "",
      linkedin: "",
    };
    
    try {
      await addTeamMember(newMember);
      toast({
        title: "Team member added",
        description: "New team member has been added. Fill in their details and click Save.",
      });
    } catch (error) {
      toast({
        title: "Error adding team member",
        description: "Failed to add new team member. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleUpdateMember = async (id: string, updates: Partial<TeamMember>) => {
    try {
      await updateTeamMember(id, updates);
      toast({
        title: "Changes saved",
        description: "Team member information has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error saving changes",
        description: "Failed to save changes. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteMember = async (id: string) => {
    try {
      await deleteTeamMember(id);
      toast({
        title: "Team member removed",
        description: "The team member has been deleted successfully.",
      });
    } catch (error) {
      toast({
        title: "Error deleting team member",
        description: "Failed to delete team member. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = async (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          await updateTeamMember(id, { image: reader.result as string });
          toast({
            title: "Image uploaded",
            description: "Team member photo has been updated successfully.",
          });
        } catch (error) {
          toast({
            title: "Error uploading image",
            description: "Failed to upload image. Please try again.",
            variant: "destructive"
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Team Members</h2>
        <Button
          onClick={handleAddMember}
          className="flex items-center gap-2 bg-[#FF6D59] hover:bg-[#ff8574] text-white"
        >
          <Plus size={20} />
          Add Member
        </Button>
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