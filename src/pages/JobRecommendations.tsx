import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ExternalLink, Brain, Users, Target, Sparkles, Zap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface JobRecommendation {
  title: string;
  description: string;
  skills_needed: string[];
  difficulty_level: string;
  earning_potential: string;
  learning_resources: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const JobRecommendations = () => {
  const [formData, setFormData] = useState({
    skills: '',
    experience: '',
    interests: '',
    location: ''
  });
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generateRecommendations = async () => {
    if (!formData.skills.trim()) {
      toast({
        title: "Skills Required",
        description: "Please describe your current skills to get relevant recommendations.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const prompt = `As an AI system for social good focused on bridging freelance skill gaps in underprivileged communities (based on published research), analyze this profile and provide 5 personalized freelance job recommendations:

Current Skills: ${formData.skills}
Experience Level: ${formData.experience || 'Beginner'}
Interests: ${formData.interests || 'General'}
Location: ${formData.location || 'Remote'}

For each recommendation, provide:
1. Job title
2. Brief description (2-3 sentences)
3. Required skills (as an array)
4. Difficulty level (Beginner/Intermediate/Advanced)
5. Earning potential range
6. Learning resources to bridge skill gaps

Focus on opportunities that can help bridge the digital divide and provide economic upliftment. Return the response as a JSON array of objects.`;

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD5XqZvDx9QI7tWG2IP51KDIozptNX6j0w', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 2048 }
        }),
      });

      if (!response.ok) throw new Error('Failed to get recommendations');

      const data = await response.json();
      const content = data.candidates[0].content.parts[0].text;

      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        setRecommendations(JSON.parse(jsonMatch[0]));
        toast({ title: "Recommendations Generated", description: "Your personalized job recommendations are ready!" });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating recommendations:', error);
      toast({ title: "Error", description: "Failed to generate recommendations. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>AI-Powered Freelance Job Recommendations | Zuup</title>
        <meta name="description" content="Get personalized freelance job recommendations powered by AI research. Bridge skill gaps with our machine learning system." />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">AI-Powered Research</span>
            </motion.div>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              AI-Powered Job <span className="text-primary">Recommendations</span>
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Bridging freelance skill gaps in underprivileged communities using machine learning based on published research
            </motion.p>
          </div>
        </section>

        {/* Research Paper */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Based on Published Research</h2>
                <p className="text-muted-foreground text-sm">Peer-reviewed and scientifically validated</p>
              </div>
            </div>
            <div className="bg-accent border border-border p-6 rounded-xl mb-6">
              <h3 className="font-bold text-lg mb-2 text-foreground">
                "AI for Social Good: Identifying and Bridging Freelance Skill Gaps in Underprivileged Communities Using Machine Learning"
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                by <span className="font-semibold text-primary">Zuup Research Team</span>, Zylon Labs & Zuup
              </p>
              <p className="text-muted-foreground/70 text-xs">
                International Journal for Research in Applied Science & Engineering Technology (IJRASET) — Volume 13 Issue VII, July 2025
              </p>
            </div>
            <a href="https://www.ijraset.com/best-journal/ai-for-social-good-identifying-and-bridging-freelance-skill-gaps-in-underprivileged-communities-using-machine-learning"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-md shadow-primary/15">
              <Award className="w-4 h-4" /> Read Full Research Paper <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "30+", label: "Learners Trained" },
              { icon: Target, value: "5+", label: "Digital Skills" },
              { icon: Zap, value: "AI", label: "Powered System" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="glass-card rounded-xl p-8 text-center group hover:border-border transition-colors">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Get Personalized Recommendations</h2>
              <p className="text-muted-foreground">Tell us about your skills and interests</p>
            </div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="skills" className="text-sm font-medium text-muted-foreground">Current Skills *</Label>
                <textarea id="skills" name="skills" placeholder="e.g., basic computer skills, social media, design, writing..."
                  value={formData.skills} onChange={handleInputChange}
                  className="mt-2 w-full min-h-[100px] resize-none bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-muted-foreground">Experience Level</Label>
                  <input id="experience" name="experience" placeholder="Beginner, Experienced..."
                    value={formData.experience} onChange={handleInputChange}
                    className="mt-2 w-full bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-muted-foreground">Location</Label>
                  <input id="location" name="location" placeholder="Remote, Local, or city"
                    value={formData.location} onChange={handleInputChange}
                    className="mt-2 w-full bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>
              <div>
                <Label htmlFor="interests" className="text-sm font-medium text-muted-foreground">Interests</Label>
                <textarea id="interests" name="interests" placeholder="Creative work, technical tasks, customer service..."
                  value={formData.interests} onChange={handleInputChange}
                  className="mt-2 w-full min-h-[80px] resize-none bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <Button onClick={generateRecommendations} disabled={loading} size="lg"
                className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold py-3 shadow-md shadow-primary/15">
                {loading ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="w-5 h-5 mr-2" /> Get AI Recommendations</>
                )}
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Results */}
        {recommendations.length > 0 && (
          <section className="container mx-auto px-4 pb-24">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Your Personalized Recommendations</h2>
              <p className="text-muted-foreground">AI-powered matches based on your profile</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {recommendations.map((job, index) => (
                <motion.div key={index} variants={fadeUp} initial="hidden" animate="visible" custom={index}>
                  <Card className="flex flex-col h-full glass-card border-border hover:border-primary/20 transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg text-foreground leading-tight">{job.title}</CardTitle>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          job.difficulty_level === 'Beginner' ? 'bg-green-500/15 text-green-400 border border-green-500/20' :
                          job.difficulty_level === 'Intermediate' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/20' :
                          'bg-red-500/15 text-red-400 border border-red-500/20'
                        }`}>
                          {job.difficulty_level}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">{job.description}</p>
                      <div>
                        <h4 className="font-medium text-sm mb-2 text-muted-foreground">Skills Needed</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills_needed.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 bg-accent border border-border rounded text-xs text-muted-foreground">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Earning Potential</h4>
                        <p className="text-primary font-semibold text-sm">{job.earning_potential}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1.5 text-muted-foreground">Learning Resources</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {job.learning_resources.map((resource, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <ArrowRight size={10} className="text-primary mt-0.5 shrink-0" />
                              <span>{resource}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default JobRecommendations;
