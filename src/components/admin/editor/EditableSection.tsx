import { useState } from 'react';
import { Pencil, Save, Trash } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface EditableSectionProps {
  initialContent: string;
  type: 'text' | 'heading' | 'button';
  onDelete?: () => void;
}

const EditableSection = ({ initialContent, type, onDelete }: EditableSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const renderContent = () => {
    if (isEditing) {
      if (type === 'text' || type === 'heading') {
        return (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-lg"
            rows={type === 'text' ? 4 : 1}
          />
        );
      }
      return (
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-lg"
        />
      );
    }

    if (type === 'heading') {
      return <h2 className="text-2xl font-bold text-white">{content}</h2>;
    }
    if (type === 'button') {
      return (
        <button className="bg-[#FF6D59] text-white px-6 py-2 rounded-lg hover:bg-[#ff8574] transition-colors">
          {content}
        </button>
      );
    }
    return <p className="text-gray-300">{content}</p>;
  };

  return (
    <motion.div
      className="group relative p-4 border border-transparent hover:border-gray-700 rounded-lg transition-colors"
      whileHover={{ scale: 1.01 }}
    >
      {renderContent()}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          {isEditing ? (
            <Save className="w-4 h-4 text-[#FF6D59]" onClick={handleSave} />
          ) : (
            <Pencil className="w-4 h-4 text-[#FF6D59]" />
          )}
        </button>
        {onDelete && (
          <button
            onClick={onDelete}
            className="p-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Trash className="w-4 h-4 text-red-500" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default EditableSection;