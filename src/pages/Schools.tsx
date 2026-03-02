import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingBackground from "../components/FloatingBackground";
import { motion } from "framer-motion";
import { Download, Cpu, Users, Award, BookOpen, Trophy, Rocket, GraduationCap, Wrench, Globe, ChevronRight } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const curriculum = [
  { months: "1–2", title: "Foundations", desc: "Electronics basics, circuit theory, breadboarding, Ohm's Law, component identification", deliverable: "Functioning LED matrix project" },
  { months: "3–4", title: "Microcontrollers", desc: "Raspberry Pi Pico — GPIO, PWM, ADC, MicroPython, sensor interfacing", deliverable: "Temp/humidity station with OLED display" },
  { months: "5–6", title: "Wireless + IoT", desc: "ESP32 — Wi-Fi, BLE, MQTT protocol, cloud dashboards, real-time data", deliverable: "IoT sensor dashboard visible from any browser" },
  { months: "7", title: "PCB Design", desc: "KiCad basics, schematic capture, PCB layout, design rules, Gerber export", deliverable: "Custom PCB design sent for fabrication" },
  { months: "8", title: "Soldering + Build", desc: "SMD/THT soldering, testing, debugging, multimeter and oscilloscope skills", deliverable: "Fully assembled and tested custom PCB" },
  { months: "9", title: "Project Sprint", desc: "Full project ideation, bill of materials, prototype build, iteration and documentation", deliverable: "Working, documented hardware prototype" },
  { months: "10", title: "Demo + Compete + Publish", desc: "Presentation skills, research writing, pitch prep, interschool competition entry", deliverable: "Chapter showcase + national finale entry + research submission" },
];

const kitItems = [
  "Raspberry Pi Pico (RP2040)",
  "ESP32 Development Board",
  "Sensor + Module Pack (temp, humidity, PIR, OLED, servo, LEDs)",
  "PCB + Soldering Kit",
  "Zuup T-Shirt (chapter edition)",
  "Enamel Badge + Official Chapter Member ID",
  "10-Month LMS Access Code",
];

const stats = [
  { icon: Cpu, label: "Hardware Components", value: "15+" },
  { icon: Users, label: "Students per Chapter", value: "15–40" },
  { icon: BookOpen, label: "Months of Curriculum", value: "10" },
  { icon: Trophy, label: "Max Grant Value", value: "₹1,00,000" },
];

const steps = [
  { step: "01", title: "Express Interest", desc: "Contact via jagrit@zuup.dev or zuup.dev. A Zuup representative calls within 48 hours." },
  { step: "02", title: "Chapter Agreement", desc: "Simple one-page agreement. No multi-year lock-in. Your school is listed on the national Zuup directory." },
  { step: "03", title: "Chapter Launch Day", desc: "Students receive hardware kits, merch, and LMS credentials. Your Zuup Chapter is officially open." },
];

