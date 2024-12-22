import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const AnimatedLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshStandardMaterial color="#4299e1" metalness={0.5} roughness={0.5} />
      </mesh>

      <mesh position={[-1.5, 0, 0]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#ea384c" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[1, 0.5, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#4299e1" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[1.5, -0.5, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#4299e1" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <AnimatedLogo />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-20 text-center px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center space-x-3 mb-4 group">
            <div className="flex transition-transform duration-300 group-hover:scale-110">
              <div className="w-4 h-4 rounded-full bg-[#ea384c] animate-pulse" />
              <div className="flex ml-2">
                <div className="w-4 h-4 rounded-full bg-[#4299e1] mr-1 animate-pulse delay-75" />
                <div className="w-4 h-4 rounded-full bg-[#4299e1] animate-pulse delay-150" />
              </div>
            </div>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1] transition-transform duration-300 group-hover:scale-110">
              zuup
            </h1>
          </div>
          
          <div className="flex space-x-2 mb-4">
            <div className="w-12 h-2 bg-yellow-400 rounded transition-all duration-300 hover:w-16 hover:bg-yellow-300" />
            <div className="w-12 h-2 bg-green-400 rounded transition-all duration-300 hover:w-16 hover:bg-green-300" />
          </div>
        </div>
        
        <p className="text-2xl mb-8 text-white font-light">A Zylon Labs Initiative</p>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Empowering underprivileged youth through skill development and freelance opportunities
        </p>
      </div>
    </div>
  );
};

export default Hero;