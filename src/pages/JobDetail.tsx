import SEO from "../components/SEO";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Share2, Linkedin, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import DOMPurify from "dompurify";
import { supabase } from "../integrations/supabase/client";
import { routes } from "@/routes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Job } from "./Careers";

const WaveUnderline = () => (
  <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none" className="text-primary mt-1">
    <path
      d="M 0 10 Q 15 0 30 10 T 60 10 T 90 10 T 120 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      if (!slug) return;
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("slug", slug);

        if (!error && data && data.length > 0) {
          setJob(data[0] as Job);
        } else {
          const { data: allJobs, error: allError } = await supabase
            .from("jobs")
            .select("*");

          if (!allError && allJobs) {
            const foundJob = allJobs.find((j: Job) => {
              const jobSlug = j.slug?.toLowerCase();
              const fallbackSlug = j.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return jobSlug === slug.toLowerCase() || fallbackSlug === slug.toLowerCase();
            });
            setJob(foundJob ? (foundJob as Job) : null);
          } else {
            setJob(null);
          }
        }
      } catch {
        setJob(null);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center font-sans">
        <p className="text-3xl text-foreground" style={{ fontFamily: "'Caveat', cursive" }}>Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center font-sans">
        <p className="text-3xl mb-4 text-foreground" style={{ fontFamily: "'Caveat', cursive" }}>Job not found!</p>
        <Link to={routes.careers} className="text-xl underline decoration-wavy underline-offset-4 font-bold text-primary">
          Go back to Careers
        </Link>
      </div>
    );
  }

  // Sanitise the HTML before rendering — strips scripts and event handlers
  // while keeping safe formatting tags like <b>, <ul>, <p> intact.
  const safeDescription = DOMPurify.sanitize(job.description || '');

  return (
    <>
      <SEO 
        title={`${job.title} — Zuup Careers`} 
        description={`Apply for the ${job.title} position at Zuup.`} 
        path={`/careers/${job.slug}`} 
      />

      <div className="min-h-screen bg-[#050505] text-foreground font-sans flex flex-col items-center relative overflow-hidden">
        <div className="w-full relative z-20">
          <Navbar />
        </div>

        <main className="w-full max-w-5xl px-4 py-16 flex-grow flex flex-col items-center relative z-10">
          
          <div className="w-full mb-8">
            <Link to={routes.careers} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
              <ArrowLeft size={20} /> Back to all jobs
            </Link>
          </div>

          <div className="w-full bg-[#0B0E14] border-[2px] border-primary rounded-[2rem] p-8 md:p-14 relative">
            
            <div className="flex flex-col gap-8 mb-12 border-b-[1px] border-white/10 pb-10">
              
              <div className="flex flex-col items-start">
                <h1 
                  className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {job.title}
                </h1>
                <div className="w-[300px]">
                  <WaveUnderline />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {job.job_type && (
                  <div className="flex items-center gap-3 px-5 py-3 bg-[#171A21] border border-white/5 rounded-2xl text-sm font-bold text-white">
                    <Clock size={16} className="text-primary" /> {job.job_type}
                  </div>
                )}
                {job.location && (
                  <div className="flex items-center gap-3 px-5 py-3 bg-[#171A21] border border-white/5 rounded-2xl text-sm font-bold text-white">
                    <MapPin size={16} className="text-primary" /> {job.location}
                  </div>
                )}

                <div className="flex items-center gap-3 ml-0 md:ml-auto">
                  <button onClick={handleCopyLink} className="flex items-center justify-center gap-2 px-5 py-3 bg-[#21252D] hover:bg-[#2A2E37] border border-white/10 rounded-2xl text-sm font-bold text-white transition-colors cursor-pointer">
                    <Share2 size={16} /> Tell a friend
                  </button>
                  <button onClick={handleLinkedInShare} className="flex items-center justify-center gap-2 px-5 py-3 bg-[#101928] hover:bg-[#152033] border border-white/50 rounded-2xl text-sm font-bold text-white transition-colors cursor-pointer">
                    <Linkedin size={16} className="text-[#0a66c2]" fill="currentColor" /> Share on LinkedIn
                  </button>
                </div>
              </div>
            </div>

            {/* safeDescription has had all scripts and event handlers stripped by DOMPurify */}
            <div 
              className="prose prose-invert prose-lg max-w-none text-white font-medium mb-16"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.75rem", lineHeight: "1.6", letterSpacing: "1px" }}
              dangerouslySetInnerHTML={{ __html: safeDescription }}
            />

            <div className="flex justify-center border-t-[1px] border-white/10 pt-16">
              <a 
                href={job.apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-14 py-4 bg-primary text-white rounded-[3rem] text-4xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] active:translate-y-2 active:shadow-[0_0px_0_0_#96163e] transition-all"
                style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
              >
                Apply now !
              </a>
            </div>

          </div>
        </main>

        <div className="w-full bg-[#050505] relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default JobDetail;
