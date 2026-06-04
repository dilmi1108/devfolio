import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const FeaturedProjects = () => {
  // Filter featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    }
  };

  return (
    <section id="featured-projects" className="relative py-24 bg-slate-100 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Curated Highlights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-panel rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl hover:border-indigo-500/20 dark:hover:border-cyan-400/20 transition-all duration-300 group"
            >
              {/* Image Container with zoom overlay */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-navy-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-mono px-2.5 py-1 bg-indigo-600 rounded-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category & Title */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 dark:text-cyan-400 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mt-1 mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-semibold bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200/50 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Redirect Buttons */}
                  <div className="flex items-center space-x-4 border-t border-slate-200 dark:border-white/5 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
