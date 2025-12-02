import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../constants';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-2">01. About Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            {about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary leading-relaxed whitespace-pre-line mb-8">
              {about.description}
            </p>

            <div className="space-y-4">
              {about.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-accent flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl" />
              
              <h3 className="text-2xl font-display font-bold mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-text-secondary">Education</span>
                  <span className="font-semibold">University of South Florida</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-text-secondary">Major</span>
                  <span className="font-semibold">Computer Science</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-text-secondary">Graduation</span>
                  <span className="font-semibold">May 2027</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-text-secondary">Focus</span>
                  <span className="font-semibold text-accent">Data Visualization</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-text-secondary">Status</span>
                  <span className="font-semibold text-green-400">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
