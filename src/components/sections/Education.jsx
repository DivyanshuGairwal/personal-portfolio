import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark-bg/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
            <GraduationCap className="text-primary-500" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl text-center">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <h3 className="text-2xl md:text-3xl mb-2">Bachelor of Computer Applications</h3>
          <p className="text-xl text-primary-500 font-medium mb-6">UPES Dehradun</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8 border-t border-dark-border pt-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-dark-text/40 mb-1">Timeline</p>
              <p className="font-bold">2023 – 2026</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-dark-text/40 mb-1">Academic Result</p>
              <p className="font-bold text-2xl text-gradient">7.03 CGPA</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-dark-text/40 mb-1">Specialization</p>
              <p className="font-bold">Computer Science</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
