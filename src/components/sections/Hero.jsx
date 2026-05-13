import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="blob top-[-10%] left-[-10%] animate-float" />
      <div className="blob bottom-[-10%] right-[-10%] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Divyanshu Gairwal</span>
          </h1>
          
          <p className="text-xl text-dark-text mb-10 max-w-lg leading-relaxed">
            Frontend-focused developer building responsive and user-friendly web applications while continuously learning modern frontend engineering and backend integration.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium uppercase tracking-widest text-dark-text/50">Follow Me</span>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Mail, href: "mailto:contact@example.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: '#8b5cf6' }}
                  className="text-dark-text hover:text-primary-500 transition-colors"
                >
                  <social.Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Visual element representing code/frontend */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-purple-600/20 rounded-full animate-pulse" />
            <div className="absolute inset-10 border border-white/10 rounded-3xl glass flex items-center justify-center overflow-hidden">
               <pre className="text-[12px] md:text-[14px] text-primary-300 opacity-80 font-mono p-6 select-none">
                 {`
  const Developer = {
    name: 'Divyanshu Gairwal',
    role: 'Frontend Engineer',
    skills: ['React', 'JS', 'Tailwind'],
    passion: 'Building sleek UIs',
    motto: 'Code with Purpose',
    status: 'Continuously Learning'
  };

  function createExcellence() {
    while(true) {
      learn();
      build();
      refine();
    }
  }
                 `}
               </pre>
            </div>
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass px-4 py-2 rounded-xl border border-white/10 shadow-2xl"
            >
              <span className="text-sm font-bold">React.js</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 glass px-4 py-2 rounded-xl border border-white/10 shadow-2xl"
            >
              <span className="text-sm font-bold">JavaScript</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-dark-text/30">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
