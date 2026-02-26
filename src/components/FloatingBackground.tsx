import { motion } from "framer-motion";

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large glowing orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{ top: '-10%', left: '-15%', background: 'radial-gradient(circle, hsl(348 83% 55% / 0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, 100, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{ top: '40%', right: '-10%', background: 'radial-gradient(circle, hsl(210 100% 60% / 0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ bottom: '-5%', left: '25%', background: 'radial-gradient(circle, hsl(348 83% 55% / 0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, 70, -40, 0], y: [0, -50, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{ top: '60%', left: '-5%', background: 'radial-gradient(circle, hsl(210 100% 60% / 0.07) 0%, transparent 70%)' }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{ top: '10%', right: '15%', background: 'radial-gradient(circle, hsl(280 80% 60% / 0.06) 0%, transparent 70%)' }}
        animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 3) * 2}px`,
            height: `${2 + (i % 3) * 2}px`,
            top: `${8 + i * 7.5}%`,
            left: `${5 + (i * 8) % 90}%`,
            background: i % 2 === 0 ? 'hsl(348 83% 55% / 0.4)' : 'hsl(210 100% 60% / 0.3)',
          }}
          animate={{
            y: [0, -40 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Diagonal light streaks */}
      <motion.div
        className="absolute w-[1px] h-[300px] origin-top"
        style={{
          top: '5%', left: '20%',
          background: 'linear-gradient(180deg, hsl(348 83% 55% / 0.15) 0%, transparent 100%)',
          transform: 'rotate(25deg)',
        }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[1px] h-[250px] origin-top"
        style={{
          top: '30%', right: '25%',
          background: 'linear-gradient(180deg, hsl(210 100% 60% / 0.12) 0%, transparent 100%)',
          transform: 'rotate(-20deg)',
        }}
        animate={{ opacity: [0.05, 0.25, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
};

export default FloatingBackground;
