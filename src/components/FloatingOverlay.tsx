import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 bg-white/10 backdrop-blur-lg rounded-lg border border-gray-200/20 shadow-xl p-4 w-64"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
            <div className="space-y-3">
              <a
                href="https://aistudio.instagram.com/ai/1588807355358359?utm_source=ai_agent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="text-[#4299e1]" />
                  <span>Chat with AI Assistant</span>
                </div>
                {isMobile ? null : (
                  <span className="text-xs text-gray-400 pl-7">
                    Only available on mobile devices
                  </span>
                )}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#ea384c] to-[#4299e1] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingOverlay;