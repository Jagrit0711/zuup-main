import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddElementButtonProps {
  onAdd: (type: 'text' | 'heading' | 'button' | 'image') => void;
}

const AddElementButton = ({ onAdd }: AddElementButtonProps) => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative group">
        <button
          className="p-4 bg-[#FF6D59] text-white rounded-full shadow-lg hover:bg-[#ff8574] transition-colors"
        >
          <Plus className="w-6 h-6" />
        </button>
        
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-gray-900 rounded-lg shadow-lg p-2 space-y-2">
            <button
              onClick={() => onAdd('heading')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Add Heading
            </button>
            <button
              onClick={() => onAdd('text')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Add Text
            </button>
            <button
              onClick={() => onAdd('button')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Add Button
            </button>
            <button
              onClick={() => onAdd('image')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Add Image
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddElementButton;