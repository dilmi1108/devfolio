import { motion } from 'framer-motion';
import { FaGraduationCap, FaReact, FaJava, FaBug, FaCogs, FaAward } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const iconMap = {
  FaGraduationCap: FaGraduationCap,
  FaReact: FaReact,
  FaJava: FaJava,
  FaBug: FaBug,
  FaCogs: FaCogs
};

const Certifications = () => {
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
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-white dark:bg-navy-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Verified Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Certifications
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {personalInfo.certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || FaAward;
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-cyan-400/20 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 text-left group"
              >
                {/* Visual Icon Frame */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-white/5 text-indigo-600 dark:text-cyan-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-navy-950 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <span className="text-[9px] font-bold font-mono text-indigo-600 dark:text-cyan-400 uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight mt-0.5 mb-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-500">
                      Issued: {cert.date}
                    </span>
                    <span className="text-[9px] font-bold font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                      Verified
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
