import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center"
  >
    <span className="text-4xl md:text-5xl font-bold text-primary mb-1" style={{ fontFamily: "'Caveat', cursive" }}>{value}</span>
    <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest">{label}</span>
  </motion.div>
);

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-background pt-48 pb-16">
      
      {/* Soft Gradient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-[10%] left-[15%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-foreground max-w-5xl">
            What if everyone got a <span className="text-primary underline decoration-wavy decoration-primary/50 underline-offset-[8px]">chance?</span>
          </h1>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-6 text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mt-12 md:mt-24 mb-10 md:mb-12 tracking-tight">
            <span>A chance to learn.</span>
            <span className="hidden md:inline text-border">•</span>
            <span>A chance to build.</span>
            <span className="hidden md:inline text-border">•</span>
            <span>A chance to earn.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 md:mb-16 z-30 relative px-4 sm:px-0">
            <a
              href="/join"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-lg sm:text-xl rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              Join Zuup
              <ArrowRight size={20} />
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto px-8 py-4 bg-background text-foreground font-bold text-lg sm:text-xl rounded-xl border-2 border-dashed border-foreground hover:border-solid hover:bg-foreground hover:text-background transition-all flex items-center justify-center"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
            >
              Explore Programs
            </a>
          </div>

          {/* Elegant Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-24 w-full max-w-3xl mx-auto pt-8 md:pt-10 border-t border-border/40 relative z-20">
            <StatItem value="11K+" label="Total Users" />
            <StatItem value="3K+" label="Active Builders" />
            <StatItem value="3" label="Countries" />
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
