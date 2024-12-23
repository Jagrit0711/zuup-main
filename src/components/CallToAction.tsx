const CallToAction = () => {
  console.log('Rendering CallToAction section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 md:p-12 backdrop-blur-sm border border-secondary/20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join Zuup today and take the first step towards a successful freelancing career.
            We're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;