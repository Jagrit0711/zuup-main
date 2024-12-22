const Testimonials = () => {
  console.log('Rendering Testimonials section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Mission</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Be part of our journey to empower underprivileged youth through education and opportunity.
          Partner with us to create meaningful impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-900/30">
          <h3 className="text-2xl font-bold text-[#FF6D59] mb-4">For Job Partners</h3>
          <p className="text-gray-300 mb-4">
            Post freelance opportunities and connect with talented, trained youth who are ready 
            to contribute to your projects. Help create sustainable career paths while getting 
            quality work done.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-900/30">
          <h3 className="text-2xl font-bold text-[#FF6D59] mb-4">For Sponsors</h3>
          <p className="text-gray-300 mb-4">
            Support our mission to empower underprivileged youth through skill development and 
            job opportunities. Your partnership can help us reach more communities and create 
            lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;