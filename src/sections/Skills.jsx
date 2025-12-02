import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';

const SkillBar = ({ name, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-accent">{level}%</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
      />
    </div>
  </motion.div>
);

const SkillCategory = ({ title, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass rounded-xl p-6"
  >
    <h3 className="text-xl font-display font-bold mb-6 text-accent">{title}</h3>
    {items.map((skill, i) => (
      <SkillBar
        key={i}
        name={skill.name}
        level={skill.level}
        delay={index * 0.1 + i * 0.05}
      />
    ))}
  </motion.div>
);

const Skills = () => {
  const categories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks & Libraries", items: skills.frameworks },
    { title: "Tools & Platforms", items: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2">04. Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCategory key={i} title={cat.title} items={cat.items} index={i} />
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-4 text-3xl text-text-secondary">
            {["⚛️", "📊", "🎨", "☁️", "🐳", "🔥", "🗃️", "⚡"].map((emoji, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="cursor-default"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
