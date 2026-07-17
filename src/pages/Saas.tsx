import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { Link } from "react-router-dom";

// Note: Ensure the user drops these 4 files into the public directory:
// saas-code.jpeg, saas-time.jpeg, saas-giza.jpeg, saas-validate.jpeg

interface SaasCardProps {
  title: string;
  tag: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
  fallbackGradient?: string;
}

const SaasCard = ({ title, tag, description, image, link, linkText, fallbackGradient }: SaasCardProps) => {
  const content = (
    <div className="relative h-full flex flex-col justify-end p-6 md:p-8 rounded-[2rem] overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-black">
      {/* Background Image / Fallback Gradient */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${fallbackGradient} mix-blend-screen`}
        style={{ backgroundImage: `url(${image})`, clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-end min-h-[300px]">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-3 border border-white/10">
            {tag}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Caveat', cursive", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            {title}
          </h3>
        </div>

        <p className="text-white/80 text-sm md:text-base mb-8 max-w-sm">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {link && (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors">
              {linkText} {link.startsWith('http') ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (link) {
    if (link.startsWith('http')) {
      return <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
    }
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return <div className="h-full">{content}</div>;
};

const Saas = () => {
  return (
    <>
      <SEO 
        title="SaaS Ecosystem — Zuup" 
        description="Explore the Zuup Ecosystem. Open-source tools, developer platforms, and web applications built for students and makers." 
        path="/saas" 
      />

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-32 pb-16 px-4 relative flex flex-col items-center justify-center text-center">
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 opacity-20 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-laptop-inverted.png" alt="Laptop Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-10 w-72 h-72 opacity-20 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-hacker-inverted.png" alt="Hacker Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-8 relative z-10"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            The Zuup <br/> <span className="text-primary underline decoration-wavy underline-offset-[12px]">Ecosystem.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl leading-relaxed mx-auto relative z-10"
          >
            These platforms are built by the people working at Zuup with the pure aim of shipping real products into the world. Every single tool is 100% open source.
          </motion.p>
        </div>

        {/* Ecosystem Grid */}
        <div className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <SaasCard 
                title="Zuup Dashboard"
                tag="Command Center"
                description="Centralized command center and passwordless auth built on Cloudflare Workers."
                image="/mozadashboard.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://dashboard.zuup.dev"
                linkText="Open Dashboard"
              />

              <SaasCard 
                title="ZuupCode"
                tag="Cloud IDE"
                description="Browser-based coding IDE for instantaneous, zero-setup development."
                image="/mozacodin.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://code.zuup.dev"
                linkText="Open ZuupCode"
              />

              <SaasCard 
                title="Zuup Validate"
                tag="Certification"
                description="Cryptographically verifiable digital certificates issued for hackathons and courses."
                image="/mozawithmagnifiyingglass.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://validate.zuup.dev"
                linkText="Verify Certificate"
              />

              <SaasCard 
                title="ZuupTime"
                tag="Productivity"
                description="Log your coding time and track stats straight from any IDE."
                image="/mozatime.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://time.zuup.dev"
                linkText="Track Time"
              />

              <SaasCard 
                title="Zuup Counseling"
                tag="Mentorship"
                description="Personalized guidance and mentorship platform for all active cohorts."
                image="/mozacounseling.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://counseling.zuup.dev"
                linkText="Get Guidance"
              />

              <SaasCard 
                title="Zuup Mail"
                tag="Agentic Email"
                description="Autonomous agentic email system built for massive scale."
                image="/mozamail.jpeg"
                fallbackGradient="bg-gradient-to-br from-zinc-900 to-black"
                link="https://mail.zuup.dev"
                linkText="Open Mail"
              />

            </div>
          </div>
        </div>

        {/* Massive Final CTA */}
        <div className="py-32 border-t border-border/10 text-center px-4 relative flex flex-col items-center justify-center">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 mb-8"
          >
            <TransparentMoza src="/moza-rocket-skateboard-inverted.png" alt="Rocket Moza" className="w-full h-full object-contain" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8" style={{ fontFamily: "'Caveat', cursive" }}>Wanna gain access to all this?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Join the community. Hop into the Slack and start building with hundreds of other young creators.</p>
          <a
            href="https://zuup.dev/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-4 px-12 py-6 bg-primary text-primary-foreground font-bold text-2xl rounded-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.3)] transition-all"
          >
            Join Slack <ExternalLink size={24} />
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Saas;
