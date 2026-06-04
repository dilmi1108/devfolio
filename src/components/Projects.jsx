import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Full Stack', 'QA Projects'];

  // Filter projects based on selected tab
  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-slate-50 dark:bg-navy-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            My Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            All Projects
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeFilter === category
                  ? 'bg-indigo-600 border-indigo-600 text-white dark:bg-cyan-500 dark:border-cyan-500 dark:text-navy-950 shadow-md scale-105'
                  : 'bg-transparent border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Layout Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col h-full shadow-xs hover:shadow-lg transition-all duration-300 group"
              >
                {/* Visual Image container */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-navy-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold font-mono px-2 py-1 bg-slate-900/80 text-white rounded-md backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[9px] font-semibold bg-slate-50 dark:bg-navy-950 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200/50 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3.5 border-t border-slate-200/60 dark:border-white/5 pt-3.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
