import { motion } from 'framer-motion';

const FloatingOverlay = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <elevenlabs-convai agent-id="T2IOvA5G9yIgmNJO5WZm"></elevenlabs-convai>
      </motion.div>
    </div>
  );
};

export default FloatingOverlay;