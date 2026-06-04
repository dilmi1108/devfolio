import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/profileData';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Short Introduction */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {personalInfo.summary}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <FaPhone className="w-4 h-4 mr-3 text-indigo-500 dark:text-cyan-400" />
                <span>{personalInfo.contact.phone}</span>
              </li>
              <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <FaEnvelope className="w-4 h-4 mr-3 text-indigo-500 dark:text-cyan-400" />
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                  {personalInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 text-indigo-500 dark:text-cyan-400" />
                <span>{personalInfo.contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4">
              Connect
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Follow me on professional platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-700 hover:text-indigo-600 hover:bg-slate-300 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:bg-navy-700 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-700 hover:text-slate-900 hover:bg-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:bg-navy-700 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
