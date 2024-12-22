const Testimonials = () => {
  console.log('Rendering Testimonials section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from our community members who have transformed their lives through Zuup.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard
          name="Sarah Johnson"
          role="Web Developer"
          quote="Zuup gave me the opportunity to learn web development and start my freelancing career. Now I work with clients globally!"
        />
        <TestimonialCard
          name="Michael Chen"
          role="Digital Marketing Specialist"
          quote="The mentorship and support I received through Zuup helped me build a successful digital marketing business."
        />
        <TestimonialCard
          name="Priya Patel"
          role="UI/UX Designer"
          quote="Thanks to Zuup's training programs, I transformed my passion for design into a thriving freelance career."
        />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, quote }: { name: string; role: string; quote: string }) => (
  <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-900/30">
    <p className="text-gray-300 mb-4 italic">&quot;{quote}&quot;</p>
    <div>
      <p className="text-[#FF6D59] font-semibold">{name}</p>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  </div>
);

export default Testimonials;