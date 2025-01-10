import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';

const JobPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const jobData = {
      title: formData.get('title'),
      company: 'Zylon Labs', // Hardcoded as per requirement
      description: formData.get('description'),
      requirements: formData.get('requirements'),
      salary_range: formData.get('salary_range'),
      location: formData.get('location'),
      job_type: formData.get('job_type'),
      deadline: new Date(formData.get('deadline') as string).toISOString(),
    };

    try {
      const { error } = await supabase
        .from('jobs')
        .insert([jobData]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job posted successfully!",
      });
      navigate('/jobs');
    } catch (error) {
      console.error('Error posting job:', error);
      toast({
        title: "Error",
        description: "Failed to post job. Please try again.",
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
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Post a New Job</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" name="title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea id="description" name="description" required rows={5} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea id="requirements" name="requirements" required rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salary_range">Salary Range</Label>
                  <Input id="salary_range" name="salary_range" required placeholder="e.g. $60,000 - $80,000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required placeholder="e.g. Remote, New York" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job_type">Job Type</Label>
                  <Input id="job_type" name="job_type" required placeholder="e.g. Full-time, Contract" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" name="deadline" type="date" required />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => navigate('/jobs')}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Posting...' : 'Post Job'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobPost;