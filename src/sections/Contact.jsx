import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-2">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get In Touch
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg mb-12 max-w-xl mx-auto"
        >
          I'm currently looking for new opportunities in data visualization and software engineering. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href={`mailto:${socialLinks.email}`}
            className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover-glow inline-flex items-center justify-center gap-2"
          >
            <FaEnvelope />
            Say Hello
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-4 border border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2"
          >
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-text-secondary hover:text-accent transition-colors text-3xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
