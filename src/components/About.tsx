const About = () => {
  console.log('Rendering About section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We visit orphanages and NGOs to teach underprivileged kids valuable digital skills 
          like graphic design, video editing, and coding. We then connect them with our job 
          partners who post freelance opportunities on our platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Vision</h3>
            <p className="text-gray-400">
              To create a world where talent knows no boundaries and opportunity is accessible to all.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Mission</h3>
            <p className="text-gray-400">
              Empowering underprivileged youth through skill development and connecting them 
              with meaningful freelance opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Approach</h3>
            <p className="text-gray-400">
              We provide hands-on training in digital skills and connect our students 
              with carefully vetted freelance opportunities from our job partners.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-[#FF6D59]">About the Founder</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              Jagrit Sachdev is a passionate young entrepreneur, innovator, and student balancing 
              academics and business ventures with remarkable dedication. As the founder and CEO 
              of Zylon Labs, he leads multiple divisions focusing on edtech, quick commerce, 
              AI-driven solutions, and creative services.
            </p>
            <p className="mb-4">
              At just 15, he has successfully developed impactful projects like Zylon Edtech, 
              an ad-free educational platform, and Dvorak, an AI-powered security system.
            </p>
            <p>
              Beyond entrepreneurship, Jagrit is a tech enthusiast, designer, and student leader, 
              serving as the House Captain at Bal Bharati Public School, Rohini. Driven by curiosity 
              and ambition, he aims to inspire and create meaningful change through his work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;