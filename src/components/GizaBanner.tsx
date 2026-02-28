import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowRight } from "lucide-react";

const GizaBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("giza-banner-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("giza-banner-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

          {/* Popup */}
          <motion.div
            className="relative w-full max-w-lg rounded-3xl border border-border/50 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--background)) 60%, hsl(var(--accent)) 100%)",
              boxShadow: "0 0 60px hsl(var(--primary) / 0.15), inset 0 1px 0 hsl(255 100% 90% / 0.08)",
            }}
            initial={{ scale: 0.85, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors z-10"
              aria-label="Close banner"
            >
              <X size={18} />
            </button>

            <div className="p-8 sm:p-10 text-center">
              {/* Animated pin */}
              <motion.div
                className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <MapPin size={32} className="text-primary" />
              </motion.div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4">
                New Launch
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Zuup is launching in{" "}
                <span className="text-primary">Giza, Egypt 🇪🇬</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                We're expanding internationally! Join the Zuup movement in Giza and empower youth with real digital skills.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  href="https://giza.zuup.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Zuup Giza <ArrowRight size={16} />
                </motion.a>
                <button
                  onClick={dismiss}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors w-full sm:w-auto"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GizaBanner;
