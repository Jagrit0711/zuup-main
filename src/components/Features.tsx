import { Code2, Users, Globe } from 'lucide-react';

const Features = () => {
  console.log('Rendering Features section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zuup?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide comprehensive support and opportunities for underprivileged youth
          to build successful freelancing careers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Code2 className="w-12 h-12 text-[#FF6D59]" />}
          title="Skill Development"
          description="Access to quality training and mentorship in various digital skills."
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-[#FF6D59]" />}
          title="Community Support"
          description="Join a supportive community of peers and mentors who guide your journey."
        />
        <FeatureCard
          icon={<Globe className="w-12 h-12 text-[#FF6D59]" />}
          title="Global Opportunities"
          description="Connect with clients worldwide and build your international portfolio."
        />
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