import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ExternalLink, Brain, Users, Target } from 'lucide-react';
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
    location: '',
    apiKey: ''
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
    if (!formData.apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to get personalized recommendations.",
        variant: "destructive",
      });
      return;
    }

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

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + formData.apiKey, {
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
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Job Recommendations</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Bridging freelance skill gaps in underprivileged communities using machine learning
          </p>
          
          {/* Research Paper Reference */}
          <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 justify-center">
                <Brain className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Based on Published Research</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                This recommendation system is based on the research paper:
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-sm mb-2">
                  "AI for Social Good: Identifying and Bridging Freelance Skill Gaps in Underprivileged Communities Using Machine Learning"
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  by Jagrit Sachdev, Founder & CEO, Zylon Labs & Zuup
                </p>
                <p className="text-xs text-muted-foreground">
                  Published in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 13 Issue VII, July 2025
                </p>
              </div>
              <a 
                href="https://www.ijraset.com/best-journal/ai-for-social-good-identifying-and-bridging-freelance-skill-gaps-in-underprivileged-communities-using-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                Read Full Research Paper <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 justify-center">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">30+</p>
                    <p className="text-sm text-muted-foreground">Learners Trained</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 justify-center">
                  <Target className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm text-muted-foreground">Digital Skills</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">AI</p>
                    <p className="text-sm text-muted-foreground">Powered System</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Input Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Get Personalized Recommendations</CardTitle>
            <CardDescription>
              Tell us about your skills and interests to receive AI-powered job recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="apiKey">Gemini API Key *</Label>
              <Input
                id="apiKey"
                name="apiKey"
                type="password"
                placeholder="Enter your Gemini API key"
                value={formData.apiKey}
                onChange={handleInputChange}
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Get your free API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a>
              </p>
            </div>
            
            <div>
              <Label htmlFor="skills">Current Skills *</Label>
              <Textarea
                id="skills"
                name="skills"
                placeholder="Describe your current skills (e.g., basic computer skills, social media, design, writing, etc.)"
                value={formData.skills}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Input
                id="experience"
                name="experience"
                placeholder="Beginner, Some experience, Experienced"
                value={formData.experience}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="interests">Interests</Label>
              <Textarea
                id="interests"
                name="interests"
                placeholder="What type of work interests you? (e.g., creative work, technical tasks, customer service, etc.)"
                value={formData.interests}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="location">Location Preference</Label>
              <Input
                id="location"
                name="location"
                placeholder="Remote, Local, or specific city"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={generateRecommendations} 
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Recommendations...
                </>
              ) : (
                'Get AI Recommendations'
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Your Personalized Job Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((job, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        job.difficulty_level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        job.difficulty_level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {job.difficulty_level}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Skills Needed:</h4>
                      <div className="flex flex-wrap gap-1">
                        {job.skills_needed.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-muted rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-1">Earning Potential:</h4>
                      <p className="text-sm text-muted-foreground">{job.earning_potential}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Learning Resources:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {job.learning_resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex}>• {resource}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobRecommendations;