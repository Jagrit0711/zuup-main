import { Palette, Video, Code2, Users, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  console.log('Rendering Features section');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">What We Teach</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide comprehensive training in various digital skills that are in high demand 
          in the freelance market.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        <FeatureCard
          icon={<Palette className="w-12 h-12 text-[#FF6D59]" />}
          title="Graphic Design"
          description="Learn to create stunning visuals, logos, and marketing materials."
          variants={itemVariants}
        />
        <FeatureCard
          icon={<Video className="w-12 h-12 text-[#4299e1]" />}
          title="Video Editing"
          description="Master the art of video editing and content creation."
          variants={itemVariants}
        />
        <FeatureCard
          icon={<Code2 className="w-12 h-12 text-[#4ade80]" />}
          title="Coding"
          description="Develop websites and applications with modern technologies."
          variants={itemVariants}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Our Sponsors</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-lg glass-card flex items-center justify-center min-h-[200px]"
          >
            <img 
              src="/lovable-uploads/dcb03761-44e9-4b86-8627-04ac72de3491.png" 
              alt="Zylon Labs"
              className="w-48 h-auto"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-lg glass-card flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700"
          >
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-lg glass-card flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700"
          >
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, variants }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  variants: any;
}) => (
  <motion.div 
    variants={variants}
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-lg glass-card gradient-border"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Features;