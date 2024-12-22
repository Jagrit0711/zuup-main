import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="flex items-center space-x-3 mb-4 group">
            <motion.div 
              className="flex"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-4 h-4 rounded-full bg-[#ea384c] animate-pulse" />
              <div className="flex ml-2">
                <div className="w-4 h-4 rounded-full bg-[#4299e1] mr-1 animate-pulse delay-75" />
                <div className="w-4 h-4 rounded-full bg-[#4299e1] animate-pulse delay-150" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              zuup
            </motion.h1>
          </div>
          
          <div className="flex space-x-2 mb-6">
            <motion.div 
              className="w-12 h-2 bg-yellow-400 rounded"
              whileHover={{ width: "5rem", backgroundColor: "#fcd34d" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.div 
              className="w-12 h-2 bg-green-400 rounded"
              whileHover={{ width: "5rem", backgroundColor: "#4ade80" }}
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
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="px-8 py-3 bg-[#ea384c] text-white rounded-full font-medium hover:bg-[#d42d3d] transition-colors duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#4299e1] text-white rounded-full font-medium hover:bg-[#4299e1]/10 transition-colors duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;