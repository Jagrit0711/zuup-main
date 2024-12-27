import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from '@/components/ui/typewriter';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonationSection from '@/components/DonationSection';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

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
            <Card className="max-w-2xl mx-auto p-8 bg-gray-900 border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {questions[currentQuestion].text}
              </h2>
              
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    className="w-full text-lg py-6 hover:bg-primary hover:text-white transition-colors"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </Card>
          ) : (
            <div className="space-y-12">
              <Card className="max-w-2xl mx-auto p-8 bg-gray-900 border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {hasLovingFamily() ? (
                    "You have a loving family ❤️"
                  ) : (
                    "You are not alone ❤️"
                  )}
                </h2>
                
                {showStats && (
                  <div className="space-y-6">
                    {statistics.map((stat, index) => (
                      <Typewriter
                        key={index}
                        text={stat}
                        className="text-gray-300"
                        delay={50}
                        startDelay={index * 2000}
                      />
                    ))}
                  </div>
                )}
              </Card>

              <DonationSection />
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FamilyLoveChecker;