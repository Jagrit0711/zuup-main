import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Award, Calendar, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationSection from "../components/DonationSection";

const OurStory = () => {
  const impactMetrics = [
    { label: "Youth Trained", value: "27", icon: Users },
    { label: "Digital Skills", value: "3", icon: Award },
    { label: "Launch Date", value: "March 2025", icon: Calendar },
  ];

  const timelineEvents = [
    {
      year: "2024",
      title: "Vision Formation",
      description: "Jagrit Sachdev conceptualizes Zuup at age 16"
    },
    {
      year: "2025",
      title: "Official Launch",
      description: "Zuup begins operations with its first batch of students"
    },
    {
      year: "2025",
      title: "Partnership Program",
      description: "Establishing collaborations with nonprofits and sponsors"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Story | Teen-Led NGO by Jagrit Sachdev | Zuup</title>
        <meta name="description" content="Discover how 16-year-old Jagrit Sachdev founded Zuup, a revolutionary teen-led NGO transforming lives through digital education and freelance opportunities. Launching March 2025." />
        <meta name="keywords" content="Jagrit Sachdev, teen NGO founder, Zuup founder, youth empowerment, digital skills education, teen entrepreneur, Gen Z social impact" />
        <link rel="canonical" href="https://zuup.org/our-story" />
        
        <meta property="og:title" content="Our Story | Teen-Led NGO by Jagrit Sachdev | Zuup" />
        <meta property="og:description" content="From vision to reality: How 16-year-old Jagrit Sachdev is revolutionizing digital education through Zuup, launching March 2025." />
        <meta property="og:url" content="https://zuup.org/our-story" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Story of Zuup: A Revolutionary Teen-Led NGO",
            "author": {
              "@type": "Person",
              "name": "Jagrit Sachdev",
              "birthDate": "2008",
              "description": "16-year-old founder of Zuup and Zylon Labs"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "Zuup",
              "logo": {
                "@type": "ImageObject",
                "url": "https://zuup.org/og-image.png"
              }
            },
            "description": "How a 16-year-old is revolutionizing digital education and creating opportunities for underprivileged youth through Zuup.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://zuup.org/our-story"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <Navbar />
        
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-16">
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
              A Teen's Vision for Digital Empowerment
            </p>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-900/50 rounded-lg"
                >
                  <metric.icon className="w-8 h-8 text-[#ea384c] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ea384c] to-[#4299e1]" />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2" />
                <div className="w-4 h-4 bg-[#ea384c] rounded-full z-10 transform -translate-x-1/2" />
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="text-[#ea384c] font-bold">{event.year}</div>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Zuup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-lg space-y-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-[#ea384c]" />
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Zuup is a youth-led initiative by Zylon Labs, founded by Jagrit Sachdev, aimed at empowering 
                underprivileged youth through digital skill development and freelance opportunities. The organization 
                focuses on bridging the digital divide by providing free training in graphic design, video editing, 
                and coding to individuals who may not have access to such resources.
              </p>
              <p>
                Through collaborations with nonprofits and sponsors, we're building a network that helps us reach 
                more communities and create greater impact. Unlike traditional profit-focused ventures, we measure 
                our success by the lives we transform, ensuring digital literacy support for students, senior citizens, 
                and others in need.
              </p>
            </div>
          </motion.div>

          {/* Join Our Mission & Donation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 pt-10"
          >
            <p className="text-2xl font-bold text-[#4299e1]">
              Join Our Mission
            </p>
            <p className="text-gray-300">
              Together, we can empower the next generation with digital skills and create lasting change.
            </p>
            <DonationSection />
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
