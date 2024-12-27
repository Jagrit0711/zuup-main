import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

export const Typewriter = ({ text, delay = 50, startDelay = 0, className }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (startDelay > 0) {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setCurrentText(prev => prev + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
      }, startDelay);

      return () => clearTimeout(timeout);
    } else if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, startDelay, text]);

  return (
    <p className={cn("font-mono", className)}>
      {currentText}
      <span className="animate-pulse">|</span>
    </p>
  );
};