const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6D59] to-orange-400">
          Zuup
        </h1>
        <p className="text-2xl mb-8 text-white">A Zylon Labs Initiative</p>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Empowering underprivileged youth through skill development and freelance opportunities
        </p>
      </div>
    </div>
  );
};

export default Hero;