import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Plus, Upload } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  image?: string;
}

// Create a global state to share team members data
export const useTeamMembers = () => {
  const [globalTeamMembers, setGlobalTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Load saved team members from localStorage on mount
    const savedMembers = localStorage.getItem('teamMembers');
    if (savedMembers) {
      setGlobalTeamMembers(JSON.parse(savedMembers));
    } else {
      // Set default members if no saved data exists
      const defaultMembers = [
        {
          id: 1,
          name: "Jagrit Sachdev",
          role: "Founder & Executive Director",
          description: "Leading Zuup's mission to empower underprivileged kids and senior citizens through freelancing opportunities.",
          linkedin: "https://www.linkedin.com/in/jagritsachdev",
        },
    {
      id: 2,
      name: "Advitya Bhardwaj",
      role: "Social Media Manager",
      description: "Managing Zuup's social media presence and community engagement strategies.",
      linkedin: "https://www.linkedin.com/in/advithya-bhardwaj-05412a313/",
    },
    {
      id: 3,
      name: "Vartika Dahiya",
      role: "Spokesperson & Donation Manager",
      description: "Representing Zuup and managing donation initiatives to support our cause.",
      linkedin: "https://www.linkedin.com/in/vartika-dahiya-91b91a312/",
    },
    {
      id: 4,
      name: "Vanshika Bhatt",
      role: "Spokesperson & Task Force Member",
      description: "Representing Zuup and contributing to our mission through task force initiatives.",
    },
    {
      id: 5,
      name: "Geetanshu Gupta",
      role: "Secondary Director",
      description: "Supporting Zuup's strategic direction and operational excellence.",
    },
    {
      id: 6,
      name: "Sanyam Garg",
      role: "Spokesperson & Task Force Member",
      description: "Contributing to Zuup's mission through communication and task force activities.",
    },
    {
      id: 7,
      name: "Shourya",
      role: "Social Media Designer",
      description: "Creating engaging visual content for Zuup's social media presence.",
    },
    {
      id: 8,
      name: "Kartikey Singhal",
      role: "Donation Manager",
      description: "Managing and optimizing Zuup's donation processes and initiatives.",
    },
  ]);
      ];
      setGlobalTeamMembers(defaultMembers);
      localStorage.setItem('teamMembers', JSON.stringify(defaultMembers));
    }
  }, []);

  return { globalTeamMembers, setGlobalTeamMembers };
};

const TeamEditor = () => {
  const { toast } = useToast();
  const { globalTeamMembers, setGlobalTeamMembers } = useTeamMembers();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: Date.now(),
      name: "",
      role: "",
      description: "",
    };
    setGlobalTeamMembers([...globalTeamMembers, newMember]);
    setHasUnsavedChanges(true);
  };

  const handleUpdateMember = (id: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = globalTeamMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    );
    setGlobalTeamMembers(updatedMembers);
    setHasUnsavedChanges(true);
  };

  const handleDeleteMember = (id: number) => {
    const updatedMembers = globalTeamMembers.filter(member => member.id !== id);
    setGlobalTeamMembers(updatedMembers);
    setHasUnsavedChanges(true);
    toast({
      title: "Team member removed",
      description: "The team member has been deleted successfully.",
    });
  };

  const handleImageUpload = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedMembers = globalTeamMembers.map(member =>
          member.id === id ? { ...member, image: reader.result as string } : member
        );
        setGlobalTeamMembers(updatedMembers);
        setHasUnsavedChanges(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    localStorage.setItem('teamMembers', JSON.stringify(globalTeamMembers));
    setHasUnsavedChanges(false);
    toast({
      title: "Changes saved",
      description: "Team member information has been updated successfully.",
    });
    // Force a reload of the Team page if it's currently open
    window.dispatchEvent(new Event('teamDataUpdated'));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Team Members</h2>
        <div className="space-x-4">
          <button
            onClick={handleAddMember}
            className="flex items-center gap-2 bg-[#FF6D59] text-white px-4 py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
          >
            <Plus size={20} />
            Add Member
          </button>
          {hasUnsavedChanges && (
            <button
              onClick={handleSaveChanges}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {globalTeamMembers.map(member => (
          <div key={member.id} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleUpdateMember(member.id, 'name', e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => handleUpdateMember(member.id, 'role', e.target.value)}
                  placeholder="Role"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <input
                  type="text"
                  value={member.linkedin || ''}
                  onChange={(e) => handleUpdateMember(member.id, 'linkedin', e.target.value)}
                  placeholder="LinkedIn URL"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
              <div className="space-y-4">
                <textarea
                  value={member.description}
                  onChange={(e) => handleUpdateMember(member.id, 'description', e.target.value)}
                  placeholder="Description"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                    <Upload size={20} className="text-white" />
                    <span className="text-white">Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(member.id, e)}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="p-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamEditor;
