import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Globe, Heart, Zap, Shield, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Youth Trained" },
  { icon: Briefcase, value: "150+", label: "Freelance Placements" },
  { icon: GraduationCap, value: "3", label: "Skill Programs" },
  { icon: Globe, value: "10+", label: "Partner NGOs" },
];

const values = [
  {
    icon: Heart,
    title: "Empowerment Over Charity",
    description: "We don't hand out fish — we teach people to fish. Every programme is designed to create self-sufficient professionals, not dependents.",
  },
  {
    icon: Zap,
    title: "Real Skills, Real Income",
    description: "Video editing, graphic design, coding — our trainees learn industry-ready skills and start earning within weeks of completing the programme.",
  },
  {
    icon: Shield,
    title: "Youth-Led Movement",
    description: "Founded by a 16-year-old, Zuup is proof that age is no barrier. Our team of young leaders understands the communities we serve.",
  },
  {
    icon: Target,
    title: "Research-Backed Approach",
    description: "Our AI-powered skill-gap analysis, published in IJRASET, ensures every trainee gets a personalised pathway to financial independence.",
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            About Zuup
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
            By Youth, For All Generations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zuup is a youth-led initiative by Zylon Labs, dedicated to empowering underprivileged youth through digital skill
            development and freelance opportunities.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed mb-4">
            We partner with NGOs across India to identify talented youth who lack access
            to digital education. Through structured training in video editing, graphic
            design, and coding, we help them build sustainable careers in the digital
            economy.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed">
            Our mission is simple: replace dependency with capability. Every person we
            train becomes a self-sufficient digital professional who can compete in the
            global freelance market — no handouts, no charity, just real skills and real
            opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          What Drives Us
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Our Core Values
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {values.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
