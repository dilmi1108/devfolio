import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';
import profileImg from '../assets/profile.jpeg';



const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing text
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === currentRole) {
          // Wait at peak, then start deleting
          setIsDeleting(true);
          setTypingSpeed(1500);
        }
      } else {
        // Deleting text
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-100 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Summary & Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-indigo-600 dark:text-cyan-400 font-mono text-sm sm:text-base font-medium tracking-wider mb-2"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="h-12 sm:h-16 flex items-center justify-center lg:justify-start mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
              seeking opportunities in{' '}
              <span className="text-indigo-600 dark:text-cyan-400 bg-indigo-600/5 dark:bg-cyan-400/5 px-3 py-1.5 rounded-lg border border-indigo-600/10 dark:border-cyan-400/10 inline-block">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 text-center bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 dark:from-cyan-400 dark:to-emerald-400 dark:hover:from-cyan-500 dark:hover:to-emerald-500 text-white dark:text-navy-950 font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-500/25 dark:hover:shadow-cyan-400/20 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 text-center border border-slate-300 dark:border-white/10 hover:border-indigo-600 dark:hover:border-cyan-400 text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 font-bold rounded-full transition-all bg-transparent hover:bg-indigo-600/5 dark:hover:bg-cyan-400/5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons & Email */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start space-x-4 border-t border-slate-200 dark:border-white/10 pt-6"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Connect:
            </span>
            <div className="flex space-x-3">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image & Floating Elements */}
        <div className="col-span-1 lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Background glowing blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 dark:from-cyan-400/10 dark:to-emerald-400/10 rounded-full blur-[40px] animate-pulse-slow" />
            
            {/* Decorative background border ring */}
            <div className="absolute inset-[-12px] rounded-full border border-indigo-600/10 dark:border-cyan-400/20 animate-spin-slow" />
            <div className="absolute inset-[-4px] rounded-full border-2 border-dashed border-cyan-400/30 dark:border-emerald-400/25 animate-spin-slow [animation-direction:reverse]" />

            {/* Profile Avatar Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-white dark:border-navy-900 shadow-2xl flex items-center justify-center bg-gradient-to-b from-indigo-100 to-cyan-50 dark:from-navy-850 dark:to-navy-900"
            >
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Floating Visual Accent Badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-4 -left-6 glass-panel rounded-xl px-4 py-2 border border-white/20 dark:border-white/5 flex items-center space-x-2 shadow-lg"
            >
              <span className="text-xl">💻</span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Developer</p>
                <p className="text-xs font-extrabold text-slate-800 dark:text-white">Full Stack</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-10 -right-6 glass-panel rounded-xl px-4 py-2 border border-white/20 dark:border-white/5 flex items-center space-x-2 shadow-lg"
            >
              <span className="text-xl">🛡️</span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">QA Quality</p>
                <p className="text-xs font-extrabold text-slate-800 dark:text-white">Test Automation</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Bounce-down indicator at center bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" className="text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
