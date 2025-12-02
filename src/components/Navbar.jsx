import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, socialLinks } from '../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-display font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-accent">H</span>
          <span className="text-text">ung </span>
          <span className="text-accent">T</span>
          <span className="text-text">ruong</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-text-secondary hover:text-accent transition-colors font-medium cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.title}
            </motion.button>
          ))}

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#e50914' }}
              className="text-text-secondary text-xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#e50914' }}
              className="text-text-secondary text-xl"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-text"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    setMobileOpen(false);
                  }}
                  className="text-text-secondary hover:text-accent transition-colors py-2 text-left cursor-pointer"
                >
                  {link.title}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl text-text-secondary hover:text-accent" />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-xl text-text-secondary hover:text-accent" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;