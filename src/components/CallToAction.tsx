import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-3xl glass-card-strong p-10 md:p-16 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Ready to Start <span className="text-primary">Your Journey?</span>
        </h2>
        <p className="relative text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          Join Zuup and take the first step towards a thriving digital career.
          No donations needed — just your determination.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
          <a
            href="#contact"
            className="px-8 py-3.5 glass-card text-foreground font-semibold rounded-xl hover:shadow-md transition-all"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
