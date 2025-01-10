import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import EditableSection from './EditableSection';
import AddElementButton from './AddElementButton';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Section {
  id: string;
  type: 'text' | 'heading' | 'button' | 'image';
  content: string;
}

const PageEditor = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddElement = (type: 'text' | 'heading' | 'button' | 'image') => {
    const newSection: Section = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: type === 'heading' ? 'New Heading' :
              type === 'text' ? 'New text content' :
              type === 'button' ? 'Click me' :
              'Image URL'
    };
    setSections([...sections, newSection]);
    
    toast({
      title: "Element added",
      description: `New ${type} element has been added to the page.`,
    });
  };

  const handleDeleteSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
    toast({
      title: "Element deleted",
      description: "The element has been removed from the page.",
    });
  };

  const handleExit = () => {
    localStorage.removeItem('adminEditorAuth');
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleExit}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="h-full overflow-y-auto py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section) => (
            <EditableSection
              key={section.id}
              initialContent={section.content}
              type={section.type}
              onDelete={() => handleDeleteSection(section.id)}
            />
          ))}
          
          {sections.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p>Click the + button to add elements to your page</p>
            </div>
          )}
        </div>
      </div>
      
      <AddElementButton onAdd={handleAddElement} />
    </div>
  );
};

export default PageEditor;