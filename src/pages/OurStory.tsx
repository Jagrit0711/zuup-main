import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";

const StorySection = ({ 
  title, 
  content, 
  mozaSrc, 
  mozaAlt, 
  reverse = false 
}: { 
  title: string, 
  content: React.ReactNode, 
  mozaSrc: string, 
  mozaAlt: string, 
  reverse?: boolean 
}) => {
  return (
    <div className="min-h-screen flex items-center py-20 relative overflow-hidden border-b border-border/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
          
          {/* Moza Art Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 100 : -100, rotate: reverse ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative z-10 group">
              <TransparentMoza 
                src={mozaSrc} 
                alt={mozaAlt} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            {/* Soft background glow to make Moza pop without a box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />
          </motion.div>

          {/* Typography Content Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className="w-full md:w-1/2 z-20 text-center md:text-left"
          >
            <h2 
              className="text-6xl md:text-[5.5rem] leading-[1.1] font-bold text-primary mb-8" 
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              {title}
            </h2>
            <div className="space-y-6 text-2xl md:text-4xl text-foreground font-medium leading-tight tracking-tight">
              {content}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

const OurStory = () => {
  return (
    <>
      <SEO 
        title="Our Story — The Honest Truth About Zuup" 
        description="How Zuup started as a portfolio project and turned into a movement empowering youth." 
        path="/our-story" 
      />

      {/* No Grid Background. Pure pitch black base. */}
      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Huge Hero Title Screen */}
        <div className="h-[90vh] flex flex-col items-center justify-center text-center relative z-10 px-4">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 w-[400px] h-[400px] opacity-40 pointer-events-none hidden md:block"
          >
            <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozatreasure.jpeg" alt="Treasure Moza" className="w-full h-full object-contain mix-blend-screen" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -right-10 w-[350px] h-[350px] opacity-30 pointer-events-none hidden lg:block"
          >
            <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozawithmagnifiyingglass.jpeg" alt="Magnifying Glass Moza" className="w-full h-full object-contain mix-blend-screen" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[15vw] sm:text-8xl md:text-[10rem] font-bold text-foreground leading-[0.9]"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
          >
            The Honest <br/> <span className="text-primary underline decoration-wavy underline-offset-[16px]">Truth.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-3xl md:text-5xl text-muted-foreground font-medium max-w-4xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Scroll to see how a selfish portfolio project became a global movement.
          </motion.p>
          
          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10"
          >
            <div className="w-[2px] h-24 bg-gradient-to-b from-primary/50 to-transparent mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Story Section 1 */}
        <StorySection 
          title="How it actually started."
          mozaSrc="/moza-laptop-inverted.png"
          mozaAlt="Moza building portfolio"
          content={
            <>
              <p>Let's be completely real. Zuup wasn't born to save the world.</p>
              <p className="text-muted-foreground">It started in November 2024 with one highly selfish goal: <strong className="text-foreground">portfolio building.</strong></p>
              <p>But then we saw the raw talent on the ground rotting away without guidance. That resume booster turned into an absolute obsession.</p>
            </>
          }
        />

        {/* Story Section 2 */}
        <StorySection 
          title="Killing the dependency."
          mozaSrc="/moza-cool-inverted.png"
          mozaAlt="Moza acting cool"
          reverse
          content={
            <>
              <p>Standard NGOs hand out free stuff. <span className="text-muted-foreground">That just creates a culture of dependency.</span></p>
              <p>We scrapped the charity model. We started teaching raw, high-income freelance skills instead.</p>
              <a href="https://doi.org/10.22214/ijraset.2025.73265" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline decoration-wavy mt-6 inline-block">
                We even published a peer-reviewed paper on it.
              </a>
            </>
          }
        />

        {/* Story Section 3 */}
        <StorySection 
          title="Tech education is a joke."
          mozaSrc="/moza-soldering-inverted.png"
          mozaAlt="Moza Soldering PCB"
          content={
            <>
              <p>We met 9-CGPA college grads who were completely unhirable.</p>
              <p className="text-muted-foreground">Schools were teaching useless "block coding" and calling it an education.</p>
              <p>So we launched the <strong className="text-foreground">School Program</strong>. We teach real coding, PCB making, and hardcore hardware engineering.</p>
            </>
          }
        />

        {/* Story Section 4 */}
        <StorySection 
          title="Building an empire."
          mozaSrc="/moza-rocket-skateboard-inverted.png"
          mozaAlt="Moza Rocket Expansion"
          reverse
          content={
            <>
              <p>Things exploded. We launched massive events and built our own SaaS ecosystem.</p>
              <p className="text-muted-foreground">Our mission? Build India's biggest community of over <strong className="text-foreground">100,000</strong> builders.</p>
              <p>And we aren't stopping there. We are already active on the ground in <strong className="text-foreground">Giza (Egypt)</strong> and <strong className="text-foreground">Dubai</strong>.</p>
            </>
          }
        />

        {/* Massive Final CTA */}
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-[12vw] sm:text-8xl md:text-[8rem] font-bold text-foreground mb-16 leading-[0.9]" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>
              Ready for the madness?
            </h2>
            <a
              href="/join"
              className="group inline-flex justify-center items-center gap-6 px-12 md:px-16 py-8 bg-primary text-primary-foreground font-bold text-3xl md:text-5xl rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-4 hover:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.3)] hover:bg-primary/90 transition-all duration-300"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              Join the Movement
              <ArrowRight size={48} className="hidden sm:block group-hover:translate-x-6 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OurStory;