import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";

const AboutSection = ({
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

          <motion.div
            initial={{ opacity: 0, x: reverse ? 100 : -100, rotate: reverse ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative z-10 group">
              <TransparentMoza
                src={mozaSrc}
                alt={mozaAlt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />
          </motion.div>

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

const About = () => {
  return (
    <>
      <SEO 
        title="About Us — The Team Behind Zuup" 
        description="Learn about our mission, what we do, and the team driving Zuup forward." 
        path="/about" 
      />

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Title Screen */}
        <div className="h-[90vh] flex flex-col items-center justify-center text-center relative z-10 px-4">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 w-[400px] h-[400px] opacity-40 pointer-events-none hidden md:block"
          >
            <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozagreeting.jpeg" alt="Greeting Moza" className="w-full h-full object-contain mix-blend-screen" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -right-10 w-[350px] h-[350px] opacity-30 pointer-events-none hidden lg:block"
          >
            <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozateam.jpeg" alt="Team Moza" className="w-full h-full object-contain mix-blend-screen" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[15vw] sm:text-8xl md:text-[10rem] font-bold text-foreground leading-[0.9]"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
          >
            About <span className="text-primary underline decoration-wavy underline-offset-[16px]">Zuup.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-3xl md:text-5xl text-muted-foreground font-medium max-w-4xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            The mission, the vision, and the madmen behind it all.
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

        {/* Section: Mission / What we do */}
        <AboutSection
          title="Our Mission."
          mozaSrc="/moza-graduate-inverted.png"
          mozaAlt="Moza Mission"
          content={
            <>
              <p>We build builders.</p>
              <p className="text-muted-foreground">Our mission is to transform raw potential into <strong className="text-foreground">unstoppable creators</strong>.</p>
              <p>We don't just teach theory—we forge high-income freelancers and hardcore engineers who actually build the future instead of just studying it.</p>
            </>
          }
        />

        {/* Section: Teaching & Events */}
        <AboutSection
          title="Teaching & Events."
          mozaSrc="/moza-teaching-inverted.png"
          mozaAlt="Moza Teaching"
          reverse
          content={
            <>
              <p>Education shouldn't be boring.</p>
              <p className="text-muted-foreground">We host massive events, intense hackathons, and no-BS bootcamps.</p>
              <p>We bring together the brightest minds and throw them into the deep end. No block-coding. Just real-world hardware, software, and building things that actually matter.</p>
            </>
          }
        />

        {/* Section: SaaS Division */}
        <AboutSection
          title="The SaaS Division."
          mozaSrc="/moza-laptop-inverted.png"
          mozaAlt="Moza Coding SaaS"
          content={
            <>
              <p>Software built by builders, for builders.</p>
              <p className="text-muted-foreground">Our software products aren't just generic corporate tools.</p>
              <p>They are crafted dynamically as part of <strong className="text-foreground">real-world projects</strong> by our community, or they are built specifically to solve deep problems and help people scale their own work.</p>
            </>
          }
        />

        {/* Section: Empowerment Division */}
        <AboutSection
          title="The Empowerment Division."
          mozaSrc="/moza-building-inverted.png"
          mozaAlt="Moza Building Empowerment"
          reverse
          content={
            <>
              <p>We don't just stop at traditional students.</p>
              <p className="text-muted-foreground">Zuup runs dedicated <strong className="text-foreground">Chapter Programs</strong> specifically built for the empowerment sector.</p>
              <p>We bring high-income freelance skills and hardcore tech training directly to underprivileged youth, completely replacing the outdated "charity" model with real, actionable empowerment.</p>
            </>
          }
        />

        {/* Section: No Donations */}
        <AboutSection
          title="We Don't Believe in Donations."
          mozaSrc="/moza-floating-inverted.png"
          mozaAlt="Floating Moza"
          content={
            <>
              <p>Charity creates dependency. <strong className="text-primary">We create capability.</strong></p>
              <p className="text-muted-foreground">Instead of asking for money, we invest in people — giving them skills to earn, compete, and thrive in the digital economy on their own terms.</p>
              <p>Every person we train becomes self-sufficient, not dependent.</p>
            </>
          }
        />

        {/* Section: The Founder */}
        <AboutSection
          title="The Founder."
          mozaSrc="/moza-hacker-inverted.png"
          mozaAlt="Jagrit Sachdev Moza"
          reverse
          content={
            <>
              <p>Zuup is spearheaded by <strong className="text-primary">Jagrit Sachdev</strong>.</p>
              <p className="text-muted-foreground">What started as a resume booster quickly turned into an obsession to fix a broken tech ecosystem.</p>
            </>
          }
        />

        {/* Section: The People */}
        <AboutSection
          title="The People."
          mozaSrc="/moza-cool-jumping-inverted.png"
          mozaAlt="The Zuup Team"
          reverse
          content={
            <>
              <p>We are a growing army of builders, hackers, and disruptors.</p>
              <p className="text-muted-foreground">Want to see the entire squad driving this movement?</p>
              <a
                href="https://people.zuup.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 p-6 rounded-3xl transition-all duration-300 border border-white/10 hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-foreground text-3xl group-hover:text-primary transition-colors">people.zuup.dev</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold uppercase tracking-widest rounded-full">Beta</span>
                  </div>
                  <div className="text-lg text-muted-foreground">View all our employees & contributors</div>
                </div>
                <ExternalLink size={28} className="text-muted-foreground group-hover:text-primary transition-colors ml-4" />
              </a>
            </>
          }
        />

        {/* Section: Awards */}
        <AboutSection
          title="SME Business of the Year 2025."
          mozaSrc="/moza-graduate-inverted.png"
          mozaAlt="Moza Award"
          content={
            <>
              <p>We don't just talk. We deliver.</p>
              <p className="text-muted-foreground">Recognized as the outstanding SME business for innovative social impact and youth empowerment initiatives.</p>
              <a
                href="https://www.greatcompanies.in/post/zuup-sme-business-of-the-year-award-winner-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-primary font-bold hover:text-white transition-colors underline decoration-wavy"
              >
                <ExternalLink size={20} /> Read the Great Companies Feature
              </a>
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
              Join the chaos.
            </h2>
            <a
              href="/join"
              className="group inline-flex justify-center items-center gap-6 px-12 md:px-16 py-8 bg-primary text-primary-foreground font-bold text-3xl md:text-5xl rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-4 hover:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.3)] hover:bg-primary/90 transition-all duration-300"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              Enter the Slack
              <ArrowRight size={48} className="hidden sm:block group-hover:translate-x-6 transition-transform duration-300" />
            </a>

            <p className="mt-16 text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              Zuup legally operates under the umbrella of <strong>Gurudikshaam</strong> for all official certifications.
              For credibility checks, visit <a href="https://www.gurudikshaam.org/en/about/certificates" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline decoration-wavy">Gurudikshaam Certificates</a>.
            </p>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
