import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code2, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary-400" />,
      title: "Education",
      description: "Currently pursuing BCA from UPES Dehradun."
    },
    {
      icon: <Code2 className="text-primary-400" />,
      title: "Focus",
      description: "Deeply strengthening JavaScript fundamentals and React."
    },
    {
      icon: <Rocket className="text-primary-400" />,
      title: "Goal",
      description: "Building real-world apps with clean UI and scalable architecture."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <User className="text-primary-500" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl">About Me</h2>
            </div>
            
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              I am a passionate frontend engineer based in Dehradun, currently pursuing my Bachelor of Computer Applications at <span className="text-primary-400">UPES Dehradun</span>. My journey in web development is driven by a fascination for how code can transform ideas into interactive digital experiences.
            </p>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              I am currently focusing on mastering <span className="text-white font-medium">JavaScript</span> and its modern ecosystem, particularly <span className="text-white font-medium">React.js</span>. Beyond frontend, I am also exploring backend concepts with Node.js and Express to evolve into a versatile Full Stack Developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-4 rounded-2xl glass-card"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-dark-text leading-tight">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-900/40 via-dark-card to-primary-800/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">7.03</div>
                  <div className="text-sm uppercase tracking-widest text-dark-text">Current CGPA</div>
                  <div className="mt-8 text-dark-text/40 italic">"The only way to do great work is to love what you do."</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
