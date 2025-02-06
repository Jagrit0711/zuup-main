import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { BookOpen, Users, Rocket, DollarSign, Heart, Volume2, VolumeX, Key, Calendar, Award, Target } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const OurStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('elevenLabsApiKey') || '');
  const { toast } = useToast();
  const [progress] = useState(75); // Example progress for impact metrics

  const storyText = `At just 16, Jagrit Sachdev envisioned a future where digital skills and opportunities 
    would be accessible to everyone, regardless of their background. As the founder of Zylon Labs, 
    he recognized a critical gap in digital education and employment opportunities for underprivileged youth.
    This realization led to the birth of Zuup, a revolutionary youth-led initiative launching in March 2025.
    
    Zuup's mission is clear: to bridge the digital divide by providing free, comprehensive training in 
    graphic design, video editing, and coding. But we're not just about education - we're about creating 
    real opportunities. Through partnerships with nonprofits and sponsors, we connect our trained 
    individuals with actual freelance opportunities, helping them build sustainable careers.
    
    What sets Zuup apart is our commitment to lasting social change. Unlike traditional profit-focused 
    ventures, we measure our success by the lives we transform. Our initiative extends beyond youth to 
    include senior citizens and others who need digital literacy support, ensuring no one is left behind 
    in the digital age.
    
    Through collaborations with nonprofits and sponsors, we're building a network that will help us 
    reach more communities and create greater impact. We believe in the power of digital skills to 
    transform lives, and we're dedicated to making this transformation accessible to all.`;

  const handleTextToSpeech = async () => {
    if (isPlaying && audioElement) {
      audioElement.pause();
      setIsPlaying(false);
      return;
    }

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please set your ElevenLabs API key first",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: storyText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      audio.onended = () => {
        setIsPlaying(false);
      };

      setAudioElement(audio);
      audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({
        title: "Error",
        description: "Failed to generate speech. Please check your API key.",
        variant: "destructive",
      });
    }
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('elevenLabsApiKey', apiKey);
    toast({
      title: "Success",
      description: "API key saved successfully",
    });
  };

  const impactMetrics = [
    { label: "Youth Trained", value: "500+", icon: Users },
    { label: "Digital Skills", value: "3", icon: Award },
    { label: "Launch Date", value: "March 2025", icon: Calendar },
    { label: "Target Impact", value: "1000+", icon: Target },
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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

            {/* Audio Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Set API Key
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Set ElevenLabs API Key</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your ElevenLabs API key"
                    />
                    <Button onClick={handleSaveApiKey}>Save Key</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                onClick={handleTextToSpeech}
                variant="outline"
                className="flex items-center gap-2"
              >
                {isPlaying ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    Stop Listening
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    Listen to Our Story
                  </>
                )}
              </Button>
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

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Launch Preparation</span>
                  <span className="text-[#ea384c]">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </motion.div>

          {/* Main Content Sections */}
          <div className="space-y-20">
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">The Vision</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  At just 16, Jagrit Sachdev envisioned a future where digital skills and opportunities 
                  would be accessible to everyone. As the founder of Zylon Labs, he recognized a critical 
                  gap in digital education and employment opportunities for underprivileged youth.
                </p>
              </article>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Rocket className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">The Mission</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  Launching in March 2025, Zuup aims to bridge the digital divide by providing free, 
                  comprehensive training in graphic design, video editing, and coding. We're not just 
                  about education - we're about creating real opportunities through partnerships with 
                  nonprofits and sponsors.
                </p>
              </article>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">Our Approach</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  What sets Zuup apart is our commitment to lasting social change. Unlike traditional 
                  profit-focused ventures, we measure our success by the lives we transform. Our initiative 
                  extends beyond youth to include senior citizens and others who need digital literacy support.
                </p>
              </article>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">Our Impact</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  Through collaborations with nonprofits and sponsors, we're building a network that 
                  will help us reach more communities and create greater impact. We believe in the power 
                  of digital skills to transform lives, and we're dedicated to making this transformation 
                  accessible to all.
                </p>
              </article>
            </motion.section>
          </div>

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
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
