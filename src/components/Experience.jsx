import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Sri Lanka Ports Authority (SLPA)",
      duration: "Present (Internship)",
      location: "Colombo, Sri Lanka",
      description: "Working actively as a software developer intern, supporting the core IT engineering team in maintaining, testing, and scaling system applications.",
      duties: [
        "Full Stack Development using Java, Spring Boot, and React components.",
        "Quality Assurance (QA) activities, writing and executing manual test cases to verify feature completeness.",
        "Developing maintainable automation testing scripts using Selenium WebDriver and TestNG.",
        "Database integration and management using MySQL relational schemas.",
        "Participating in requirement analysis and coordinating with cross-functional stakeholders.",
        "Debugging, system troubleshooting, and general application maintenance."
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-50 dark:bg-navy-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            My Career Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Work Experience
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards Layout */}
        <div className="w-full">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group text-left"
            >
              {/* Left-edge Highlight line accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pl-4">
                
                {/* Left Column: Metadata (Dates, Company, Location, Summary) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 bg-indigo-600/5 dark:bg-cyan-400/5 px-3 py-1.5 rounded-lg border border-indigo-600/10 dark:border-cyan-400/10">
                      <FaCalendarAlt className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md animate-pulse">
                      Present
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">{exp.company}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5 mt-1">
                      <FaMapMarkerAlt className="w-3.5 h-3.5" />
                      {exp.location}
                    </p>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
                
                {/* Right Column: Role Title & Duties Grid */}
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                    <FaBriefcase className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                    {exp.role}
                  </h3>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-4 font-mono">
                      Key Responsibilities & Achievements:
                    </h4>
                    
                    {/* Two-column responsive grid for duties to save height */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.duties.map((duty, dIdx) => (
                        <li 
                          key={dIdx} 
                          className="glass-panel p-4 rounded-xl border border-slate-100 dark:bg-navy-950/40 dark:border-white/5 hover:border-indigo-600/20 dark:hover:border-cyan-400/20 transition-all flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-cyan-400 dark:to-emerald-400 shrink-0 mt-1.5 mr-2.5" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
