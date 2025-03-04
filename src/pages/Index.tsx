
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import DonationSection from '../components/DonationSection';
import FamilyCheckerPopup from '../components/FamilyCheckerPopup';
import InstallPrompt from '../components/InstallPrompt';
import { useToast } from '../components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  console.log('Rendering Index page');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FamilyCheckerPopup />
      <InstallPrompt />
      
      <section className="relative">
        <Hero />
      </section>

      <section className="bg-gradient-to-r from-gray-900 to-black py-4 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Notices</h2>
          <div className="relative">
            <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap">
              <span className="text-xl text-red-500 inline-block px-4">
                ⚠️ All operations are delayed until March 2025 ⚠️
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="about">
        <About />
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="how-we-work">
        <HowWeWork />
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="features">
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

      <div className="fixed bottom-4 right-4 z-50">
        <elevenlabs-convai agent-id="T2IOvA5G9yIgmNJO5WZm"></elevenlabs-convai>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
