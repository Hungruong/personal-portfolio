import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
      
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-3 h-3 rounded-full -translate-x-1/2 border-2"
        style={{ backgroundColor: experience.color, borderColor: experience.color }}
      />

      <div className="glass rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
          <div>
            <h3 className="text-xl font-display font-bold">{experience.title}</h3>
            <p
              className="font-semibold"
              style={{ color: experience.color }}
            >
              {experience.company}
            </p>
          </div>
          <div className="text-right">
            <p className="text-text-secondary text-sm">{experience.date}</p>
            <p className="text-text-secondary text-sm">{experience.location}</p>
          </div>
        </div>

        <ul className="space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className="text-text-secondary text-sm flex gap-2">
              <span className="text-accent mt-1">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">02. Experience</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
