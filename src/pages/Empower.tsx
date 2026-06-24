import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Code, Video, Palette, Briefcase, Globe, HeartHandshake, Zap, Target } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { useState, useEffect } from "react";
const mozaEgypt = "/moza_egypt_1780977933756.png";
const mozaDubai = "/moza_dubai_1780977945427.png";

const ImageSlider = () => {
  const images = [
    "/images/zuup-session-1.jpeg",
    "/images/zuup-session-2.jpeg",
    "/images/zuup-session-3.JPG"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] border-2 border-border/20">
      {images.map((img, i) => (
        <motion.img
          key={img}
          src={img}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: currentIndex === i ? 1 : 0, 
            scale: currentIndex === i ? 1 : 1.05,
            zIndex: currentIndex === i ? 10 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none" />
      
      <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-30 pointer-events-none">
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>On-Ground Impact</h3>
        <p className="text-xl md:text-3xl text-white/80 font-medium">Training ~50 people every month.</p>
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 items-start relative z-10"
  >
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(255,61,127,0.2)]">
        {number}
      </div>
      {number !== "5" && <div className="w-1 h-24 bg-border/30 my-2 rounded-full" />}
    </div>
    <div className="pt-2 pb-8">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Caveat', cursive" }}>{title}</h3>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground">{desc}</p>
    </div>
  </motion.div>
);

const Empower = () => {
  return (
    <>
      <Helmet>
        <title>Empowerment — Zuup</title>
        <meta name="description" content="Zuup provides free training in digital skills for underprivileged youth. Empowerment over charity." />
      </Helmet>

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 px-4 pt-32 pb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-12"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Empowering Youth <br/> Through <span className="text-primary underline decoration-wavy underline-offset-[12px]">Digital Skills.</span>
          </motion.h1>
          
          {/* Massive Quote Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-5xl mx-auto mt-16 mb-16 relative"
          >
            <div className="absolute -top-10 -left-10 text-[10rem] text-primary/20 font-serif leading-none select-none">"</div>
            <p 
              className="text-4xl md:text-6xl text-primary font-bold italic leading-tight z-10 relative"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Give a man a fish and you feed him for a day. <br/>
              Teach a man to fish and you feed him for a lifetime.
            </p>
            <div className="absolute -bottom-20 -right-10 text-[10rem] text-primary/20 font-serif leading-none select-none">"</div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl leading-relaxed mx-auto"
          >
            Zuup isn't your average "teen-led NGO". We are a movement that forces young people to build incredibly cool tech. We don't believe in charity — we believe in capability. We bridge the gap between underprivileged communities and the digital economy through skill development, mentorship, and real opportunities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 w-full max-w-6xl mx-auto"
          >
            <ImageSlider />
          </motion.div>
        </div>

        {/* Features / Mission */}
        <div className="py-24 border-y border-border/10 bg-white/[0.02] relative">
          
          {/* Animated Side Mozas */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 w-48 h-48 opacity-40 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-floating-inverted.png" alt="Floating Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-10 w-48 h-48 opacity-40 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-cool-jumping-inverted.png" alt="Jumping Moza" className="w-full h-full object-contain" />
          </motion.div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Caveat', cursive" }}>Empowerment Over Charity</h2>
                <p className="text-xl text-muted-foreground">We don't hand out fish — we teach people to fish. Every programme is designed to create self-sufficient professionals, not dependents.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Caveat', cursive" }}>Research-Backed Approach</h2>
                <p className="text-xl text-muted-foreground mb-4">Our AI-powered skill-gap analysis, published in IJRASET, ensures every trainee gets a personalised pathway to financial independence.</p>
                <a href="https://doi.org/10.22214/ijraset.2025.73265" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors underline decoration-wavy">
                  <ExternalLink size={20} /> Read Research Paper
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* The Process */}
        <div className="py-32 container mx-auto px-4 max-w-4xl relative">
          
          {/* Animated Side Mozas for Process Section */}
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-32 w-64 h-64 opacity-20 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src="/moza-laptop-inverted.png" alt="Laptop Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -left-20 w-56 h-56 opacity-15 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src="/moza-coffee-inverted.png" alt="Coffee Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-40 -right-24 w-72 h-72 opacity-15 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src="/moza-hacker-inverted.png" alt="Hacker Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-32 w-64 h-64 opacity-20 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src="/moza-soldering-inverted.png" alt="Soldering Moza" className="w-full h-full object-contain" />
          </motion.div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-6xl md:text-7xl font-bold text-primary mb-6" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>How We Do It.</h2>
            <p className="text-2xl text-muted-foreground">A structured pipeline from ground zero to independence.</p>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <ProcessStep number="1" title="Partnership" desc="We partner with NGOs and organizations working with underprivileged youth to identify those with potential." />
            <ProcessStep number="2" title="Outreach" desc="Our team conducts awareness sessions about digital skills and the opportunities they unlock." />
            <ProcessStep number="3" title="Training" desc="Candidates receive free, structured training in video editing, graphic design, and coding." />
            <ProcessStep number="4" title="Placement" desc="We connect trained individuals with companies and teach them how to freelance independently." />
            <ProcessStep number="5" title="Independence" desc="Our graduates become financially independent digital professionals — no charity needed." />
          </div>
        </div>

        {/* Skills We Teach */}
        <div className="py-32 border-t border-border/10 bg-[#050505] relative overflow-hidden">
          
          {/* Background Moza to make it less empty */}
          <div className="absolute top-10 right-10 w-[500px] h-[500px] opacity-[0.05] pointer-events-none">
            <TransparentMoza src="/moza-laptop-inverted.png" alt="Moza Skills" className="w-full h-full object-contain" />
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-8xl font-bold text-primary mb-6" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>Skills We Teach.</h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">We focus purely on skills that have immediate, high-paying demand in the modern freelance economy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Video Editing", desc: "Create professional video content for YouTube and Reels.", moza: "/moza_empower_video_1780977200762.png" },
                { title: "Graphic Design", desc: "Design compelling visual content and brand identities.", moza: "/moza_empower_design_1780977213270.png" },
                { title: "Coding", desc: "Develop websites and web applications from scratch.", moza: "/moza_empower_code_1780977226452.png" }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-border/30 p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-transform flex flex-col items-center text-center group"
                >
                  <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TransparentMoza src={skill.moza} alt={skill.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'Caveat', cursive" }}>{skill.title}</h3>
                  <p className="text-lg text-muted-foreground">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* ZuupCode Callout */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary/10 border-2 border-primary p-8 rounded-3xl text-center shadow-[8px_8px_0px_0px_rgba(255,61,127,0.2)]"
            >
              <h3 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'Caveat', cursive" }}>No PC? No Problem.</h3>
              <p className="text-lg text-muted-foreground mb-6">We built our own browser-based IDE so students can write and test code directly from any basic device or smartphone.</p>
              <a href="https://code.zuup.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                Try ZuupCode <ExternalLink size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Global Chapters */}
        <div className="py-32 container mx-auto px-4 max-w-5xl text-center relative">
          
          <div className="absolute top-10 left-10 w-64 h-64 opacity-10 pointer-events-none">
            <TransparentMoza src="/moza-rocket-skateboard-inverted.png" alt="Moza Global" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-primary mb-8" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>Global Impact.</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto">We are expanding rapidly. Zuup Chapters are already active internationally.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <a href="https://giza.zuup.dev" target="_blank" rel="noopener noreferrer" className="group text-center transition-all hover:scale-105">
              <div className="w-48 h-48 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TransparentMoza src={mozaEgypt} alt="Egypt Moza" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">Giza, Egypt</h3>
              <p className="text-xl text-primary underline decoration-wavy font-mono">giza.zuup.dev</p>
            </a>
            
            <div className="w-px h-32 bg-border/30 hidden md:block" />

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 opacity-50">
                <TransparentMoza src={mozaDubai} alt="Dubai Moza" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">Dubai</h3>
              <p className="text-xl text-primary font-bold underline decoration-wavy underline-offset-[6px]">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Massive CTAs */}
        <div className="py-32 border-t border-border/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-5xl md:text-7xl font-bold text-center text-primary mb-16" style={{ fontFamily: "'Caveat', cursive" }}>Get Involved.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <a href="mailto:hello@zuup.dev?subject=Job Partner Inquiry" className="group flex flex-col items-center justify-center p-12 bg-white/5 border-2 border-white/10 rounded-[3rem] hover:border-primary/50 hover:bg-primary/5 transition-all text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.2)]">
                <div className="w-40 h-40 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TransparentMoza src="/moza_empower_partner_1780977238040.png" alt="Partner Moza" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Caveat', cursive" }}>Become a Job Partner</h3>
                <p className="text-lg text-muted-foreground">Hire our trained graduates for your freelance or contract needs.</p>
              </a>

              <a href="mailto:hello@zuup.dev?subject=NGO Partnership Inquiry" className="group flex flex-col items-center justify-center p-12 bg-white/5 border-2 border-white/10 rounded-[3rem] hover:border-primary/50 hover:bg-primary/5 transition-all text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.2)]">
                <div className="w-40 h-40 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TransparentMoza src="/moza_empower_ngo_1780977248704.png" alt="NGO Moza" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Caveat', cursive" }}>I am an NGO</h3>
                <p className="text-lg text-muted-foreground">Partner with us to bring digital skills training to your community.</p>
              </a>
            </div>

            {/* Chapter Leader Callout */}
            <div className="bg-primary text-primary-foreground p-12 md:p-16 rounded-[3rem] text-center shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
              <h3 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Don't just start an NGO for your portfolio.</h3>
              <p className="text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto">
                Become the leader of your city. Start a Zuup Chapter and bring the movement to your local community.
              </p>
              <a href="https://www.zuup.dev/apply" className="inline-flex items-center gap-4 bg-background text-foreground font-bold text-2xl px-10 py-5 rounded-2xl hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] transition-all">
                Start a Chapter <ArrowRight size={28} />
              </a>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Empower;
