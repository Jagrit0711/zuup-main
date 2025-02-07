
import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <ThreeBackground />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <motion.div 
            className="mb-4 group cursor-pointer relative"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#ea384c]/20 via-[#4299e1]/20 to-[#ea384c]/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img 
              src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
              alt="Zuup Logo"
              className="h-40 w-auto relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          
          <div className="flex space-x-2 mb-6">
            <motion.div 
              className="w-12 h-2 bg-[#fcd34d] rounded"
              whileHover={{ width: "5rem", backgroundColor: "#fbbf24" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.div 
              className="w-12 h-2 bg-[#4ade80] rounded"
              whileHover={{ width: "5rem", backgroundColor: "#34d399" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>

          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-white font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A Zylon Labs Initiative
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering underprivileged youth through skill development and freelance opportunities
          </motion.p>

          <motion.div
            className="mt-12 p-8 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-[#ea384c]/20 to-[#4299e1]/20 rounded-lg blur"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.p className="relative text-xl md:text-2xl text-gray-200 italic font-serif leading-relaxed">
                "Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime"
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Added new decorative elements */}
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-4 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="h-24 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ["0 0 0 rgba(168, 85, 247, 0.4)", "0 0 20px rgba(168, 85, 247, 0.2)", "0 0 0 rgba(168, 85, 247, 0.4)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-24 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ["0 0 0 rgba(59, 130, 246, 0.4)", "0 0 20px rgba(59, 130, 246, 0.2)", "0 0 0 rgba(59, 130, 246, 0.4)"],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="h-24 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ["0 0 0 rgba(16, 185, 129, 0.4)", "0 0 20px rgba(16, 185, 129, 0.2)", "0 0 0 rgba(16, 185, 129, 0.4)"],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white/50 text-sm flex flex-col items-center"
        >
          <span>Scroll to explore</span>
          <svg
            className="w-6 h-6 mt-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
