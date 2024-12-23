import { motion } from 'framer-motion';

const About = () => {
  console.log('Rendering About section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">By Teens, For Teens</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're a group of passionate teenagers on a mission to make digital skills and 
          opportunities accessible to every young person, regardless of their background.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-6 glass-card rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Teen-Led Innovation</h3>
            <p className="text-gray-400">
              Founded by 16-year-old Jagrit Sachdev, we understand what teenagers need 
              because we're teenagers ourselves! We speak your language and know exactly 
              what it takes to succeed in today's digital world.
            </p>
          </div>
          
          <div className="p-6 glass-card rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Why We're Different</h3>
            <p className="text-gray-400">
              We're not just another educational platform - we're your peers who've been 
              through the same journey. Our approach is fun, relatable, and designed 
              specifically for young minds.
            </p>
          </div>
          
          <div className="p-6 glass-card rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Our Promise</h3>
            <p className="text-gray-400">
              We're committed to making digital skills accessible to every teenager. 
              Whether you're into graphic design, video editing, or coding, we've got 
              your back with practical training and real job opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Meet Our Teen Founder</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              At just 16, Jagrit Sachdev is redefining what teenagers can achieve. As the 
              founder and CEO of Zylon Labs, he's proving that age is just a number when 
              it comes to making a difference.
            </p>
            <p className="mb-4">
              "I believe every teenager deserves the chance to learn digital skills and 
              build a better future. We're here to make that happen, one skill at a time."
            </p>
            <div className="mt-6 space-y-3">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#ea384c]"></div>
                <span>CEO & Founder, Zylon Labs</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Young Genius Award 2024</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Passionate about Youth Empowerment</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;