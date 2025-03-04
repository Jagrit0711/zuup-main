
const About = () => {
  console.log('Rendering About section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]">
            By Youth, For All Generations
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Zuup is a youth-led initiative by Zylon Labs, founded by 16-year-old Jagrit Sachdev, 
          dedicated to empowering underprivileged youth through digital skill development and 
          freelance opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
