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
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} exit={{
      opacity: 0,
      scale: 0.9
    }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          
        </motion.div>}
    </AnimatePresence>;
};
export default FamilyCheckerPopup;