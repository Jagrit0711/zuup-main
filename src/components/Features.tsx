import { Palette, Video, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
const Features = () => {
  console.log('Rendering Features section');
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return;
};
const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <motion.div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors h-full" whileHover={{
  scale: 1.05,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
}} transition={{
  type: "spring",
  stiffness: 300,
  damping: 10
}}>
    <motion.div className="mb-4" whileHover={{
    rotate: 360
  }} transition={{
    duration: 0.5
  }}>
      {icon}
    </motion.div>
    
    
  </motion.div>;
export default Features;