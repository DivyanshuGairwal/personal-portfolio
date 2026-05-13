import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary-400" size={20} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "DOM Manipulation", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="text-primary-400" size={20} />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database className="text-primary-400" size={20} />,
      skills: ["MongoDB"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-primary-400" size={20} />,
      skills: ["Git", "GitHub", "Postman", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl mb-4"
          >
            Technical <span className="text-gradient">Toolkit</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-dark-text max-w-2xl mx-auto"
          >
            A collection of technologies I use to bring digital ideas to life. I specialize in the modern JavaScript ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                  {category.icon}
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-dark-text hover:border-primary-500/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
