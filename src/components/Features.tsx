import { Palette, Video, Code2, Users, Globe, Briefcase } from 'lucide-react';

const Features = () => {
  console.log('Rendering Features section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">What We Teach</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide comprehensive training in various digital skills that are in high demand 
          in the freelance market.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Palette className="w-12 h-12 text-[#FF6D59]" />}
          title="Graphic Design"
          description="Learn to create stunning visuals, logos, and marketing materials."
        />
        <FeatureCard
          icon={<Video className="w-12 h-12 text-[#FF6D59]" />}
          title="Video Editing"
          description="Master the art of video editing and content creation."
        />
        <FeatureCard
          icon={<Code2 className="w-12 h-12 text-[#FF6D59]" />}
          title="Coding"
          description="Develop websites and applications with modern technologies."
        />
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Sponsors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700">
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </div>
          <div className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700">
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </div>
          <div className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700">
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Features;