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

  const storyText = `At just 16, Jagrit Sachdev was already making waves in the digital world. 
    Like many young entrepreneurs, his initial focus was straightforward: creating 
    successful ventures that generated profit. He was good at it - perhaps too good.
    But something didn't feel right. Despite his success, Jagrit had an epiphany: 
    he was essentially "printing money" without making a real difference in society. 
    This realization hit hard, sparking a desire for meaningful change and impact.
    Driven by this new purpose, Jagrit reached out to his friends - other young, 
    talented individuals who shared his vision for social impact. Together, they 
    began brainstorming ways to use their skills and technology to make a real 
    difference in people's lives.
    After months of planning and preparation, Zuup was born. The vision was clear: 
    create a platform that would bridge the digital divide, making technology 
    accessible and beneficial for everyone, from underprivileged teens to senior 
    citizens.
    Today, at 16, Jagrit leads Zuup with a clear purpose: to ensure that digital 
    literacy and opportunities are available to everyone, regardless of their age 
    or background. It's no longer about just creating successful ventures - it's 
    about creating meaningful impact and positive change in society.`;

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
        <title>Our Story | Zuup - Teen-Led NGO by Jagrit Sachdev</title>
        <meta name="description" content="Discover how 16-year-old Jagrit Sachdev transformed from a profit-focused entrepreneur to founding Zuup, a teen-led NGO empowering underprivileged youth through digital skills." />
        <meta name="keywords" content="Jagrit Sachdev, teenage NGO, Zuup founder, youth empowerment, digital skills education, teen entrepreneur" />
        <link rel="canonical" href="https://zuup.org/our-story" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Our Story | Zuup - Teen-Led NGO by Jagrit Sachdev" />
        <meta property="og:description" content="From profit to purpose: How 16-year-old Jagrit Sachdev founded Zuup to empower underprivileged youth through digital skills education." />
        <meta property="og:url" content="https://zuup.org/our-story" />
        <meta property="og:type" content="article" />
        
        {/* Article Specific Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Story of Zuup: A Teen-Led NGO",
            "author": {
              "@type": "Person",
              "name": "Jagrit Sachdev",
              "birthDate": "2008"
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
            "description": "How a 16-year-old transformed from focusing on profits to creating social impact through digital education.",
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
          {/* Hero Section with Listen Button */}
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
            <div className="flex justify-center gap-4">
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
                <h2 className="text-3xl font-bold text-white">The Beginning</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  At just 16, Jagrit Sachdev was already making waves in the digital world. 
                  Like many young entrepreneurs, his initial focus was straightforward: creating 
                  successful ventures that generated profit. He was good at it - perhaps too good.
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
                <DollarSign className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">The Realization</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  But something didn't feel right. Despite his success, Jagrit had an epiphany: 
                  he was essentially "printing money" without making a real difference in society. 
                  This realization hit hard, sparking a desire for meaningful change and impact.
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
                <h2 className="text-3xl font-bold text-white">Building the Team</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  Driven by this new purpose, Jagrit reached out to his friends - other young, 
                  talented individuals who shared his vision for social impact. Together, they 
                  began brainstorming ways to use their skills and technology to make a real 
                  difference in people's lives.
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
                <h2 className="text-3xl font-bold text-white">The Birth of Zuup</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  After months of planning and preparation, Zuup was born. The vision was clear: 
                  create a platform that would bridge the digital divide, making technology 
                  accessible and beneficial for everyone, from underprivileged teens to senior 
                  citizens.
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
                <Heart className="w-8 h-8 text-[#ea384c]" />
                <h2 className="text-3xl font-bold text-white">Our Mission Today</h2>
              </div>
              <article className="text-gray-300 leading-relaxed">
                <p>
                  Today, at 16, Jagrit leads Zuup with a clear purpose: to ensure that digital 
                  literacy and opportunities are available to everyone, regardless of their age 
                  or background. It's no longer about just creating successful ventures - it's 
                  about creating meaningful impact and positive change in society.
                </p>
              </article>
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
        
        <Footer />
      </div>
    </>
  );
};

export default OurStory;