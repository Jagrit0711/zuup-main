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
import Achievements from '../components/Achievements';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FamilyCheckerPopup />
      <InstallPrompt />
      
      <section className="relative">
        <Hero />
      </section>

      {/* Marquee Notice */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4 overflow-hidden border-y border-white/5">
        <div className="container mx-auto">
          <div className="relative">
            <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap">
              <span className="inline-block px-4 text-lg text-gray-300 font-medium">
                🚀 Hiring State Heads — visit <a href="/apply" className="text-[hsl(var(--primary))] underline underline-offset-4 hover:opacity-80">zuup.fillout.com/CITY</a> to apply
              </span>
            </div>
          </div>
        </div>
      </section>

      <motion.section className="py-24 bg-gradient-to-b from-black to-gray-900" id="about"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <About />
      </motion.section>

      <motion.section className="py-24 bg-gradient-to-b from-gray-900 to-black" id="how-we-work"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <HowWeWork />
      </motion.section>

      {/* Gallery CTA */}
      <motion.section className="py-24 bg-gradient-to-b from-black to-gray-900" id="gallery"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Zuup Gallery</h2>
          <p className="text-gray-400 mb-6">View images and videos from Zuup events</p>
          <a href="https://zuupgallery.lovable.app/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold px-8 py-3 rounded-lg transition-all hover:opacity-90 hover:scale-105">
            Visit the Gallery
          </a>
        </div>
      </motion.section>

      <motion.section className="py-24 bg-black" id="testimonials"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Testimonials />
      </motion.section>

      <Achievements />

      <motion.section className="py-24 bg-gradient-to-b from-black to-gray-900" id="donate"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <DonationSection />
      </motion.section>

      <motion.section className="py-24 bg-gradient-to-b from-black to-gray-900" id="contact"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Contact />
      </motion.section>

      <motion.section className="py-24 bg-gradient-to-b from-black to-gray-900" id="cta"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <CallToAction />
      </motion.section>

      <div className="fixed bottom-4 right-4 z-50">
        <elevenlabs-convai agent-id="T2IOvA9yIgmNJO5WZm"></elevenlabs-convai>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