const Schools = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingBackground />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-6"
          >
            Zuup Chapters — School Club Program
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Real Engineering.{" "}
            <span className="text-primary">Real Hardware.</span>{" "}
            Real Futures.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A structured 10-month engineering club that gives students guided, hands-on experience with real electronics, microcontrollers, and hardware systems. Prepared for school principals — Class 6 to 12, pan-India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:jagrit@zuup.dev?subject=Zuup%20Chapters%20—%20School%20Interest"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Start a Chapter <ChevronRight size={16} />
            </a>
            <a
              href="/Zuup_Chapters.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <Download size={16} /> Download Brochure
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <Icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12"
          >
            <GraduationCap size={32} className="text-primary mb-6" />
            <blockquote className="text-xl sm:text-2xl font-bold text-foreground mb-6 leading-snug">
              "Teach real engineering. Ship real things. Build real futures."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed mb-4">
              India produces hundreds of thousands of engineering graduates every year who cannot debug a circuit, identify a capacitor, or write a line of embedded code without a tutorial. The gap begins in school.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A student who has programmed a Raspberry Pi Pico at age 13, debugged a floating GPIO pin at age 14, designed a PCB at age 15, and contributed to a published research paper at age 16 enters college fundamentally more capable than one who has a shelf of participation certificates from pitch competitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware Kit */}
      <section className="py-24 px-4 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Personal Hardware Kit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Every Student Keeps Their Kit</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Not the school's. Not the lab's. When the program ends, the kit goes home with the student. Ownership creates engagement that shared lab equipment never can.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {kitItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 flex items-start gap-3"
              >
                <Wrench size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">10-Month Curriculum</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">From Zero to Competition-Ready</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Each month builds on the last. No module is optional. Designed based on real sessions run at Bal Bharati Public School, Rohini.</p>
          </motion.div>
          <div className="space-y-4">
            {curriculum.map((c, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[80px_1fr_1fr] gap-4 items-start"
              >
                <div className="text-primary font-bold text-lg">M {c.months}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Deliverable</span>
                  <p className="text-foreground text-sm font-medium mt-1">{c.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Schools & Students Get */}
      <section className="py-24 px-4 bg-accent/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <Award size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-5">What Your School Gets</h3>
            <ul className="space-y-3">
              {[
                "Nationally recognized Zuup Chapter affiliation",
                "Listing in Zuup's national school directory",
                "Chapter branding materials and official signage",
                "Monthly student progress reports",
                "Research publications credited to your institution",
                "Priority hosting for regional competition events",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <Rocket size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-5">What Your Students Get</h3>
            <ul className="space-y-3">
              {[
                "Hardware kit they own permanently",
                "Training from vetted, compensated engineers",
                "10 months of structured technical curriculum",
                "Competition experience at school, regional & national level",
                "Research paper publishing pathway",
                "Grant funding access up to ₹1,00,000",
                "National Finale opportunity with sponsored travel",
                "Zuup Alumni network and international program eligibility",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Grand Finale */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center"
          >
            <Globe size={32} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">The Zuup Grand Finale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              A national engineering showcase where top-performing students from every chapter across India compete. Judged by practicing engineers, founders, technologists, and researchers. Not a science fair — a curated engineering showcase.
            </p>
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Sponsored Trip Guarantee</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If a student qualifies for the Grand Finale, Zuup covers 100% of travel costs — flights, accommodation, meals, and local transport. No conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-24 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">₹1,200/month — Every Rupee Accounted For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Annual student contribution of ₹12,000 covers hardware, mentors, LMS, competitions, and admin. No hidden costs.</p>
          </motion.div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 text-foreground font-semibold">Component</th>
                    <th className="text-right p-4 text-foreground font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {[
                    ["Raspberry Pi Pico + ESP32 + Full Sensor Pack", "₹3,800"],
                    ["PCB + Soldering Kit", "₹1,200"],
                    ["Zuup Merch (T-shirt + Badge + ID)", "₹600"],
                    ["10-Month LMS Access", "₹800"],
                    ["Monthly Mentor Visits", "₹2,800"],
                    ["Interschool Hackathon Entry", "₹800"],
                    ["National Finale + Research + Grant Eligibility", "Included"],
                    ["Program Operations + Admin", "₹1,000"],
                  ].map(([component, value], i) => (
                    <tr key={i} className="hover:bg-accent/30 transition-colors">
                      <td className="p-4 text-muted-foreground">{component}</td>
                      <td className="p-4 text-right text-foreground font-medium">{value}</td>
                    </tr>
                  ))}
                  <tr className="bg-primary/5">
                    <td className="p-4 text-foreground font-bold">Total per Student</td>
                    <td className="p-4 text-right text-primary font-bold">₹12,000/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Zuup Tools */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Zuup Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tools Built for Students</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every Zuup Chapter student gets free access to our developer tools — purpose-built for learning, building, and tracking progress.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <motion.a
              href="https://code.zuup.dev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 group hover:border-primary/30 transition-colors"
            >
              <Cpu size={28} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">ZuupCode</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">A free, browser-based IDE with real code execution. 30+ languages, instant results, zero setup. Built on Monaco Editor with cloud save and instant sharing.</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Open ZuupCode <ChevronRight size={14} /></span>
            </motion.a>
            <motion.a
              href="https://time.zuup.dev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 group hover:border-primary/30 transition-colors"
            >
              <Rocket size={28} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">ZuupTime</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Track your coding time for free. Open-source alternative to WakaTime with language stats, file-level insights, leaderboards, and full data ownership.</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Open ZuupTime <ChevronRight size={14} /></span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Three Steps. Two Weeks. Done.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <span className="text-4xl font-bold text-primary/20 block mb-4">{s.step}</span>
                <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:jagrit@zuup.dev?subject=Zuup%20Chapters%20—%20School%20Interest"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Contact Us to Start <ChevronRight size={16} />
            </a>
            <a
              href="/Zuup_Chapters.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card font-semibold text-foreground hover:bg-accent transition-colors"
            >
              <Download size={16} /> Download Full Brochure
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schools;
