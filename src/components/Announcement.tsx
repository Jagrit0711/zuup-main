import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Announcement = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="bg-[#1A1F2C] border border-[#ea384c]/20 rounded-lg p-4 flex items-center space-x-3">
        <AlertCircle className="h-6 w-6 text-[#ea384c]" />
        <div>
          <h3 className="text-lg font-semibold text-white">Important Notice</h3>
          <p className="text-gray-300">
            Our operations are currently delayed and will resume in March. We appreciate your patience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Announcement;