import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import AdminLogin from '@/components/admin/auth/AdminLogin';
import RichTextEditor from '@/components/admin/RichTextEditor';
import TransparentMoza from '@/components/TransparentMoza';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2, X, Save } from 'lucide-react';
import { Job } from './Careers';

const JobAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    job_type: '',
    location: '',
    apply_link: ''
  });

  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // We use the custom auth domain
        const res = await fetch('https://auth.zuup.dev/api/me', {
          credentials: 'include', // MUST BE INCLUDE to send the SSO cookie!
        });
        
        if (res.ok) {
          setIsAuthenticated(true);
          fetchJobs();
        } else {
          // Redirect to central auth
          const redirectUrl = window.location.href;
          window.location.href = `https://auth.zuup.dev/login?redirect_to=${encodeURIComponent(redirectUrl)}`;
        }
      } catch (err) {
        const redirectUrl = window.location.href;
        window.location.href = `https://auth.zuup.dev/login?redirect_to=${encodeURIComponent(redirectUrl)}`;
      }
    };
    checkAuth();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error fetching jobs', description: error.message, variant: 'destructive' });
    } else if (data) {
      setJobs(data as Job[]);
    }
    setLoading(false);
  };

  const handleEdit = (job: Job) => {
    setFormData({
      title: job.title,
      slug: job.slug,
      description: job.description || '',
      job_type: job.job_type || '',
      location: job.location || '',
      apply_link: job.apply_link || ''
    });
    setEditingId(job.id);
    setIsEditing(true);
  };

  const handleCreateNew = () => {
    setFormData({ title: '', slug: '', description: '', job_type: '', location: '', apply_link: '' });
    setEditingId(null);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingId(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    
    const { error } = await supabase.from('jobs').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error deleting job', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Job deleted successfully' });
      fetchJobs();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      toast({ title: 'Missing fields', description: 'Title and Slug are required.', variant: 'destructive' });
      return;
    }

    try {
      if (editingId) {
        // Update
        const { error } = await supabase
          .from('jobs')
          .update(formData)
          .eq('id', editingId);
        
        if (error) throw error;
        toast({ title: 'Job updated successfully' });
      } else {
        // Insert
        const { error } = await supabase
          .from('jobs')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: 'Job created successfully' });
      }
      
      setIsEditing(false);
      fetchJobs();
    } catch (error: any) {
      toast({ title: 'Error saving job', description: error.message, variant: 'destructive' });
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-foreground p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,61,127,0.05)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />
      
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 pointer-events-none hidden lg:block z-0"
      >
        <TransparentMoza src="/moza-job-desk.png" alt="Desk Moza" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-6xl font-bold text-white tracking-tight" style={{ fontFamily: "'Caveat', cursive" }}>
            admin <span className="text-primary">dashboard</span>
          </h1>
          {!isEditing && (
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[2rem] text-xl font-bold shadow-[0_4px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#96163e] active:translate-y-1 active:shadow-[0_0px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              <Plus size={20} strokeWidth={3} /> new job
            </button>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSave} className="bg-[#0B0E14] border-[2px] border-primary rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>
                {editingId ? 'edit job' : 'create new job'}
              </h2>
              <button type="button" onClick={handleCancel} className="text-white/50 hover:text-white transition-colors">
                <X size={28} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-[#171A21] border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                  placeholder="e.g. Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">URL Slug *</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-[#171A21] border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                  placeholder="e.g. software-engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                <input
                  type="text"
                  value={formData.job_type}
                  onChange={(e) => setFormData({ ...formData, job_type: e.target.value })}
                  className="w-full px-4 py-3 bg-[#171A21] border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                  placeholder="e.g. Full-time, Volunteer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-[#171A21] border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                  placeholder="e.g. Remote, Delhi"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Apply Link URL</label>
                <input
                  type="url"
                  value={formData.apply_link}
                  onChange={(e) => setFormData({ ...formData, apply_link: e.target.value })}
                  className="w-full px-4 py-3 bg-[#171A21] border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Job Description (Rich Text)</label>
              <RichTextEditor 
                content={formData.description} 
                onChange={(html) => setFormData({ ...formData, description: html })} 
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 bg-[#1A1E29] text-white rounded-[2rem] text-2xl font-bold hover:bg-[#2A2E39] transition-all"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-[2rem] text-2xl font-bold shadow-[0_4px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#96163e] active:translate-y-1 active:shadow-[0_0px_0_0_#96163e] transition-all"
                style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
              >
                <Save size={20} strokeWidth={3} /> save job
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {loading ? (
              <div className="p-12 text-center text-white/50" style={{ fontFamily: "'Caveat', cursive", fontSize: '2rem' }}>loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div className="p-12 text-center text-white/50" style={{ fontFamily: "'Caveat', cursive", fontSize: '2rem' }}>no jobs found. create one!</div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className="bg-[#0B0E14] border-[2px] border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/30 transition-colors shadow-xl">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-[#171A21] border border-white/5 rounded-xl text-xs font-bold text-gray-400">{job.job_type || 'N/A'}</span>
                      <span className="px-4 py-2 bg-[#171A21] border border-white/5 rounded-xl text-xs font-bold text-gray-400">{job.location || 'N/A'}</span>
                      <span className="px-4 py-2 bg-[#171A21] border border-white/5 rounded-xl text-xs font-bold text-gray-400">Added {new Date(job.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                      onClick={() => handleEdit(job)}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1E29] hover:bg-[#2A2E39] text-white rounded-2xl font-bold transition-colors"
                    >
                      <Edit2 size={16} /> edit
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-2xl font-bold transition-colors"
                    >
                      <Trash2 size={16} /> delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobAdmin;
