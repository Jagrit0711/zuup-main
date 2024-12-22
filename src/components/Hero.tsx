const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      <div className="relative z-20 text-center px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Large Logo */}
          <div className="flex items-center space-x-3 mb-4">
            {/* Logo dots */}
            <div className="flex">
              <div className="w-4 h-4 rounded-full bg-[#ea384c]" /> {/* Red dot */}
              <div className="flex ml-2">
                <div className="w-4 h-4 rounded-full bg-[#4299e1] mr-1" /> {/* Blue dot */}
                <div className="w-4 h-4 rounded-full bg-[#4299e1]" /> {/* Blue dot */}
              </div>
            </div>
            {/* Logo text */}
            <h1 className="text-6xl font-bold text-white">zuup</h1>
          </div>
          
          {/* Accent rectangles */}
          <div className="flex space-x-2 mb-4">
            <div className="w-12 h-2 bg-yellow-400 rounded" />
            <div className="w-12 h-2 bg-green-400 rounded" />
          </div>
        </div>
        
        <p className="text-2xl mb-8 text-white">A Zylon Labs Initiative</p>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Empowering underprivileged youth through skill development and freelance opportunities
        </p>
      </div>
    </div>
  );
};

export default Hero;