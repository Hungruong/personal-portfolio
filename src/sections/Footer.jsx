import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-text-secondary text-sm mb-2">
          Designed & Built by{' '}
          <a href="#" className="text-accent hover:underline">
            Hung Truong
          </a>
        </p>
        <p className="text-text-secondary text-xs font-mono">
          Built with React, Three.js & Framer Motion
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
