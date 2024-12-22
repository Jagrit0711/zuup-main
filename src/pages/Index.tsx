import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import { useToast } from '../components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  console.log('Rendering Index page');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Hero />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6D59] to-orange-400">
              Zuup
            </h1>
            <p className="text-2xl mb-8">A Zylon Labs Initiative</p>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Empowering underprivileged kids through freelancing opportunities
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="about">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default Index;