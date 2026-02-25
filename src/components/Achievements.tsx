import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "SME Business of the Year Award Winner 2025",
    description: "Recognized as the outstanding SME business for innovative social impact and youth empowerment initiatives.",
    link: "https://www.greatcompanies.in/post/zuup-sme-business-of-the-year-award-winner-2025",
    icon: Trophy,
  },
  {
    title: "AI for Social Good Research Paper",
    description: "Published groundbreaking research on identifying and bridging freelance skill gaps in underprivileged communities using ML.",
    link: "https://doi.org/10.22214/ijraset.2025.73265",
    icon: Award,
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones that showcase our commitment to innovation and social impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md shadow-primary/15 hover:opacity-90 transition-opacity"
                  >
                    Learn More <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
