import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from '@/components/ui/typewriter';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonationSection from '@/components/DonationSection';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

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
  "Over 16 million elderly parents are living alone in India",
  "More than 20 million children face abandonment or neglect",
  "But you're not alone - we're here to help",
  "At Zuup, we believe in empowering individuals through skills and opportunities",
  "Join our community of freelancers building better lives"
];

const FamilyLoveChecker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      setTimeout(() => setShowStats(true), 3000);
    }
  };

  const hasLovingFamily = () => {
    return answers[0] === "Yes" || answers[1] === "Yes";
  };

  const handleStatisticsComplete = () => {
    if (currentStatIndex < statistics.length - 1) {
      setTimeout(() => {
        setCurrentStatIndex(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Family Love Checker
          </h1>
          
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Answer a few questions about your family situation. Remember, this is not a scientific assessment - it's meant to help us understand how we can better support you.
          </p>

          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="max-w-2xl mx-auto p-8 bg-gray-900 border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">
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
                        className="w-full text-lg py-6 hover:bg-primary hover:text-white transition-colors"
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
              <Card className="max-w-2xl mx-auto p-8 bg-gray-900 border-gray-800">
                <AnimatePresence mode="wait">
                  {hasLovingFamily() && (
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-4xl font-impact text-center text-white mb-8"
                    >
                      You have a loving family ❤️
                    </motion.h2>
                  )}
                </AnimatePresence>
                
                {showStats && (
                  <div className="h-24 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStatIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center"
                      >
                        <Typewriter
                          text={statistics[currentStatIndex]}
                          className="text-2xl font-impact text-gray-300"
                          delay={50}
                          startDelay={0}
                          onComplete={handleStatisticsComplete}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </Card>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <DonationSection />
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FamilyLoveChecker;