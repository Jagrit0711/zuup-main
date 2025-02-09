
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Calendar, Award, Lightbulb, Code, Briefcase, School } from "lucide-react";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const JagritSachdev = () => {
  const navigate = useNavigate();
  
  const achievements = [
    "Founded Zylon Labs, a multi-industry startup ecosystem",
    "Led hackathon teams for innovative software solutions",
    "Developed a Python-based web browser in record time",
    "Successfully managed cross-domain intern teams",
    "Presented tech innovations in security systems",
    "House Captain at Bal Bharati Public School"
  ];

  const companies = [
    {
      name: "Zylon Edtech",
      description: "Revolutionary edtech platform combining education content, notes, and quizzes"
    },
    {
      name: "Zylon Studios",
      description: "AI-powered music production with custom lyrics and multilingual support"
    },
    {
      name: "Zylon Business Suite",
      description: "Digital transformation services for business presence"
    },
    {
      name: "Zylo 1Km",
      description: "Quick commerce platform connecting local shops within 1km radius"
    },
    {
      name: "Zylon Devs",
      description: "End-to-end software development services"
    },
    {
      name: "Zylon Security",
      description: "AI-powered security and attendance system"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Jagrit Sachdev - Young Entrepreneur & Tech Visionary | Founder of Zylon Labs</title>
        <meta name="description" content="Meet Jagrit Sachdev, a 16-year-old entrepreneur and tech innovator. Founder & CEO of Zylon Labs, pioneering in edtech, AI security, and quick commerce." />
        <meta name="keywords" content="Jagrit Sachdev, Zylon Labs, young entrepreneur, tech visionary, AI innovation, edtech startup, Indian entrepreneur" />
        <link rel="canonical" href="https://zuup.org/jagrit-sachdev" />
        
        <meta property="og:title" content="Jagrit Sachdev - Young Entrepreneur & Tech Visionary" />
        <meta property="og:description" content="16-year-old tech innovator and founder of Zylon Labs, revolutionizing multiple industries through technology." />
        <meta property="og:url" content="https://zuup.org/jagrit-sachdev" />
        <meta property="og:type" content="profile" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jagrit Sachdev",
            "birthDate": "2008-11-07",
            "nationality": "Indian",
            "alumniOf": "Bal Bharati Public School, Rohini",
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Zylon Labs"
            },
            "description": "Young entrepreneur and tech visionary, founder of Zylon Labs and multiple tech startups.",
            "knowsAbout": ["Artificial Intelligence", "Software Development", "Entrepreneurship", "EdTech"],
            "url": "https://zuup.org/jagrit-sachdev"
          })}
        </script>
      </Helmet>

      <div className="relative">
        <Button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10"
          variant="ghost"
        >
          ← Back
        </Button>
      </div>

      <main className="container mx-auto px-4 py-20 space-y-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="w-48 h-48 mx-auto relative overflow-hidden rounded-full border-4 border-[#ea384c]">
            <img
              src="/placeholder.svg"
              alt="Jagrit Sachdev"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]">
              Jagrit Sachdev
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Young Entrepreneur, Innovator & Tech Visionary
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Born November 7, 2008</span>
          </div>
        </motion.section>

        {/* Early Life & Education */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <School className="w-6 h-6 text-[#ea384c]" />
            <h2 className="text-2xl font-bold text-white">Early Life & Education</h2>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg text-gray-300 space-y-4">
            <p>
              Born in Delhi, India, Jagrit showed exceptional interest in technology and innovation from an early age. 
              Currently a PCM student at Bal Bharati Public School, Rohini, he serves as House Captain of Shastri House 
              while pursuing his entrepreneurial ventures.
            </p>
          </div>
        </motion.section>

        {/* Companies */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-[#ea384c]" />
            <h2 className="text-2xl font-bold text-white">Zylon Labs Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#4299e1] mb-2">{company.name}</h3>
                <p className="text-gray-300">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Expertise */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-[#ea384c]" />
            <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg text-gray-300">
            <p>
              An exceptional coder proficient in Python, AI development, 3D modeling, and graphic design. 
              Notable projects include a feature-rich web browser and Dvorak, an RFID-based school security system 
              with AI-powered surveillance.
            </p>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-[#ea384c]" />
            <h2 className="text-2xl font-bold text-white">Notable Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-[#ea384c] rounded-full" />
                <p className="text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-[#ea384c]" />
            <h2 className="text-2xl font-bold text-white">Future Vision</h2>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg text-gray-300">
            <p>
              Jagrit envisions a future where technology simplifies lives, making education, security, and business 
              operations more accessible. His goal is to scale Zylon Labs into a global tech powerhouse, pushing 
              the boundaries of AI, software, and commerce.
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default JagritSachdev;
