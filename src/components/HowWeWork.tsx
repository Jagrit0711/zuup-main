import { motion } from 'framer-motion';
import { Handshake, Users, Lightbulb, Briefcase, TrendingUp, Video, Palette, Code } from 'lucide-react';

const steps = [
  {
    title: "Partnership",
    description: "We partner with NGOs and organizations working with underprivileged youth to identify those with potential.",
    icon: Handshake,
  },
  {
    title: "Outreach",
    description: "Our team conducts awareness sessions about digital skills and the opportunities they unlock.",
    icon: Users,
  },
  {
    title: "Training",
    description: "Candidates receive free, structured training in video editing, graphic design, and coding.",
    icon: Lightbulb,
  },
  {
    title: "Placement",
    description: "We connect trained individuals with companies and teach them how to freelance independently.",
    icon: Briefcase,
  },
  {
    title: "Independence",
    description: "Our graduates become financially independent digital professionals — no charity needed.",
    icon: TrendingUp,
  },
];

const skills = [
  { icon: Video, title: "Video Editing", description: "Create professional video content" },
  { icon: Palette, title: "Graphic Design", description: "Design compelling visual content" },
  { icon: Code, title: "Coding", description: "Develop websites and applications" },
];

const HowWeWork = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How We Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A systematic approach to creating self-sufficient digital professionals from underprivileged backgrounds.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 text-center h-full hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="text-xs font-bold text-primary/60 mb-2">STEP {index + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {/* Arrow connector (hidden on mobile, hidden after last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/30 text-lg z-10">
                  →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Skills */}
      <motion.div
        className="glass-card-strong rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Skills We Teach</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border"
                whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default HowWeWork;
