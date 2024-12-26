import { useState } from 'react';
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

const TeamEditor = () => {
  const { toast } = useToast();
  const [members, setMembers] = useState<TeamMember[]>([
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

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: Date.now(),
      name: "",
      role: "",
      description: "",
    };
    setMembers([...members, newMember]);
  };

  const handleUpdateMember = (id: number, field: keyof TeamMember, value: string) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const handleDeleteMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
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
        handleUpdateMember(id, 'image', reader.result as string);
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
        {members.map(member => (
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
