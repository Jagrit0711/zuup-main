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
  const {
    toast
  } = useToast();
  console.log('Rendering Index page');
  return <div className="min-h-screen bg-black">
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
              <span className="inline-block px-4 text-xl text-gray-50">Hiring State Heads visit https://zuup.fillout.com/CITY to apply </span>
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

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="contact">
        <Contact />
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="cta">
        <CallToAction />
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 flex justify-center items-center" id="gallery">
        <div className="max-w-2xl mx-auto bg-gray-900/80 rounded-xl shadow-md p-10 text-center flex flex-col gap-6 items-center">
          <h2 className="text-3xl font-extrabold text-white mb-3 flex items-center gap-2 justify-center">
            <span>Zuup Gallery</span>
          </h2>
          <p className="text-gray-300 mb-4">
            View community-uploaded images and videos from Zuup events, students, and partners.
          </p>
          <a href="https://zuupgallery.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-[#ea384c] to-[#4299e1] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105">
            Visit the Gallery
          </a>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-50">
        <elevenlabs-convai agent-id="T2IOvA5G9yIgmNJO5WZm"></elevenlabs-convai>
      </div>

      <Footer />
    </div>;
};
export default Index;