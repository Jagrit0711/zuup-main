import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GizaBanner from '../components/GizaBanner';
import About from '../components/About';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import DonationSection from '../components/DonationSection';
import InstallPrompt from '../components/InstallPrompt';
import Achievements from '../components/Achievements';
import PhotoScroller from '../components/PhotoScroller';
import FloatingBackground from '../components/FloatingBackground';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingBackground />
      <Navbar />
      <GizaBanner />
      <InstallPrompt />

      <section className="relative">
        <Hero />
      </section>

      {/* Marquee Notice */}
      <section className="relative bg-accent py-4 overflow-hidden border-y border-border">
        <div className="container mx-auto">
          <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap">
            <span className="inline-block px-4 text-base text-muted-foreground font-medium">
              🚀 Hiring State Heads — visit{" "}
              <a href="/apply" className="text-primary underline underline-offset-4 hover:opacity-80">
                zuup.fillout.com/CITY
              </a>{" "}
              to apply
            </span>
          </div>
        </div>
      </section>

      <motion.section
        className="py-24" id="about"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <About />
      </motion.section>

      <motion.section
        className="py-24 bg-accent/30" id="how-we-work"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <HowWeWork />
      </motion.section>

      <motion.section
        className="py-24" id="photos"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <PhotoScroller />
      </motion.section>

      <motion.section
        className="py-24 bg-accent/30" id="testimonials"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <Testimonials />
      </motion.section>

      <Achievements />

      <motion.section
        className="py-24" id="philosophy"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <DonationSection />
      </motion.section>

      <motion.section
        className="py-24 bg-accent/30" id="contact"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      <motion.section
        className="py-24" id="cta"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <CallToAction />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
