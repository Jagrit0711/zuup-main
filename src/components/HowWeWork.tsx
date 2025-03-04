
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Lightbulb, Video, Palette, Code, Briefcase, TrendingUp } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeStep]);

  const steps = [
    {
      title: "Partnership",
      description: "We tie up with NGOs and organizations working with underprivileged youth",
      icon: <Handshake className="w-14 h-14 text-primary" />,
      animation: { x: [0, 10, 0], transition: { repeat: Infinity, duration: 2 } }
    },
    {
      title: "Outreach",
      description: "Our team visits these organizations to conduct awareness sessions about digital skills",
      icon: <Users className="w-14 h-14 text-primary" />,
      animation: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } }
    },
    {
      title: "Training",
      description: "Interested candidates receive free training in video editing, graphic design, and coding",
      icon: <Lightbulb className="w-14 h-14 text-primary" />,
      animation: { rotate: [0, 5, 0, -5, 0], transition: { repeat: Infinity, duration: 2 } }
    },
    {
      title: "Placement",
      description: "We connect trained individuals with companies or teach them freelancing skills",
      icon: <Briefcase className="w-14 h-14 text-primary" />,
      animation: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 2 } }
    },
    {
      title: "Independence",
      description: "As they earn and grow, our graduates become financially independent digital professionals",
      icon: <TrendingUp className="w-14 h-14 text-primary" />,
      animation: { opacity: [0.8, 1, 0.8], transition: { repeat: Infinity, duration: 2 } }
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our systematic approach to empowering underprivileged youth with digital skills and creating pathways to financial independence.
        </p>
      </motion.div>

      {/* Timeline component */}
      <div className="relative mb-20">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 z-0">
          <div 
            className="h-full bg-gradient-to-b from-primary to-secondary rounded-full"
            style={{ height: `${(activeStep / (totalSteps - 1)) * 100}%`, transition: 'height 1s ease-in-out' }}
          />
        </div>

        {/* Timeline steps */}
        <div className="relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Content side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`bg-gray-900/60 border-gray-800 hover:border-primary transition-all duration-300 
                    ${index === activeStep ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
                  >
                    <CardContent className="p-6">
                      <h3 className={`text-2xl font-bold mb-2 ${index === activeStep ? 'text-primary' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {index === activeStep ? (
                          <Typewriter 
                            text={step.description} 
                            delay={30} 
                            className="min-h-[48px]"
                          />
                        ) : (
                          step.description
                        )}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Center dot/icon */}
              <div className="w-2/12 flex justify-center">
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center
                    ${index === activeStep 
                      ? 'bg-gradient-to-r from-[#FF6D59] to-[#ea384c] shadow-lg shadow-primary/30' 
                      : 'bg-gray-800'} 
                    ${index <= activeStep ? 'border-4 border-primary' : 'border-4 border-gray-700'}
                    cursor-pointer`}
                  animate={index === activeStep ? step.animation : {}}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Empty side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-3 mb-12">
        {steps.map((_, index) => (
          <Button
            key={index}
            variant={index === activeStep ? "default" : "outline"}
            size="sm"
            onClick={() => handleStepClick(index)}
            className={index === activeStep ? "scale-110" : ""}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Skills we teach */}
      <motion.div 
        className="mt-12 bg-gray-900/50 p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills We Teach</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="flex items-center p-4 bg-black/50 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Video className="w-10 h-10 text-primary mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-white">Video Editing</h4>
              <p className="text-gray-400 text-sm">Create professional video content</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center p-4 bg-black/50 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Palette className="w-10 h-10 text-primary mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-white">Graphic Design</h4>
              <p className="text-gray-400 text-sm">Design compelling visual content</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center p-4 bg-black/50 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-10 h-10 text-primary mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-white">Coding</h4>
              <p className="text-gray-400 text-sm">Develop websites and applications</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowWeWork;
