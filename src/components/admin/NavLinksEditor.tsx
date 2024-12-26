import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';

interface NavLink {
  id: number;
  text: string;
  url: string;
}

const NavLinksEditor = () => {
  const { toast } = useToast();
  const [links, setLinks] = useState<NavLink[]>([
    { id: 1, text: 'About Us', url: '#about' },
    { id: 2, text: 'Contact', url: '#contact' },
    { id: 3, text: 'Our Team', url: '/team' }
  ]);

  const handleAddLink = () => {
    const newLink = {
      id: Date.now(),
      text: '',
      url: ''
    };
    setLinks([...links, newLink]);
  };

  const handleUpdateLink = (id: number, field: keyof NavLink, value: string) => {
    const updatedLinks = links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    );
    setLinks(updatedLinks);
  };

  const handleDeleteLink = (id: number) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks);
  };

  const handleSave = () => {
    localStorage.setItem('navLinks', JSON.stringify(links));
    toast({
      title: "Navigation links updated",
      description: "The navigation links have been saved successfully.",
    });
  };

  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <CardTitle>Navigation Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {links.map(link => (
          <div key={link.id} className="flex gap-4">
            <input
              type="text"
              value={link.text}
              onChange={(e) => handleUpdateLink(link.id, 'text', e.target.value)}
              placeholder="Link Text"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
            <input
              type="text"
              value={link.url}
              onChange={(e) => handleUpdateLink(link.id, 'url', e.target.value)}
              placeholder="URL"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
            <button
              onClick={() => handleDeleteLink(link.id)}
              className="p-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            onClick={handleAddLink}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Plus size={20} />
            Add Link
          </button>
          <button
            onClick={handleSave}
            className="bg-[#FF6D59] text-white px-6 py-2 rounded-lg hover:bg-[#ff8574] transition-colors"
          >
            Save Changes
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavLinksEditor;