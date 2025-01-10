import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabase';
import { Building2, MapPin, Timer, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string;
  salary_range: string;
  location: string;
  job_type: string;
  created_at: string;
  deadline: string;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Error",
        description: "Failed to load jobs. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to apply for jobs",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    navigate(`/jobs/${jobId}/apply`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Freelance Jobs</h1>
          <Button onClick={() => navigate('/jobs/post')} className="bg-primary">
            Post a Job
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  {job.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Timer className="w-4 h-4" />
                    {job.job_type}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    {job.salary_range}
                  </div>
                  <p className="line-clamp-3 text-sm mt-4">{job.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleApply(job.id)} 
                  className="w-full"
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground">Check back later for new opportunities</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;