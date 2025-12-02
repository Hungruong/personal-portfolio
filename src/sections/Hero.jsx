import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Float } from '@react-three/drei';
import { FaChevronDown } from 'react-icons/fa';

const DataVizSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#e50914"
          wireframe
          emissive="#e50914"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh scale={0.95}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#ff6b6b"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-light/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm mb-4"
          >
            &lt;Hello World /&gt;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            I'm <span className="gradient-text">Hung Truong</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-8"
          >
            Data Visualization Engineer
            <br />
            <span className="text-accent">Turning data into visual stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary max-w-lg mb-8"
          >
            Building interactive data experiences with React, D3.js, and modern web technologies.
            Previously at <span className="text-accent font-semibold">Microsoft</span> & <span className="text-accent font-semibold">MoMo</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start relative z-20"
          >
            <button
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover-glow cursor-pointer"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[400px] lg:h-[500px] pointer-events-none"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} color="#e50914" intensity={2} />
              <pointLight position={[-10, -10, -10]} color="#ff6b6b" intensity={1} />
              <DataVizSphere />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          className="text-accent cursor-pointer"
        >
          <FaChevronDown className="text-2xl" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;