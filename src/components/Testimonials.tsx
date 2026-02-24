import { motion } from "framer-motion";
import { Handshake, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Handshake,
    title: "For Job Partners",
    description:
      "Post freelance opportunities and connect with talented, trained youth who are ready to contribute to your projects. Help create sustainable career paths while getting quality work done.",
    cta: "Partner With Us",
    href: "#contact",
  },
  {
    icon: HeartHandshake,
    title: "For Sponsors",
    description:
      "Support our mission to empower underprivileged youth through skill development and job opportunities. Your partnership can help us reach more communities and create lasting impact.",
    cta: "Become a Sponsor",
    href: "#donate",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--secondary))] mb-3 block">
          Get Involved
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Join Our Mission
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Be part of our journey to empower underprivileged youth through education
          and opportunity. Partner with us to create meaningful impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:border-[hsl(var(--primary))]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{card.description}</p>
              <a
                href={card.href}
                className="inline-flex items-center text-sm font-semibold text-[hsl(var(--primary))] hover:underline underline-offset-4 transition-all"
              >
                {card.cta} →
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
