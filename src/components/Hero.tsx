import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const AnimatedLogo = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <meshPhongMaterial color="#4299e1" />
    </mesh>
  );
};

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedLogo />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      <div className="relative z-20 text-center px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 mb-4 group">
            {/* Logo dots with animation */}
            <div className="flex transition-transform duration-300 group-hover:scale-110">
              <div className="w-4 h-4 rounded-full bg-[#ea384c] animate-pulse" />
              <div className="flex ml-2">
                <div className="w-4 h-4 rounded-full bg-[#4299e1] mr-1 animate-pulse delay-75" />
                <div className="w-4 h-4 rounded-full bg-[#4299e1] animate-pulse delay-150" />
              </div>
            </div>
            {/* Logo text with gradient */}
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1] transition-transform duration-300 group-hover:scale-110">
              zuup
            </h1>
          </div>
          
          {/* Accent rectangles with hover effect */}
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