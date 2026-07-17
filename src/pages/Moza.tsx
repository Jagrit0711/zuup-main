import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SEO from "../components/SEO";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const mozas = [
  // JPEGs (Puppet style)
  { name: "Code", src: "/mozacodin.jpeg" },
  { name: "Dashboard", src: "/mozadashboard.jpeg" },
  { name: "Time", src: "/mozatime.jpeg" },
  { name: "Counseling", src: "/mozacounseling.jpeg" },
  { name: "Mail", src: "/mozamail.jpeg" },
  { name: "Greeting", src: "/mozagreeting.jpeg" },
  { name: "Team", src: "/mozateam.jpeg" },
  { name: "Treasure", src: "/mozatreasure.jpeg" },
  { name: "Magnifying Glass", src: "/mozawithmagnifiyingglass.jpeg" },
  // PNGs (Inverted / Abstract style)
  { name: "Building", src: "/moza-building-inverted.png" },
  { name: "Circuit", src: "/moza-circuit.png" },
  { name: "Coffee", src: "/moza-coffee-inverted.png" },
  { name: "Cool", src: "/moza-cool-inverted.png" },
  { name: "Cool Jumping", src: "/moza-cool-jumping-inverted.png" },
  { name: "Floating", src: "/moza-floating-inverted.png" },
  { name: "Graduate", src: "/moza-graduate-inverted.png" },
  { name: "Hacker", src: "/moza-hacker-inverted.png" },
  { name: "Laptop", src: "/moza-laptop-inverted.png" },
  { name: "Skateboard", src: "/moza-rocket-skateboard-inverted.png" },
  { name: "Soldering", src: "/moza-soldering-inverted.png" },
  { name: "Teaching", src: "/moza-teaching-inverted.png" },
  { name: "Empower Code", src: "/moza_empower_code_1780977226452.png" },
  { name: "Empower Design", src: "/moza_empower_design_1780977213270.png" },
  { name: "Empower NGO", src: "/moza_empower_ngo_1780977248704.png" },
  { name: "Empower Partner", src: "/moza_empower_partner_1780977238040.png" },
  { name: "Empower Video", src: "/moza_empower_video_1780977200762.png" },
  // New Mozas
  { name: "Job Celebrating", src: "/moza-job-celebrating.png" },
  { name: "Job Desk", src: "/moza-job-desk.png" },
  { name: "Job Detective", src: "/moza-job-detective.png" },
  { name: "Job Megaphone", src: "/moza-job-megaphone.png" },
  { name: "Software", src: "/moza-software.png" },
  { name: "Teaching 2", src: "/moza-teaching.png" },
  { name: "Events Hero", src: "/moza_events_hero_1780978768456.png" },
  { name: "Dubai", src: "/moza_dubai_1780977945427.png" },
  { name: "Egypt", src: "/moza_egypt_1780977933756.png" },
];

