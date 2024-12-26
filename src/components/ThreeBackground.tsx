import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log('ThreeBackground component mounted');

  useEffect(() => {
    if (!containerRef.current) return;
    console.log('Setting up Three.js scene');

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles for galaxy
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 15000;
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Generate galaxy shape
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create spiral galaxy effect
      const radius = Math.random() * 20;
      const spinAngle = radius * 2;
      const branchAngle = (Math.PI * 2 / 3) * Math.floor(Math.random() * 3);

      const x = Math.cos(branchAngle + spinAngle) * radius;
      const y = (Math.random() - 0.5) * 3;
      const z = Math.sin(branchAngle + spinAngle) * radius;

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      // Color variation (blue, purple, white)
      const color = new THREE.Color();
      const colorChoice = Math.random();
      
      if (colorChoice < 0.3) {
        color.setHSL(0.6, 0.8, 0.8); // Blue
      } else if (colorChoice < 0.6) {
        color.setHSL(0.75, 0.8, 0.8); // Purple
      } else {
        color.setHSL(0, 0, 1); // White
      }

      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 25;
    camera.position.y = 5;
    camera.lookAt(0, 0, 0);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement
      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      particlesMesh.rotation.y = elapsedTime * 0.05 + targetX;
      particlesMesh.rotation.x = targetY * 0.3;

      // Gentle wave animation
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] += Math.sin(elapsedTime + x + z) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      console.log('Cleaning up Three.js scene');
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default ThreeBackground;