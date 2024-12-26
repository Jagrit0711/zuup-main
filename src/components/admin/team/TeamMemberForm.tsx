import React from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { TeamMember } from '@/types/admin';

interface TeamMemberFormProps {
  member: TeamMember;
  onUpdate: (id: string, field: keyof TeamMember, value: string) => void;
  onDelete: (id: string) => void;
  onImageUpload: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TeamMemberForm = ({ member, onUpdate, onDelete, onImageUpload }: TeamMemberFormProps) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input
            type="text"
            value={member.name}
            onChange={(e) => onUpdate(member.id, 'name', e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
          <input
            type="text"
            value={member.role}
            onChange={(e) => onUpdate(member.id, 'role', e.target.value)}
            placeholder="Role"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
          <input
            type="text"
            value={member.linkedin || ''}
            onChange={(e) => onUpdate(member.id, 'linkedin', e.target.value)}
            placeholder="LinkedIn URL"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
          />
        </div>
        <div className="space-y-4">
          <textarea
            value={member.description}
            onChange={(e) => onUpdate(member.id, 'description', e.target.value)}
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
                onChange={(e) => onImageUpload(member.id, e)}
                className="hidden"
              />
            </label>
            <button
              onClick={() => onDelete(member.id)}
              className="p-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberForm;