import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

const About = () => {
  console.log('Rendering About section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're on a mission to bridge the gap between talented underprivileged youth
          and meaningful freelance opportunities. Through Zuup, we're creating a
          platform that empowers the next generation of digital professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="h-[400px] relative">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: true
            }}
            dpr={1}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <group>
                <mesh>
                  <boxGeometry args={[2, 1.2, 0.1]} />
                  <meshStandardMaterial color="#FF6D59" />
                </mesh>
              </group>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="space-y-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Vision</h3>
            <p className="text-gray-400">
              To create a world where talent knows no boundaries and opportunity is accessible to all.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Mission</h3>
            <p className="text-gray-400">
              Connecting underprivileged youth with quality freelance opportunities
              while providing the training and support they need to succeed.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#FF6D59]">Our Impact</h3>
            <p className="text-gray-400">
              Every successful project on Zuup directly contributes to empowering
              young talents and building sustainable careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;