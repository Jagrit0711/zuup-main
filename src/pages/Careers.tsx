import { motion } from 'framer-motion';
import { Briefcase, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      title: "Digital Skills Trainer",
      shortDescription: "Help teach digital skills to underprivileged youth. Experience in graphic design, video editing, or coding required.",
      fullDescription: `We're looking for passionate Digital Skills Trainers to join our mission!

Requirements:
• Age: 14+ years
• Experience: 2+ years in digital skills (graphic design, video editing, or coding)
• Strong communication skills
• Patience and ability to work with youth
• Commitment to social impact

This is an unpaid internship opportunity to make a real difference in young people's lives.

To apply, please send your resume and a brief note about why you're interested to jagrit0711@gmail.com`
    },
    {
      title: "Community Manager",
      shortDescription: "Build and nurture our community of learners and mentors. Strong communication skills required.",
      fullDescription: `Join us as a Community Manager to help build and grow our vibrant community!

Requirements:
• Age: 14+ years
• Experience: 2+ years in community management or similar role
• Excellent communication and interpersonal skills
• Experience with social media platforms
• Ability to organize and moderate community events

This is an unpaid internship opportunity to gain valuable experience in community building.

To apply, please send your resume and a brief note about why you're interested to jagrit0711@gmail.com`
    },
    {
      title: "Social Media Manager",
      shortDescription: "Create and manage engaging social media content to amplify our mission and reach.",
      fullDescription: `We're seeking a creative Social Media Manager to help share our story!

Requirements:
• Age: 14+ years
• Experience: 2+ years managing social media accounts
• Proficiency in content creation and graphic design
• Strong understanding of various social media platforms
• Experience with social media analytics and reporting
• Creative storytelling abilities

This is an unpaid internship opportunity to build your portfolio and make an impact.

To apply, please send your resume and a brief note about why you're interested to jagrit0711@gmail.com`
    }
  ];

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
              {jobs.map((job) => (
                <div key={job.title} className="bg-gray-900/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {job.shortDescription}
                  </p>
                  <Button 
                    onClick={() => setSelectedJob(job.title)}
                    className="bg-[#9b87f5] text-white px-6 py-2 rounded-lg hover:bg-[#8b77e5] transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {jobs.find(job => job.title === selectedJob)?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300 whitespace-pre-line">
              {jobs.find(job => job.title === selectedJob)?.fullDescription}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;