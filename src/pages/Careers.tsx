import { motion } from 'framer-motion';
import { Briefcase, Users, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be part of a team that's empowering underprivileged youth through digital skills and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <Briefcase className="h-12 w-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Work</h3>
              <p className="text-gray-400">Work remotely and choose hours that suit your schedule.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <Users className="h-12 w-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Inclusive Culture</h3>
              <p className="text-gray-400">Join a diverse team that values every perspective.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <Heart className="h-12 w-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Meaningful Impact</h3>
              <p className="text-gray-400">Make a real difference in young people's lives.</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#D6BCFA]/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Open Positions</h2>
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Digital Skills Trainer</h3>
                <p className="text-gray-400 mb-4">
                  Help teach digital skills to underprivileged youth. Experience in graphic design, 
                  video editing, or coding required.
                </p>
                <button className="bg-[#9b87f5] text-white px-6 py-2 rounded-lg hover:bg-[#8b77e5] transition-colors">
                  Apply Now
                </button>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Community Manager</h3>
                <p className="text-gray-400 mb-4">
                  Build and nurture our community of learners and mentors. Strong communication 
                  skills required.
                </p>
                <button className="bg-[#9b87f5] text-white px-6 py-2 rounded-lg hover:bg-[#8b77e5] transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;