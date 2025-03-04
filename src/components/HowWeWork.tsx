
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Lightbulb, Video, Palette, Code, Briefcase, TrendingUp } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';

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
      animation: { x: [0, 10, 0], transition: { repeat: Infinity, duration:
2 } }
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

      {/* Animated infographic */}
      <div className="relative mb-16">
        {/* Process flow line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2 z-0">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${(activeStep / (totalSteps - 1)) * 100}%`, transition: 'width 1s ease-in-out' }}
          />
        </div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center ${index === activeStep ? 'scale-110' : 'scale-100'} transition-transform duration-500`}
              variants={itemVariants}
            >
              <motion.div 
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 
                  ${index === activeStep ? 'bg-gradient-to-r from-[#FF6D59] to-[#ea384c]' : 'bg-gray-800'} 
                  ${index <= activeStep ? 'border-4 border-primary' : 'border-4 border-gray-700'}`}
                animate={index === activeStep ? step.animation : {}}
              >
                {step.icon}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${index === activeStep ? 'text-primary' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className="text-gray-400 text-center text-sm">
                {index === activeStep ? (
                  <Typewriter 
                    text={step.description} 
                    delay={20} 
                    className="min-h-[48px]"
                  />
                ) : (
                  step.description
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
