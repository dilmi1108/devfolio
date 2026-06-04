import { motion } from 'framer-motion';
import { 
  FaCode, FaServer, FaDatabase, FaBug, 
  FaRobot, FaChartLine, FaTools 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      color: "from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300",
      glowColor: "group-hover:shadow-cyan-500/10",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300",
      glowColor: "group-hover:shadow-emerald-500/10",
      skills: [
        { name: "Java", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      color: "from-purple-500 to-indigo-400 dark:from-purple-400 dark:to-indigo-300",
      glowColor: "group-hover:shadow-purple-500/10",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "QA Engineering",
      icon: FaBug,
      color: "from-amber-500 to-yellow-400 dark:from-amber-400 dark:to-yellow-300",
      glowColor: "group-hover:shadow-yellow-500/10",
      skills: [
        { name: "Manual Testing", level: 90 },
        { name: "Test Case Design", level: 85 },
        { name: "Bug Reporting", level: 85 },
        { name: "Regression Testing", level: 80 },
        { name: "Functional Testing", level: 85 },
        { name: "UAT Testing", level: 75 }
      ]
    },
    {
      title: "Automation Testing",
      icon: FaRobot,
      color: "from-rose-500 to-red-400 dark:from-rose-400 dark:to-red-300",
      glowColor: "group-hover:shadow-rose-500/10",
      skills: [
        { name: "Selenium WebDriver", level: 80 },
        { name: "TestNG", level: 80 },
        { name: "Automation Framework Design", level: 75 },
        { name: "Page Object Model", level: 80 }
      ]
    },
    {
      title: "Performance Testing",
      icon: FaChartLine,
      color: "from-violet-500 to-purple-400 dark:from-violet-400 dark:to-purple-300",
      glowColor: "group-hover:shadow-purple-500/10",
      skills: [
        { name: "Apache JMeter", level: 75 },
        { name: "Load Testing", level: 75 },
        { name: "Stress Testing", level: 70 },
        { name: "Performance Reporting", level: 75 }
      ]
    },
    {
      title: "Other Tools & Methods",
      icon: FaTools,
      color: "from-slate-500 to-slate-400 dark:from-slate-400 dark:to-slate-300",
      glowColor: "group-hover:shadow-slate-500/10",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Agile Methodology", level: 80 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60 } 
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-slate-100 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            My Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Skills & Abilities
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-cyan-400/20 shadow-sm transition-all duration-300 group hover:shadow-lg ${category.glowColor}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${category.color} text-white dark:text-navy-950 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges/Cards List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/badge relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-600/30 dark:hover:border-cyan-400/30 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      {/* Interactive indicator color dot */}
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-cyan-400 dark:to-emerald-400" />
                      
                      {/* Skill Name */}
                      <span>{skill.name}</span>
                      
                      {/* Dynamic tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded-md opacity-0 pointer-events-none group-hover/badge:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-md">
                        Competency: {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
