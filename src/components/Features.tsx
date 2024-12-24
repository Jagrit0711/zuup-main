import { Palette, Video, Code2 } from 'lucide-react';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">What We Teach</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide comprehensive training in various digital skills that are in high demand 
          in the freelance market.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Palette className="w-12 h-12 text-[#FF6D59]" />}
            title="Graphic Design"
            description="Learn to create stunning visuals, logos, and marketing materials."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Video className="w-12 h-12 text-[#FF6D59]" />}
            title="Video Editing"
            description="Master the art of video editing and content creation."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Code2 className="w-12 h-12 text-[#FF6D59]" />}
            title="Coding"
            description="Develop websites and applications with modern technologies."
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Sponsors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <img 
              src="/lovable-uploads/dcb03761-44e9-4b86-8627-04ac72de3491.png" 
              alt="Zylon Labs"
              className="w-48 h-auto"
            />
          </motion.div>
          <motion.div 
            className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </motion.div>
          <motion.div 
            className="p-8 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <p className="text-gray-400 text-center">Add Your Brand Here</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div 
    className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors h-full"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <motion.div 
      className="mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Features;