const Moza = () => {
  return (
    <>
      <SEO 
        title="Theming Centre — Zuup Brand Kit" 
        description="Download high-quality Zuup logos, official colors, and Moza mascot assets." 
        path="/moza" 
      />

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4 relative flex flex-col items-center justify-center text-center">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-10 w-[300px] h-[300px] opacity-20 pointer-events-none hidden md:block z-0"
          >
            <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozagreeting.jpeg" alt="Greeting Moza" className="w-full h-full object-contain mix-blend-screen" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-6 relative z-10"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Theming <span className="text-primary underline decoration-wavy underline-offset-[12px]">Centre.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl leading-relaxed mx-auto relative z-10"
          >
            The official brand kit. High-quality logos, our exact color palette, and a gallery of the iconic Moza mascot.
          </motion.p>
        </section>

        {/* Core Logos Section */}
        <section className="py-24 px-4 relative z-10 bg-white/5 border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>The Core Logos</h2>
              <p className="text-xl text-muted-foreground font-medium">Download the official Zuup wordmark in pure black or pure white.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* White Logo Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-[2rem] border border-white/10 overflow-hidden flex flex-col group"
              >
                <div className="h-64 bg-black flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity" />
                  <img src="/zuupw.png" alt="Zuup White Logo" className="w-full max-w-[200px] object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Zuup White</h3>
                    <p className="text-muted-foreground text-sm font-medium">Transparent PNG</p>
                  </div>
                  <a
                    href="/zuupw.png"
                    download="zuupw.png"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </motion.div>

              {/* Black Logo Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="glass-card rounded-[2rem] border border-white/10 overflow-hidden flex flex-col group"
              >
                <div className="h-64 bg-white flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/5 transition-opacity" />
                  <img src="/zuupb.png" alt="Zuup Black Logo" className="w-full max-w-[200px] object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Zuup Black</h3>
                    <p className="text-muted-foreground text-sm font-medium">Transparent PNG</p>
                  </div>
                  <a
                    href="/zuupb.png"
                    download="zuupb.png"
                    className="flex items-center justify-center w-12 h-12 rounded-full glass-card border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Palette Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>The Palette</h2>
              <p className="text-xl text-muted-foreground font-medium">Our high-contrast, cyberpunk-inspired colors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Pink */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden border border-white/10 group"
              >
                <div className="h-40 bg-primary w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6 bg-white/5 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xl mb-1">Zuup Pink</h3>
                  <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">#FF3D7F</code>
                </div>
              </motion.div>

              {/* Pitch Black */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden border border-white/10 group"
              >
                <div className="h-40 bg-[#050505] w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6 bg-white/5 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xl mb-1">Pitch Black</h3>
                  <code className="text-white/70 font-mono bg-white/10 px-2 py-1 rounded">#050505</code>
                </div>
              </motion.div>

              {/* Pure White */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden border border-white/10 group"
              >
                <div className="h-40 bg-[#FFFFFF] w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6 bg-white/5 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xl mb-1">Pure White</h3>
                  <code className="text-black font-mono bg-white px-2 py-1 rounded">#FFFFFF</code>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Typography Section */}
        <section className="py-24 px-4 relative z-10 bg-white/5 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>The Typography</h2>
              <p className="text-xl text-muted-foreground font-medium">Clean geometry meets handwritten chaos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inter */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-[2rem] border border-white/10 p-8 flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-4xl text-white font-bold mb-2">Inter</h3>
                  <p className="text-muted-foreground font-medium text-lg">Primary Typeface</p>
                </div>
                <div className="text-white space-y-4 font-sans mt-auto border-t border-white/10 pt-6">
                  <p className="text-4xl font-bold">Aa Bb Cc Dd Ee Ff</p>
                  <p className="text-2xl font-medium text-white/80">0123456789 !@#$%^&*</p>
                  <p className="text-sm text-muted-foreground">Used for body text, UI elements, and structural information to maintain strict readability.</p>
                </div>
              </motion.div>

              {/* Caveat */}
              <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-[2rem] border border-white/10 p-8 flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-5xl text-white font-bold mb-2" style={{ fontFamily: "'Caveat', cursive" }}>Caveat</h3>
                  <p className="text-muted-foreground font-medium text-lg">Accent Typeface</p>
                </div>
                <div className="text-white space-y-4 mt-auto border-t border-white/10 pt-6" style={{ fontFamily: "'Caveat', cursive" }}>
                  <p className="text-5xl font-bold">Aa Bb Cc Dd Ee Ff</p>
                  <p className="text-3xl font-medium text-white/80">0123456789 !@#$%^&*</p>
                  <p className="text-xl text-muted-foreground font-sans">Used exclusively for massive headers, highlights, and conveying the rebellious Hack Club energy.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Mascot Section */}
        <section className="py-24 px-4 relative z-10 bg-accent/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-7xl md:text-8xl font-bold text-primary mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Meet Moza.</h2>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
                Moza is our mascot. The relentless builder, the hacker, the sock-puppet that gets things done. Download and use these in your own presentations or projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mozas.map((moza, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl border border-white/10 p-4 flex flex-col group hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-square bg-black rounded-xl overflow-hidden relative mb-4 flex items-center justify-center">
                    <TransparentMoza 
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} 
                      src={moza.src} 
                      alt={`Moza ${moza.name}`} 
                      className="w-[120%] h-[120%] object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-white font-bold text-sm truncate pr-2">{moza.name}</span>
                    <a
                      href={moza.src}
                      download={`${moza.name.toLowerCase().replace(" ", "_")}_moza.jpeg`}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Moza;
