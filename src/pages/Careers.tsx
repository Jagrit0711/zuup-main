import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../integrations/supabase/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { motion } from "framer-motion";

// We define a type for our Job
export type Job = {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  location: string | null;
  salary: string | null;
  job_type: string | null;
  apply_link: string;
};

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching jobs:", error);
        } else if (data) {
          setJobs(data as Job[]);
        }
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers — Join the Zuup Team</title>
        <meta name="description" content="View our available job openings and join the Zuup team." />
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-foreground font-sans relative overflow-hidden">
        <Navbar />

        {/* Hero Section with Flanking Mozas */}
        <div className="pt-32 pb-16 px-4 relative flex flex-col items-center justify-center text-center">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 opacity-60 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-job-desk.png" alt="Desk Moza" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,61,127,0.3)]" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-10 w-48 h-48 md:w-64 md:h-64 opacity-60 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src="/moza-job-celebrating.png" alt="Celebrating Moza" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,61,127,0.3)]" />
          </motion.div>

          <h1 
            className="text-6xl md:text-[8rem] font-bold mb-6 inline-block underline decoration-wavy underline-offset-[16px] decoration-primary relative z-10 leading-[0.9]"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            join the zuup team
          </h1>
          <p 
            className="text-xl md:text-3xl mt-8 max-w-3xl mx-auto text-muted-foreground relative z-10 font-medium leading-relaxed"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            We are a nonprofit providing cool stuff empowering youth counseling teaching them make cool stuff promoting tech shipping and personal brand building
          </p>
        </div>

        <main className="container mx-auto px-4 py-16 max-w-5xl relative z-10">

          {/* Job Listings Section */}
          <div className="mb-10 w-full relative">
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -left-16 w-48 h-48 opacity-60 pointer-events-none hidden lg:block"
            >
              <TransparentMoza src="/moza-job-detective.png" alt="Detective Moza" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-16 -right-16 w-48 h-48 opacity-60 pointer-events-none hidden lg:block"
            >
              <TransparentMoza src="/moza-job-megaphone.png" alt="Megaphone Moza" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center mb-16 relative z-10">
              <h2 
                className="text-5xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                available job openings
              </h2>
            </div>

            {loading ? (
              <p className="text-2xl text-white" style={{ fontFamily: "'Caveat', cursive" }}>Loading jobs...</p>
            ) : jobs.length === 0 ? (
              <p className="text-2xl text-muted-foreground" style={{ fontFamily: "'Caveat', cursive" }}>No open positions at the moment. Check back later!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {jobs.map((job) => (
                  <Link 
                    to={`/careers/${encodeURIComponent(job.slug || job.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '')}`} 
                    key={job.id}
                    className="block p-8 bg-[#0B0E14] border-[3px] border-primary rounded-3xl hover:-translate-y-2 hover:shadow-[0_8px_0_0_#ff3d7f] transition-all duration-300"
                  >
                    <div className="inline-block">
                      <h3 
                        className="text-4xl font-bold text-white"
                        style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
                      >
                        {job.title}
                      </h3>
                      {/* A mini wave underline for the card title */}
                      <svg width="100%" height="12" viewBox="0 0 100 24" preserveAspectRatio="none" className="text-primary mt-1">
                        <path d="M 0 12 Q 12 0 25 12 T 50 12 T 75 12 T 100 12" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                      </svg>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-8 mb-6">
                      {job.job_type && (
                        <span className="px-4 py-2 bg-[#1A1E29] border border-white/10 text-white text-sm font-medium rounded-xl flex items-center gap-2">
                          {job.job_type}
                        </span>
                      )}
                      {job.location && (
                        <span className="px-4 py-2 bg-[#1A1E29] border border-white/10 text-white text-sm font-medium rounded-xl flex items-center gap-2">
                          {job.location}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white/80 line-clamp-3 font-medium" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem", lineHeight: "1.4" }}>
                      {job.description.replace(/<[^>]+>/g, '')}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" style={{ fontFamily: "'Caveat', cursive" }}>
              note all job opening are volunteer they are designed to help you get started with the real world jobs etting to work loads<br/><br/>
              all job are designed as per part time or full time basis and are unpaid join only if u wanna get into coporate zone and build and get to the community build conenotion learn stuff d learn tech andd !!
            </p>
          </div>
        </main>

        <div className="bg-[#050505] relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Careers;
