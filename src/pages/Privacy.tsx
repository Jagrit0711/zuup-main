import SEO from "../components/SEO";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy — Zuup" 
        description="How we handle data, media, and privacy for our community." 
        path="/privacy" 
      />

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-12 px-4 relative flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-6 relative z-10"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Privacy <span className="text-primary underline decoration-wavy underline-offset-[12px]">Policy.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl leading-relaxed mx-auto relative z-10"
          >
            No legal jargon. Just plain English about how we protect you, your data, and our community.
          </motion.p>
        </section>

        {/* Floating Background Mozas */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [5, 10, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[-10%] md:right-10 w-64 h-64 md:w-96 md:h-96 opacity-10"
          >
            <TransparentMoza src="/moza-cool-inverted.png" alt="Moza" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [-5, -15, -5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-[-15%] md:left-[-5%] w-72 h-72 md:w-[400px] md:h-[400px] opacity-[0.08]"
          >
            <TransparentMoza src="/moza-rocket-skateboard-inverted.png" alt="Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-[-5%] md:right-20 w-80 h-80 md:w-[500px] md:h-[500px] opacity-10"
          >
            <TransparentMoza src="/moza-building-inverted.png" alt="Moza" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* Content Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Target Audience & Minors */}
            <motion.div
              variants={fade}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>Our Community (Ages 15-25)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  Zuup is built for the youth. Our core target audience is between 15 and 25 years old. Because a massive portion of our community consists of minors, <strong className="text-white">we take privacy incredibly seriously.</strong>
                </p>
                <p>
                  We are deeply committed to creating a safe, empowering, and secure environment for young builders, hackers, and creators to thrive without worrying about their personal data being exploited.
                </p>
              </div>
            </motion.div>

            {/* Media & Photography Consent */}
            <motion.div
              variants={fade}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>Media & Event Photography</h2>
              </div>
              <div className="space-y-4 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  We document our hackathons, workshops, and events because we want to showcase the incredible things you build. 
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-bold">By registering for and attending Zuup events, you acknowledge and agree that:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground font-medium">
                    <li>We may take photos and videos of the activities.</li>
                    <li>We may use these pictures and videos of you participating in the activity publicly (on our website, social media, promotional materials) <strong className="text-primary">without requiring explicit parent's consent.</strong></li>
                  </ul>
                </div>
                <p className="text-sm">If you are uncomfortable with being photographed, please inform our organizing team at the venue, and we will do our best to respect your boundaries.</p>
              </div>
            </motion.div>

            {/* Sponsor Data Sharing */}
            <motion.div
              variants={fade}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>Sponsors & Your Data</h2>
              </div>
              <div className="space-y-4 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  We partner with amazing sponsors who make our hackathons and events possible. However, your personal data is yours.
                </p>
                <p>
                  <strong className="text-white">We do NOT blindly sell or share your data with sponsors.</strong> We will only share your specific contact information or resume with our sponsors <strong className="text-primary underline decoration-wavy underline-offset-4">after you have given explicit consent</strong> to do so (usually via an opt-in checkbox during event registration or a specific form).
                </p>
              </div>
            </motion.div>

            {/* General Security */}
            <motion.div
              variants={fade}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] border border-white/10 p-6 md:p-10 mb-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>General Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground font-medium text-lg leading-relaxed">
                <p>
                  All our systems (Dashboard, Mail, Auth) are built on top-tier infrastructure like Cloudflare and Supabase to ensure your data is encrypted and secure. We don't track you across the web, and we only collect what we absolutely need to run the community effectively.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
