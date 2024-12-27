import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from '@/components/ui/typewriter';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonationSection from '@/components/DonationSection';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const questions = [
  {
    id: 1,
    text: "Do your parents stay with you?",
    options: ["Yes", "No"]
  },
  {
    id: 2,
    text: "Do you have children?",
    options: ["Yes", "No"]
  },
  {
    id: 3,
    text: "How often do you spend quality time with your family?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"]
  },
  {
    id: 4,
    text: "Do you feel supported by your family members?",
    options: ["Yes", "Somewhat", "No"]
  }
];

const statistics = [
  "You have a happy family, but not everyone is as fortunate",
  "Over 16 million elderly parents in India face abandonment",
  "More than 20 million children need care and support",
  "At Zuup, we empower individuals through skills and freelancing",
  "Join us in building better lives for abandoned families"
];

const FamilyLoveChecker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [showDonation, setShowDonation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Background music setup
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.2;

    const playMusic = () => {
      audio.play().catch(err => console.log('Audio autoplay blocked'));
    };

    // Add click listener to start music (browsers require user interaction)
    document.addEventListener('click', playMusic, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener('click', playMusic);
    };
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      setTimeout(() => setShowStats(true), 1000);
    }
  };

  const handleStatisticsComplete = () => {
    if (currentStatIndex < statistics.length - 1) {
      setTimeout(() => {
        setCurrentStatIndex(prev => prev + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowDonation(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#D3E4FD]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-8">
            Family Love Checker
          </h1>
          
          <p className="text-[#4A5568] text-center mb-12 max-w-2xl mx-auto">
            Answer a few questions about your family situation. Remember, this is not a scientific assessment - it's meant to help us understand how we can better support you.
          </p>

          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm border border-[#D3E4FD]">
                <h2 className="text-2xl font-semibold text-[#2D3748] mb-6">
                  {questions[currentQuestion].text}
                </h2>
                
                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <motion.div
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => handleAnswer(option)}
                        variant="outline"
                        className="w-full text-lg py-6 hover:bg-[#F2FCE2] hover:text-[#2D3748] transition-colors border-[#D3E4FD]"
                      >
                        {option}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ) : (
            <div className="space-y-12">
              <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm border border-[#D3E4FD]">
                <AnimatePresence mode="wait">
                  {showStats && (
                    <div className="min-h-[200px] flex items-center justify-center">
                      <motion.div
                        key={currentStatIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center"
                      >
                        <Typewriter
                          text={statistics[currentStatIndex]}
                          className="font-impact text-2xl text-[#2D3748]"
                          delay={50}
                          onComplete={handleStatisticsComplete}
                        />
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </Card>

              {showDonation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <DonationSection />
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FamilyLoveChecker;