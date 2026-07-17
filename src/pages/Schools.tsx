import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { motion } from "framer-motion";
import { Download, ChevronRight, ExternalLink } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const curriculum = [
  { months: "1–2", title: "Foundations", desc: "Electronics basics, circuit theory, breadboarding, Ohm's Law.", deliverable: "Functioning LED matrix project" },
  { months: "3–4", title: "Microcontrollers", desc: "Raspberry Pi Pico — GPIO, PWM, ADC, MicroPython.", deliverable: "Temp/humidity station with OLED" },
  { months: "5–6", title: "Wireless + IoT", desc: "ESP32 — Wi-Fi, BLE, MQTT protocol, cloud dashboards.", deliverable: "IoT sensor dashboard" },
  { months: "7", title: "PCB Design", desc: "KiCad basics, schematic capture, PCB layout, design rules.", deliverable: "Custom PCB sent for fabrication" },
  { months: "8", title: "Build", desc: "SMD/THT soldering, testing, debugging, oscilloscopes.", deliverable: "Fully assembled custom PCB" },
  { months: "9", title: "Project Sprint", desc: "Full project ideation, prototype build, and documentation.", deliverable: "Working hardware prototype" },
];

const Schools = () => {
  return (
    <>
      <SEO 
        title="Schools Program — Zuup" 
        description="A structured 10-month engineering club for schools." 
        path="/schools" 
      />
      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative flex flex-col items-center justify-center text-center">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-10 w-[400px] h-[400px] opacity-40 pointer-events-none hidden md:block z-0"
        >
          <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozagreeting.jpeg" alt="School Hero Moza 1" className="w-full h-full object-contain mix-blend-screen" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 -right-10 w-[350px] h-[350px] opacity-30 pointer-events-none hidden lg:block z-0"
        >
          <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozateam.jpeg" alt="School Hero Moza 2" className="w-full h-full object-contain mix-blend-screen" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-8 relative z-10"
          style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
        >
          Real Engineering. <br/> <span className="text-primary underline decoration-wavy underline-offset-[12px]">Real Futures.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl leading-relaxed mx-auto relative z-10"
        >
          A structured 10-month engineering club that gives students guided, hands-on experience with real software development, hackathons, and hardware systems.
        </motion.p>
      </section>

      {/* Massive Stats Banner */}
      <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            { label: "Hardware Components", value: "15+" },
            { label: "Students per Chapter", value: "15–40" },
            { label: "Months of Curriculum", value: "10" },
            { label: "Max Grant Value", value: "₹1,00,000" },
          ].map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center px-4"
            >
              <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{s.value}</p>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-24 px-4 relative z-10">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-20 w-[250px] h-[250px] opacity-20 pointer-events-none hidden md:block z-0"
        >
          <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozawithmagnifiyingglass.jpeg" alt="Magnifying Glass Moza" className="w-full h-full object-contain mix-blend-screen" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-snug"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            "Teach real engineering. <span className="text-primary">Ship real things.</span> Build real futures."
          </motion.blockquote>
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
            India produces hundreds of thousands of engineering graduates every year who cannot debug a circuit or write a line of embedded code without a tutorial. <span className="text-white">The gap begins in school.</span> A student who has programmed a Raspberry Pi Pico at age 13 and shipped a full-stack app at 14 enters college fundamentally more capable.
          </p>
        </div>
      </section>

      {/* Hardware Kit Poster */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black group min-h-[500px] flex items-center">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
              style={{ backgroundImage: `url(/mozacodin.jpeg)`, clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent pointer-events-none" />
            
            <div className="relative z-10 p-6 md:p-16 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary mb-6 border border-primary/30">
                Personal Hardware Kit
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Every Student Keeps Their Kit</h2>
              <p className="text-xl text-white/80 mb-8 font-medium">Not the school's. Not the lab's. When the program ends, the kit goes home with the student. Ownership creates engagement that shared lab equipment never can.</p>
              
              <ul className="space-y-3">
                {[
                  "Raspberry Pi Pico (RP2040)",
                  "ESP32 Development Board",
                  "Sensor + Module Pack (OLED, PIR, Servo)",
                  "PCB + Soldering Kit",
                  "Zuup T-Shirt (Chapter Edition)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>10-Month Curriculum</h2>
            <p className="text-xl text-muted-foreground font-medium">From zero to competition-ready. No module is optional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((c, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-[2rem] p-8 border border-white/10 hover:border-primary/50 transition-colors bg-white/5"
              >
                <div className="text-4xl font-bold text-primary mb-4" style={{ fontFamily: "'Caveat', cursive" }}>Month {c.months}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-muted-foreground font-medium mb-6">{c.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Deliverable</span>
                  <p className="text-white font-semibold">{c.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing and Final CTA */}
      <section className="py-24 px-4 relative z-10 bg-accent/20 border-t border-white/5">
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-[300px] h-[300px] opacity-20 pointer-events-none hidden lg:block z-0"
        >
          <TransparentMoza style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }} src="/mozatreasure.jpeg" alt="Treasure Moza" className="w-full h-full object-contain mix-blend-screen" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Transparent Pricing</h2>
          <p className="text-2xl text-white font-bold mb-12">₹12,000/year per student <span className="text-muted-foreground font-medium text-xl block mt-2">(₹1,200/month)</span></p>
          
          <div className="glass-card rounded-[2rem] p-8 text-left border border-white/10 mb-16">
            <p className="text-muted-foreground font-medium text-lg leading-relaxed text-center mb-6">
              Covers full hardware kits, 10 months of LMS access, monthly mentor visits, competition entries, and Zuup merch. <strong className="text-white">No hidden costs. Every rupee accounted for.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:jagrit@zuup.dev?subject=Zuup%20Chapters%20—%20School%20Interest"
              className="inline-flex justify-center items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.3)] transition-all"
            >
              Start a Chapter <ChevronRight size={24} />
            </a>
            <a
              href="/Zuup_Chapters.pdf"
              download
              className="inline-flex justify-center items-center gap-3 px-10 py-5 glass-card text-white font-bold text-xl rounded-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all border border-white/20"
            >
              <Download size={24} /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Schools;
