import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const Counter = ({ to, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isNumeric = !isNaN(parseInt(to));

  useEffect(() => {
    if (!isNumeric) return;
    const end = parseInt(to);
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime = null;
        const duration = 1500; // 1.5 seconds

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [to, isNumeric]);

  return <span ref={elementRef}>{isNumeric ? count : to}{suffix}</span>;
};

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-24 bg-slate-50 dark:bg-navy-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Get To Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Short intro paragraph + Education & Current position cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="col-span-1 lg:col-span-7 space-y-6"
          >
            <motion.p 
              variants={textVariants}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
            >
              {personalInfo.aboutIntro}
            </motion.p>

            <motion.p 
              variants={textVariants}
              className="text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {personalInfo.aboutSLPA}
            </motion.p>

            {/* Academic Cards Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Education */}
              <motion.div
                variants={textVariants}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Education</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {personalInfo.education.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {personalInfo.education.institution}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-cyan-400 font-mono pt-1">
                    {personalInfo.education.duration}
                  </p>
                </div>
              </motion.div>

              {/* Internship Work */}
              <motion.div
                variants={textVariants}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <FaBriefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Experience</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    Intern Software Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Sri Lanka Ports Authority
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-cyan-400 font-mono pt-1">
                    QA Testing & Full Stack Work
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Statistics Counters */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
            className="col-span-1 lg:col-span-5 grid grid-cols-2 gap-4 lg:pl-6"
          >
            {personalInfo.statistics.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-navy-950 dark:border-white/5 shadow-sm text-center flex flex-col justify-center items-center h-36 relative group overflow-hidden"
              >
                {/* Visual hover grid slide effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h4 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-cyan-400 font-mono mb-2 relative z-10">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-snug relative z-10 max-w-[120px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
