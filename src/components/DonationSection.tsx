import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const DonationSection = () => {
  const handleDonateClick = () => {
    window.open('https://rzp.io/rzp/gaRST27V', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card gradient-border rounded-2xl p-8"
      >
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block p-3 bg-[#ea384c]/10 rounded-full"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-8 w-8 text-[#ea384c]" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">Support Our Mission</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your contribution helps us empower underprivileged kids through freelancing opportunities. 
            Every donation makes a difference in shaping their future.
          </p>
          
          <motion.button
            onClick={handleDonateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ea384c] to-[#4299e1] text-white font-semibold rounded-lg"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationSection;