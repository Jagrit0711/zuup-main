import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { BookOpen, Users, Rocket, DollarSign, Heart, Volume2, VolumeX, Key } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const OurStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('elevenLabsApiKey') || '');
  const { toast } = useToast();

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
          </motion.div>

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
