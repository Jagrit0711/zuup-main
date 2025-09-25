import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ExternalLink, Brain, Users, Target, Sparkles, Zap, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface JobRecommendation {
  title: string;
  description: string;
  skills_needed: string[];
  difficulty_level: string;
  earning_potential: string;
  learning_resources: string[];
}

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data = await response.json();
      const content = data.candidates[0].content.parts[0].text;
      
      // Extract JSON from the response
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const recommendations = JSON.parse(jsonMatch[0]);
        setRecommendations(recommendations);
        toast({
          title: "Recommendations Generated",
          description: "Your personalized job recommendations are ready!",
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating recommendations:', error);
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-Powered Freelance Job Recommendations | Zuup - Bridge Skill Gaps</title>
        <meta name="description" content="Get personalized freelance job recommendations powered by AI research. Bridge skill gaps in underprivileged communities with our machine learning system based on published research." />
        <meta name="keywords" content="freelance jobs, AI recommendations, skill gaps, machine learning, social good, underprivileged communities, job matching" />
        <meta property="og:title" content="AI-Powered Freelance Job Recommendations | Zuup" />
        <meta property="og:description" content="Get personalized freelance job recommendations powered by AI research. Bridge skill gaps with our machine learning system." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/job-recommendations" />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Research</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI-Powered Job Recommendations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridging freelance skill gaps in underprivileged communities using machine learning based on published research
          </p>
          
          {/* Research Paper Reference */}
          <Card className="max-w-5xl mx-auto mb-12 border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Based on Published Research</CardTitle>
                  <p className="text-muted-foreground">Peer-reviewed and scientifically validated</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-card border border-primary/10 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  "AI for Social Good: Identifying and Bridging Freelance Skill Gaps in Underprivileged Communities Using Machine Learning"
                </h3>
                <p className="text-muted-foreground mb-2">
                  by <span className="font-semibold text-primary">Jagrit Sachdev</span>, Founder & CEO, Zylon Labs & Zuup
                </p>
                <p className="text-sm text-muted-foreground">
                  Published in <span className="font-medium">International Journal for Research in Applied Science & Engineering Technology (IJRASET)</span><br />
                  Volume 13 Issue VII, July 2025
                </p>
              </div>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <a 
                  href="https://www.ijraset.com/best-journal/ai-for-social-good-identifying-and-bridging-freelance-skill-gaps-in-underprivileged-communities-using-machine-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  Read Full Research Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">30+</p>
                <p className="text-muted-foreground">Learners Trained</p>
              </CardContent>
            </Card>
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto mb-4">
                  <Target className="w-10 h-10 text-accent-foreground" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">5+</p>
                <p className="text-muted-foreground">Digital Skills</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">AI</p>
                <p className="text-muted-foreground">Powered System</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Input Form */}
        <section className="max-w-3xl mx-auto mb-16">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Get Personalized Recommendations</CardTitle>
              <CardDescription className="text-lg">
                Tell us about your skills and interests to receive AI-powered job recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="skills" className="text-base font-medium">Current Skills *</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    placeholder="Describe your current skills (e.g., basic computer skills, social media, design, writing, etc.)"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[100px] resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience" className="text-base font-medium">Experience Level</Label>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="Beginner, Some experience, Experienced"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-base font-medium">Location Preference</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Remote, Local, or specific city"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interests" className="text-base font-medium">Interests</Label>
                  <Textarea
                    id="interests"
                    name="interests"
                    placeholder="What type of work interests you? (e.g., creative work, technical tasks, customer service, etc.)"
                    value={formData.interests}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[80px] resize-none"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <Button 
                onClick={generateRecommendations} 
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating AI Recommendations...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get AI Recommendations
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Personalized Job Recommendations</h2>
              <p className="text-muted-foreground text-lg">AI-powered matches based on your skills and interests</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {recommendations.map((job, index) => (
                <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow border-muted/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl leading-tight">{job.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        job.difficulty_level === 'Beginner' 
                          ? 'bg-secondary/20 text-secondary-foreground border border-secondary/30' :
                        job.difficulty_level === 'Intermediate' 
                          ? 'bg-accent/30 text-accent-foreground border border-accent/40' :
                          'bg-primary/20 text-primary border border-primary/30'
                      }`}>
                        {job.difficulty_level}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Skills Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills_needed.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Earning Potential:</h4>
                      <p className="text-primary font-medium">{job.earning_potential}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Learning Resources:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        {job.learning_resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default JobRecommendations;