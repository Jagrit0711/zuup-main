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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Our Mission</h3>
            <p className="text-gray-400">
              We're bridging the digital divide by providing free training in graphic design, 
              video editing, and coding to individuals who may not have access to such resources. 
              Our goal is to create lasting social change through digital education.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">What Sets Us Apart</h3>
            <p className="text-gray-400">
              Unlike traditional profit-focused ventures, Zuup focuses on creating sustainable 
              impact. We connect our trained individuals with real-world freelance opportunities, 
              ensuring they can build sustainable careers.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Our Impact</h3>
            <p className="text-gray-400">
              Through partnerships with nonprofits and sponsors, we're expanding our reach to 
              help more underprivileged youth, students, and senior citizens access quality 
              digital education and opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ea384c]/10 to-[#4299e1]/5 p-6 rounded-lg border border-[#4299e1]/20">
          <h3 className="text-2xl font-bold mb-4 text-[#4299e1]">Meet Our Teen Founder</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              At just 16, Jagrit Sachdev is revolutionizing digital education through Zuup. 
              As the founder of Zylon Labs, he's proving that age is no barrier to creating 
              meaningful social impact.
            </p>
            <p className="mb-4">
              "I believe that digital skills and opportunities should be accessible to everyone, 
              regardless of their background. Through Zuup, we're not just teaching skills - 
              we're empowering people to build better futures."
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#ea384c]"></div>
                <span>Founder & CEO, Zylon Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Teen Social Entrepreneur</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Digital Education Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;