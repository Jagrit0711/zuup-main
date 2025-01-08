import { BookOpen, Users, Rocket, DollarSign, Heart } from "lucide-react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            A Journey from Ambition to Purpose
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-20">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-[#ea384c]" />
              <h2 className="text-3xl font-bold">The Beginning</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At just 16, Jagrit Sachdev was already making waves in the digital world. 
              Like many young entrepreneurs, his initial focus was straightforward: creating 
              successful ventures that generated profit. He was good at it - perhaps too good.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-[#ea384c]" />
              <h2 className="text-3xl font-bold">The Realization</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              But something didn't feel right. Despite his success, Jagrit had an epiphany: 
              he was essentially "printing money" without making a real difference in society. 
              This realization hit hard, sparking a desire for meaningful change and impact.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-[#ea384c]" />
              <h2 className="text-3xl font-bold">Building the Team</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Driven by this new purpose, Jagrit reached out to his friends - other young, 
              talented individuals who shared his vision for social impact. Together, they 
              began brainstorming ways to use their skills and technology to make a real 
              difference in people's lives.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Rocket className="w-8 h-8 text-[#ea384c]" />
              <h2 className="text-3xl font-bold">The Birth of Zuup</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              After months of planning and preparation, Zuup was born. The vision was clear: 
              create a platform that would bridge the digital divide, making technology 
              accessible and beneficial for everyone, from underprivileged teens to senior 
              citizens.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-[#ea384c]" />
              <h2 className="text-3xl font-bold">Our Mission Today</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Today, at 16, Jagrit leads Zuup with a clear purpose: to ensure that digital 
              literacy and opportunities are available to everyone, regardless of their age 
              or background. It's no longer about just creating successful ventures - it's 
              about creating meaningful impact and positive change in society.
            </p>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 pt-10"
        >
          <p className="text-2xl font-bold text-[#4299e1]">
            Join Us in Making a Difference
          </p>
          <p className="text-gray-300">
            We're just getting started, and we invite you to be part of our journey 
            to make digital education accessible to all.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;