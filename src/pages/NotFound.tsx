import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routes } from "@/routes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";

const NotFound = () => {
  return (
    <>
      <SEO title="404 — Not Found | Zuup" noindex={true} />

      <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Massive 404 Text Background */}
            <h1 
              className="text-[25vw] md:text-[20rem] font-bold text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.05em" }}
            >
              404
            </h1>

            {/* Floating Moza */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 h-64 md:w-96 md:h-96 mx-auto"
            >
              <TransparentMoza src="/moza-floating-inverted.png" alt="Lost Moza" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 relative z-10 max-w-3xl"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            You're discovering more than <span className="text-primary underline decoration-wavy underline-offset-[8px]">what we made.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground font-medium mb-12 relative z-10"
          >
            This page doesn't exist. But you can build it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative z-10"
          >
            <Link 
              to={routes.home}
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-bold text-xl rounded-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.3)] transition-all"
            >
              Go Back Home
            </Link>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
