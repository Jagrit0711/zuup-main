import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import DonationSection from '../components/DonationSection';
import { useToast } from '../components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  console.log('Rendering Index page');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative">
        <Hero />
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="about">
        <About />
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="features">
        <Features />
      </section>

      <section className="py-20 bg-black" id="testimonials">
        <Testimonials />
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="donate">
        <DonationSection />
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="contact">
        <Contact />
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="cta">
        <CallToAction />
      </section>

      <Footer />
    </div>
  );
};

export default Index;