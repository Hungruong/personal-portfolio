import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const FeaturedProject = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Project Preview - Image */}
      <a 
        href={project.demo} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group block"
      >
        <div className="absolute inset-0 bg-accent/20 rounded-xl group-hover:bg-transparent transition-all duration-300 z-10" />
        <div className="glass rounded-xl overflow-hidden aspect-video relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 z-20">
            <span className="px-6 py-3 bg-accent text-white font-semibold rounded-lg flex items-center gap-2">
              <FaExternalLinkAlt /> View Live Demo
            </span>
          </div>
        </div>
      </a>

      {/* Project Info */}
      <div className="lg:text-right">
        <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-3xl font-display font-bold mb-4">{project.name}</h3>
        
        <div className="glass rounded-xl p-6 mb-4">
          <p className="text-text-secondary">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className={`font-mono text-sm ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4 lg:justify-end">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            title="View Source Code"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            title="View Live Demo"
          >
            <FaExternalLinkAlt className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Things I've Built
          </h2>
        </motion.div>

        {/* Featured Projects */}
        {featured.map((project, i) => (
          <FeaturedProject key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
