import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaStar } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const iconMap = [
  FaTrophy,
  FaAward,
  FaMedal,
  FaStar
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Milestones & Wins
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Achievements
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {personalInfo.achievements.map((achievement, idx) => {
            // Cycle through available icons
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
              >
                {/* Visual Icon Badge */}
                <div className="p-3.5 rounded-2xl bg-indigo-600/10 dark:bg-cyan-400/10 text-indigo-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-navy-950 transition-all duration-300 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <span className="text-[9px] font-bold uppercase font-mono text-indigo-500 dark:text-cyan-400 tracking-wider">
                    Milestone 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-0.5 mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
