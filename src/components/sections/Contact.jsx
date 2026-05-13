import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                <MessageSquare className="text-primary-500" size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl">Let's Connect</h2>
            </div>
            
            <p className="text-xl text-dark-text mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Email", value: "contact@example.com", href: "mailto:contact@example.com" },
                { icon: <Linkedin />, title: "LinkedIn", value: "linkedin.com/in/divyanshu-gairwal", href: "https://linkedin.com" },
                { icon: <Github />, title: "GitHub", value: "github.com/divyanshu-gairwal", href: "https://github.com" }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-dark-text/40 mb-1">{item.title}</p>
                    <p className="text-lg font-medium group-hover:text-primary-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500/50 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button type="button" className="btn-primary w-full py-5 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
