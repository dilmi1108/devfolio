import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaDownload, FaEye, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profileData';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Resume Paths
  const cvPath = '/Dilmi_Sooriyaarachchi_CV.pdf';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-5">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-800 dark:text-cyan-400 border border-slate-200 dark:border-white/5 transition-all shadow-sm cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>

              {/* Preview Button */}
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 border border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400 hover:bg-indigo-600/5 dark:hover:bg-cyan-400/5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <FaEye className="w-3.5 h-3.5" />
                Preview
              </a>

              {/* Download Button */}
              <a
                href={cvPath}
                download="Dilmi_Sooriyaarachchi_CV.pdf"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 dark:from-cyan-400 dark:to-emerald-400 dark:hover:from-cyan-500 dark:hover:to-emerald-500 text-white dark:text-navy-950 font-semibold rounded-full text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <FaDownload className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>

            {/* Hamburger / Toggle buttons (Mobile) */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-800 dark:text-cyan-400 border border-slate-200 dark:border-white/5 transition-all cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>

              {/* Hamburger Toggle */}
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-all cursor-pointer"
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full z-[999] bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-white/10 shadow-xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-cyan-400 transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="border-t border-slate-200 dark:border-white/10 pt-4 px-4 flex flex-col sm:flex-row gap-3">
                {/* Mobile Preview */}
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400 hover:bg-indigo-600/5 dark:hover:bg-cyan-400/5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all w-full cursor-pointer"
                >
                  <FaEye className="w-4 h-4" />
                  Preview Resume
                </a>

                {/* Mobile Download */}
                <a
                  href={cvPath}
                  download="Dilmi_Sooriyaarachchi_CV.pdf"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-navy-950 font-semibold rounded-full text-sm uppercase tracking-wider transition-all w-full shadow-md cursor-pointer"
                >
                  <FaDownload className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
