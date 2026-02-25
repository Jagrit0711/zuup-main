import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DonationSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="glass-card-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 relative"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flame className="h-8 w-8 text-primary" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 relative">
          We Don't Believe in{" "}
          <span className="text-primary">Donations</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-4 text-lg leading-relaxed relative">
          Charity creates dependency. We create{" "}
          <span className="font-semibold text-foreground">capability</span>.
        </p>

        <p className="text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed relative">
          Instead of asking for money, we invest in people — giving them skills to
          earn, compete, and thrive in the digital economy on their own terms.
          Every person we train becomes self-sufficient, not dependent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Read Our Story <ArrowRight size={18} />
          </Link>
          <a
            href="#how-we-work"
            className="px-8 py-3.5 glass-card text-foreground font-semibold rounded-xl hover:shadow-md transition-all"
          >
            See How We Work
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationSection;
