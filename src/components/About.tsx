import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Youth Trained" },
  { icon: Briefcase, value: "150+", label: "Freelance Placements" },
  { icon: GraduationCap, value: "3", label: "Skill Programs" },
  { icon: Globe, value: "10+", label: "Partner NGOs" },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3 block">
            About Zuup
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            By Youth,{" "}
            <span className="text-gradient">For All Generations</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Zuup is a youth-led initiative by Zylon Labs, founded by 16-year-old Jagrit
            Sachdev, dedicated to empowering underprivileged youth through digital skill
            development and freelance opportunities.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We partner with NGOs across India to identify talented youth who lack access
            to digital education. Through structured training in video editing, graphic
            design, and coding, we help them build sustainable careers in the digital
            economy.
          </p>
        </motion.div>

        {/* Right — stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="glass-card rounded-xl p-6 text-center group hover:border-[hsl(var(--primary))]/30 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/10 mb-3">
                  <Icon size={20} className="text-[hsl(var(--primary))]" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
