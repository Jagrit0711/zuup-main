import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import EditableSection from './EditableSection';
import AddElementButton from './AddElementButton';

interface Section {
  id: string;
  type: 'text' | 'heading' | 'button' | 'image';
  content: string;
}

const PageEditor = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const { toast } = useToast();

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

  return (
    <div className="min-h-screen bg-gray-900 p-8">
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
      
      <AddElementButton onAdd={handleAddElement} />
    </div>
  );
};

export default PageEditor;