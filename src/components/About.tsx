const About = () => {
  console.log('Rendering About section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E5DEFF] to-[#D6BCFA]">
            By Teens, For Teens
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're a group of passionate teenagers on a mission to make digital skills and 
          opportunities accessible to every young person, regardless of their background.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#E5DEFF]">Teen-Led Innovation</h3>
            <p className="text-gray-400">
              Founded by 15-year-old Jagrit Sachdev, we understand what teenagers need 
              because we're teenagers ourselves! We speak your language and know exactly 
              what it takes to succeed in today's digital world.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#E5DEFF]">Why We're Different</h3>
            <p className="text-gray-400">
              We're not just another educational platform - we're your peers who've been 
              through the same journey. Our approach is fun, relatable, and designed 
              specifically for young minds.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#E5DEFF]">Our Promise</h3>
            <p className="text-gray-400">
              We're committed to making digital skills accessible to every teenager. 
              Whether you're into graphic design, video editing, or coding, we've got 
              your back with practical training and real job opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#E5DEFF]/10 to-[#D6BCFA]/5 p-6 rounded-lg border border-[#E5DEFF]/20">
          <h3 className="text-2xl font-bold mb-4 text-[#E5DEFF]">Meet Our Teen Founder</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              At just 15, Jagrit Sachdev is redefining what teenagers can achieve. As the 
              founder and CEO of Zylon Labs, he's proving that age is just a number when 
              it comes to making a difference.
            </p>
            <p className="mb-4">
              "I believe every teenager deserves the chance to learn digital skills and 
              build a better future. We're here to make that happen, one skill at a time."
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#E5DEFF]"></div>
                <span>House Captain at Bal Bharati Public School</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#E5DEFF]"></div>
                <span>Tech Enthusiast & Designer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#E5DEFF]"></div>
                <span>Passionate about Youth Empowerment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;