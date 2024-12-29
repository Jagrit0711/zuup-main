import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const FamilyCheckerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if user has seen the popup before
      const hasSeenPopup = localStorage.getItem('hasSeenFamilyCheckerPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        localStorage.setItem('hasSeenFamilyCheckerPopup', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-2xl dark:from-gray-900 dark:to-gray-800"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Discover Your Family Bond
              </h2>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Take our Family Love Checker quiz to understand and strengthen your family relationships. It only takes a few minutes!
              </p>

              <Button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/family-check');
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
              >
                Try Family Love Checker
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FamilyCheckerPopup;