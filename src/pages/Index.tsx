import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ThreePillars from '../components/ThreePillars';
import ZuupEcosystem from '../components/ZuupEcosystem';
import StudentJourney from '../components/StudentJourney';
import StorySection from '../components/StorySection';
import FutureVision from '../components/FutureVision';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <SEO 
        title="Zuup — We build builders." 
        description="Zuup is a nonprofit empowering youth through tech, counseling, and community building." 
        path="/" 
      />
      <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 3. Three Pillars */}
      <ThreePillars />
      
      {/* 4. Zuup Ecosystem */}
      <ZuupEcosystem />
      
      {/* 5. Student Journey Timeline */}
      <StudentJourney />
      
      {/* 6. Story & Testimonials */}
      <StorySection />
      
      {/* 7. Future Section */}
      <FutureVision />
      
      {/* 9. Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default Index;
