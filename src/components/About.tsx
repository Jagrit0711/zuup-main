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
          We're a group of passionate teenagers on a mission to make digital skills and 
          opportunities accessible to everyone, from underprivileged teens to senior citizens, 
          regardless of their background or age.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Youth-Led Innovation</h3>
            <p className="text-gray-400">
              Founded by 16-year-old Jagrit Sachdev, we understand that digital skills know no age limit. 
              We're here to bridge the generational gap and make technology accessible to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Why We're Different</h3>
            <p className="text-gray-400">
              We're not just another educational platform - we're a community that brings together 
              different generations. Our approach is inclusive, patient, and designed for learners 
              of all ages and backgrounds.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#4299e1]">Our Promise</h3>
            <p className="text-gray-400">
              We're committed to making digital skills accessible to everyone. Whether you're a teenager 
              looking to start your career or a senior citizen wanting to stay connected in the digital 
              age, we've got your back with practical training and real opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ea384c]/10 to-[#4299e1]/5 p-6 rounded-lg border border-[#4299e1]/20">
          <h3 className="text-2xl font-bold mb-4 text-[#4299e1]">Meet Our Teen Founder</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              At just 16, Jagrit Sachdev is redefining what inclusive digital education looks like. 
              As the founder and CEO of Zylon Labs, he's proving that age is just a number when it 
              comes to making a difference.
            </p>
            <p className="mb-4">
              "I believe everyone deserves the chance to learn digital skills and build a better future, 
              regardless of their age or background. We're here to make that happen, one skill at a time."
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#ea384c]"></div>
                <span>CEO & Founder, Zylon Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Young Genius Award 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4299e1]"></div>
                <span>Champion of Digital Inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;