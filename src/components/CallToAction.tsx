import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/15 via-black to-[hsl(var(--secondary))]/10 border border-white/10 p-10 md:p-16 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] pointer-events-none" />

        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Start <span className="text-gradient">Your Journey?</span>
        </h2>
        <p className="relative text-gray-400 max-w-xl mx-auto mb-8 text-lg">
          Join Zuup today and take the first step towards a successful digital career.
          We're here to support you every step of the way.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
          <a
            href="#contact"
            className="px-8 py-3.5 glass-card text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
