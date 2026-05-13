import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Download, Calendar, ChevronDown, Award, Star } from 'lucide-react';
import { Section } from '../ui/Section';

const TimelineItem = ({ data, index, type }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l border-white/10 last:pb-0 last:border-l-0"
        >
            {/* Timeline Dot */}
            <div className={`absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full ${type === 'edu' ? 'bg-white' : 'bg-primaryAccent'} ring-4 ring-background`} />

            {/* Content Card */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="group cursor-pointer bg-surface border border-white/5 rounded-xl p-6 hover:bg-surfaceHighlight transition-colors"
            >
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primaryAccent transition-colors">
                            {data.role || data.degree}
                        </h3>
                        <p className="text-textSecondary font-medium">
                            {data.company || data.university}
                        </p>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="p-2 bg-white/5 rounded-full text-textSecondary"
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </div>

                <div className="flex items-center gap-4 text-sm text-textSecondary/60 font-mono mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {data.duration}
                    </span>
                    {data.cgpa && (
                        <span className="flex items-center gap-1 text-white/90">
                            <Star size={14} className="fill-white/20" />
                            CGPA: {data.cgpa}
                        </span>
                    )}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-white/5 text-textSecondary leading-relaxed space-y-4">
                                {data.description && <p>{data.description}</p>}
                                {data.projects && (
                                    <div>
                                        <p className="text-sm font-bold text-white mb-2">Key Projects:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            {data.projects.map((p, i) => (
                                                <li key={i}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <p className="text-sm text-textSecondary/40 mt-2">Tap to expand details</p>
                )}
            </div>
        </motion.div>
    );
};

export const Resume = () => {
    const education = [
        {
            id: 'edu-1',
            degree: "Bachelor of Computer Applications (BCA)",
            university: "UPES Dehradun",
            duration: "July 2023 – June 2026",
            cgpa: "7.03 / 10",
            description: "Specializing in software development principles, core computer science concepts, and modern application frameworks."
        }
    ];

    const experience = [
        {
            id: 'exp-1',
            role: "Project Lead – Technical Internship",
            company: "Pheme Software Pvt. Ltd (IBM Partner Organization)",
            duration: "Jun 2025 – Jul 2025",
            description: "Led a technical team in delivering software solutions. Gained hands-on experience with enterprise-level development workflows and IBM partner ecosystem tools."
        },
        {
            id: 'exp-2',
            role: "Social Internship",
            company: "Abhiprerna Foundation",
            duration: "Jun 2024 – Jul 2024",
            description: "Contributed to social impact initiatives through technical support and digital literacy campaigns."
        }
    ];

    const projectHighlights = [
        "ApplyFlow – Job Application Tracker",
        "COVID-19 Time-Series Forecasting & Visualization",
        "Disaster Identification & Awareness Tool"
    ];

    return (
        <Section id="resume" className="h-full flex flex-col pt-24 overflow-y-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto w-full pb-20 px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl font-bold text-white mb-2"
                        >
                            Resume
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-textSecondary"
                        >
                            Experience, Education, and milestones.
                        </motion.p>
                    </div>

                    <motion.a
                        href="/resume.pdf" // Placeholder path
                        download="Divyanshu_Gairwal_Resume.pdf"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                    >
                        <Download size={18} />
                        Download PDF
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-[1fr,350px] gap-12">
                    <div className="space-y-12">
                        {/* Experience */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="p-2 bg-white/5 rounded-lg text-primaryAccent">
                                    <Briefcase size={20} />
                                </span>
                                <h3 className="text-2xl font-bold text-white">Experience</h3>
                            </div>
                            <div>
                                {experience.map((item, idx) => (
                                    <TimelineItem key={item.id} data={item} index={idx} type="exp" />
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="p-2 bg-white/5 rounded-lg text-white">
                                    <GraduationCap size={20} />
                                </span>
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                            </div>
                            <div>
                                {education.map((item, idx) => (
                                    <TimelineItem key={item.id} data={item} index={idx} type="edu" />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Projects Summary & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-surface/50 border border-white/5 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Award size={20} className="text-primaryAccent" />
                                <h3 className="font-bold text-white">Highlighted Projects</h3>
                            </div>
                            <ul className="space-y-4">
                                {projectHighlights.map((project, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-textSecondary">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                                        <span>{project}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Skills */}
                        <div className="bg-surface/50 border border-white/5 rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-4">Core Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Tailwind', 'Framer Motion', 'JavaScript'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 text-xs text-textSecondary rounded-full border border-white/5 hover:border-white/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
