import { motion } from 'framer-motion';
import { FaLaptopCode, FaRobot, FaFlask, FaServer } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaRobot: FaRobot,
  FaFlask: FaFlask,
  FaServer: FaServer
};

const Services = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="services" className="relative py-24 bg-slate-50 dark:bg-navy-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Services & Solutions
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personalInfo.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col items-start text-left h-full relative group overflow-hidden transition-all duration-300"
              >
                {/* Accent line animation on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                {/* Glowing blob behind icon */}
                <div className="absolute w-24 h-24 rounded-full bg-indigo-500/5 dark:bg-cyan-400/5 blur-xl -top-4 -left-4 group-hover:bg-indigo-500/10 dark:group-hover:bg-cyan-400/10 transition-colors" />

                {/* Service Icon */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200/50 dark:border-white/5 text-indigo-600 dark:text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-navy-950 transition-all duration-300">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
