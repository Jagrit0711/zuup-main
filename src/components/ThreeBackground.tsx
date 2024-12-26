import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create galaxy particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 25000; // Increased for more stars
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    // Create galaxy shape with multiple arms
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create spiral galaxy effect with multiple arms
      const radius = Math.random() * 30;
      const spinAngle = radius * 2.5;
      const branchAngle = ((Math.PI * 2) / 4) * Math.floor(Math.random() * 4); // 4 spiral arms
      const randomOffset = (Math.random() - 0.5) * (3 - radius / 5) * 0.3;

      const x = Math.cos(branchAngle + spinAngle) * radius + randomOffset;
      const y = (Math.random() - 0.5) * 2 + randomOffset;
      const z = Math.sin(branchAngle + spinAngle) * radius + randomOffset;

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      // Create color variation (blues, purples, and whites)
      const mixedColor = new THREE.Color();
      const color1 = new THREE.Color(0x4299e1); // Blue
      const color2 = new THREE.Color(0x9f7aea); // Purple
      const color3 = new THREE.Color(0xffffff); // White

      const randomColor = Math.random();
      if (randomColor < 0.3) {
        mixedColor.copy(color1);
      } else if (randomColor < 0.6) {
        mixedColor.copy(color2);
      } else {
        mixedColor.copy(color3);
      }

      // Add slight color variation based on distance from center
      const distanceFromCenter = Math.sqrt(x * x + y * y + z * z);
      const colorIntensity = 1 - (distanceFromCenter / 30) * 0.5;

      colors[i] = mixedColor.r * colorIntensity;
      colors[i + 1] = mixedColor.g * colorIntensity;
      colors[i + 2] = mixedColor.b * colorIntensity;

      // Varied star sizes based on distance from center
      sizes[i / 3] = Math.random() * (1 - (distanceFromCenter / 30) * 0.5) * 3;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Enhanced shader material for better star appearance
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (500.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float strength = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          vec3 color = mix(vec3(0.0), vColor, strength);
          if (strength < 0.05) discard;
          gl_FragColor = vec4(color, strength);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 35;
    camera.position.y = 15;
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
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera movement
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;

      // Rotate galaxy
      particlesMesh.rotation.y = elapsedTime * 0.05 + targetX * 0.5;
      particlesMesh.rotation.x = targetY * 0.3;

      // Gentle wave animation
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] += Math.sin(elapsedTime + x + z) * 0.002;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
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