import React, { useState } from 'react';
import { Upload, Trash2, Save } from 'lucide-react';
import { TeamMember } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface TeamMemberFormProps {
  member: TeamMember;
  onUpdate: (id: string, updates: Partial<TeamMember>) => void;
  onDelete: (id: string) => void;
  onImageUpload: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TeamMemberForm = ({ member, onUpdate, onDelete, onImageUpload }: TeamMemberFormProps) => {
  const [formData, setFormData] = useState({
    name: member.name,
    role: member.role,
    description: member.description,
    linkedin: member.linkedin || '',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(member.id, formData);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Name"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Input
            type="text"
            value={formData.role}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="Role"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Input
            type="text"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="LinkedIn URL"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-4">
          <Textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Description"
            rows={4}
            className="bg-gray-800 border-gray-700 text-white resize-none"
          />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
              <Upload size={20} className="text-white" />
              <span className="text-white">Upload Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onImageUpload(member.id, e)}
                className="hidden"
              />
            </label>
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save size={20} className="mr-2" />
              Save
            </Button>
            <Button
              onClick={() => onDelete(member.id)}
              variant="destructive"
              size="icon"
            >
              <Trash2 size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberForm;