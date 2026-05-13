import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Project Lead – Technical Internship",
      company: "Pheme Software Pvt. Ltd (IBM Partner Organization)",
      period: "Jun 2025 – Jul 2025",
      points: [
        "Worked on a time-series forecasting pipeline using Python, Pandas, and Statsmodels",
        "Assisted in preprocessing workflows, automation, and evaluation",
        "Improved workflow reliability through structured logging and testing"
      ]
    },
    {
      role: "Social Internship",
      company: "Abhiprerna Foundation",
      period: "Jun 2024 – Jul 2024",
      points: [
        "Conducted beginner-level computer literacy workshops",
        "Assisted in digital learning activities and engagement sessions"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
            <Briefcase className="text-primary-500" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 border-l border-dark-border"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary-500 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-dark-text text-sm">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-dark-text text-sm flex gap-3">
                    <span className="text-primary-500 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
