import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/profileData';

const GithubStats = () => {
  const { theme } = useTheme();
  const username = personalInfo.contact.githubUsername;

  // Build theme-specific queries for github-readme-stats API
  const getStatsUrl = () => {
    if (theme === 'dark') {
      // Dark Navy theme (bg: 0a0f1d, title: 00f0ff, icon: 00f0ff, text: 94a3b8)
      return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=0a0f1d&title_color=00f0ff&icon_color=00f0ff&text_color=94a3b8&text_bold=false`;
    } else {
      // Light theme (bg: fffff, title: 4f46e5, icon: 4f46e5, text: 475569)
      return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=ffffff&title_color=4f46e5&icon_color=4f46e5&text_color=475569&text_bold=false`;
    }
  };

  const getLangsUrl = () => {
    if (theme === 'dark') {
      return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=0a0f1d&title_color=00f0ff&icon_color=00f0ff&text_color=94a3b8`;
    } else {
      return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=ffffff&title_color=4f46e5&icon_color=4f46e5&text_color=475569`;
    }
  };

  return (
    <section id="github-stats" className="relative py-24 bg-slate-100 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Activity & Metrics
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            GitHub Statistics
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Box / Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Reviewing coding activity, commit counts, and language preference details retrieved dynamically from my GitHub profile.
          </p>
        </motion.div>

        {/* Showcase Stats Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Stats Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center min-h-[220px]"
          >
            <div className="w-full flex items-center justify-between mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <FaGithub className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                Profile Metrics
              </span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wide hover:underline cursor-pointer"
              >
                Visit GitHub
              </a>
            </div>
            
            <img
              src={getStatsUrl()}
              alt={`${username} GitHub Stats`}
              className="max-w-full h-auto rounded-lg object-contain"
              onError={(e) => {
                // If service is down, render custom placeholder layout
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback message if block/network issue */}
            <div className="hidden text-xs text-slate-500 font-mono mt-4">
              [GitHub Stats API temporary unavailable. Visit profile directly to view commit history.]
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center min-h-[220px]"
          >
            <div className="w-full flex items-center justify-between mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <FaGithub className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                Top Languages
              </span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wide hover:underline cursor-pointer"
              >
                Visit GitHub
              </a>
            </div>

            <img
              src={getLangsUrl()}
              alt={`${username} Top Languages`}
              className="max-w-full h-auto rounded-lg object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback message */}
            <div className="hidden text-xs text-slate-500 font-mono mt-4">
              [Language breakdown API temporary unavailable. Primary stacks: Java, JavaScript, HTML, CSS]
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GithubStats;
