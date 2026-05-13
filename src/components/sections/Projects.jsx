import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ApplyFlow",
      subtitle: "Job Application Tracker",
      description: "A modern full-stack job application tracker allowing users to manage applications, track statuses, and organize workflows efficiently through a responsive dashboard.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Disaster Identification",
      subtitle: "Awareness & Dashboard",
      description: "A real-time disaster awareness dashboard integrating weather, geolocation, and disaster APIs to display dynamic live information with responsive design.",
      tech: ["React.js", "TypeScript", "REST APIs", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2670&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Modern Portfolio",
      subtitle: "Personal Showcase",
      description: "A modern responsive developer portfolio focused on frontend engineering, UI polish, animations, and interactive user experience.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark-text max-w-xl"
            >
              A selection of my recent work, ranging from complex full-stack applications to focused frontend experiments.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary whitespace-nowrap"
          >
            View More on GitHub <Github size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary-600/80 backdrop-blur-md rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl mb-1 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-primary-500 font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-dark-text text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 btn-primary py-2 text-sm"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 btn-secondary rounded-full"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
