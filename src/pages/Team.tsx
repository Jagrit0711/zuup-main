import { motion } from 'framer-motion';
import { Linkedin, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Jagrit Sachdev",
    role: "Founder & Executive Director",
    description: "Leading Zuup's mission to empower underprivileged kids through freelancing opportunities.",
    linkedin: "https://www.linkedin.com/in/jagritsachdev/",
  },
  {
    name: "Advitya Bhardwaj",
    role: "Social Media Manager",
    description: "Managing Zuup's social media presence and community engagement strategies.",
    linkedin: "https://www.linkedin.com/in/advithya-bhardwaj-05412a313/",
  },
  {
    name: "Vartika Dahiya",
    role: "Spokesperson & Donation Manager",
    description: "Representing Zuup and managing donation initiatives to support our cause.",
    linkedin: "https://www.linkedin.com/in/vartika-dahiya-91b91a312/",
  },
  {
    name: "Vanshika Bhatt",
    role: "Spokesperson & Task Force Member",
    description: "Representing Zuup and contributing to our mission through task force initiatives.",
  },
  {
    name: "Geetanshu Gupta",
    role: "Secondary Director",
    description: "Supporting Zuup's strategic direction and operational excellence.",
  },
  {
    name: "Sanyam Garg",
    role: "Spokesperson & Task Force Member",
    description: "Contributing to Zuup's mission through communication and task force activities.",
  },
  {
    name: "Shourya",
    role: "Social Media Designer",
    description: "Creating engaging visual content for Zuup's social media presence.",
  },
  {
    name: "Kartikey Singhal",
    role: "Donation Manager",
    description: "Managing and optimizing Zuup's donation processes and initiatives.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            The passionate individuals driving Zuup's mission forward
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-[#FF6D59] transition-colors"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
                    <User size={40} className="text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FF6D59] text-center mb-4">{member.role}</p>
                <p className="text-gray-400 text-center mb-4">
                  {member.description}
                </p>
                
                <div className="flex justify-center">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                    >
                      <Linkedin size={20} />
                      <span>Connect on LinkedIn</span>
                    </a>
                  ) : (
                    <span className="text-gray-500 flex items-center gap-2">
                      <Linkedin size={20} />
                      <span>LinkedIn profile coming soon</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Team;