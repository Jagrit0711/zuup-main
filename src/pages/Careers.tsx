import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const jobs = [
  {
    title: "Community Manager",
    requirements: "14+ years old with 2+ years of community management experience",
    description: `We're seeking a passionate Community Manager to build and nurture our vibrant community. 
    The ideal candidate will:
    • Drive engagement through creative initiatives and events
    • Monitor and moderate community discussions
    • Create and execute community growth strategies
    • Gather and analyze community feedback
    • Demonstrate strong leadership and conflict resolution skills
    
    Required qualities:
    • Excellent communication and interpersonal skills
    • Proven track record of community growth
    • Strong emotional intelligence and empathy
    • Ability to work independently and as part of a team`,
    id: "cm"
  },
  {
    title: "Social Media Manager",
    requirements: "14+ years old with 2+ years of social media management experience",
    description: `Join our team as a Social Media Manager to drive our brand's online presence.
    Key responsibilities include:
    • Developing and implementing social media strategies
    • Creating engaging content across multiple platforms
    • Managing paid social media campaigns
    • Analyzing metrics and preparing performance reports
    • Staying current with social media trends
    
    Required qualities:
    • Creative storytelling abilities
    • Experience with social media analytics tools
    • Strong understanding of various social platforms
    • Excellent content creation skills`,
    id: "smm"
  },
  {
    title: "Executive Leadership",
    requirements: "14+ years old with 2+ years of leadership experience",
    description: `We're looking for an Executive Leader to drive organizational success.
    Core responsibilities:
    • Developing and executing strategic initiatives
    • Leading and mentoring team members
    • Making key business decisions
    • Managing stakeholder relationships
    • Driving innovation and growth
    
    Required qualities:
    • Strong strategic thinking and decision-making abilities
    • Proven track record of leadership success
    • Excellence in team management and development
    • Strong business acumen and market understanding`,
    id: "el"
  }
];

const BackgroundStars = () => {
  return (
    <Stars 
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
};

const Careers = () => {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\nI am writing to apply for the ${jobTitle} position.\n\nPlease find my resume attached.\n\nBest regards,`
    );
    window.location.href = `mailto:jag@techygram.onmicrosoft.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <Navbar />
      
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <BackgroundStars />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-lg border-purple-500/20 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
                  <CardDescription className="text-purple-200">
                    {job.requirements}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line text-gray-300">
                    {job.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleApply(job.title)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;