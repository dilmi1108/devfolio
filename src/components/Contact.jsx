import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/profileData';

const Contact = () => {
  const formRef = useRef();
  
  // Input fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation & Loading states
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when editing field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setSubmitStatus(null);
    setStatusMessage('');

    // Fetch EmailJS keys from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Simulation mode if credentials are missing
      console.warn("EmailJS credentials missing. Simulating form submission.");
      setTimeout(() => {
        setLoading(false);
        setSubmitStatus('success');
        setStatusMessage('Your message was simulated successfully! Set up your EmailJS environment variables to send real emails.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Oops! Something went wrong. Please check your credentials or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 font-mono"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Contact Me
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Layout: Contact details left / Form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-5 space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                Let's discuss your project!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                I'm actively seeking internship or entry-level opportunities in Software Engineering, Full Stack development, and QA Test Automation. Feel free to reach out via email, phone, or LinkedIn!
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 text-left">
              
              {/* Phone card */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-cyan-400/10 dark:text-cyan-400 shrink-0">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Call Me</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{personalInfo.contact.phone}</p>
                </div>
              </div>

              {/* Email card */}
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center space-x-4 hover:border-indigo-600/30 dark:hover:border-cyan-400/30 transition-all block cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-cyan-400/10 dark:text-cyan-400 shrink-0">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Email Me</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{personalInfo.contact.email}</p>
                </div>
              </a>

              {/* Location card */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-cyan-400/10 dark:text-cyan-400 shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Location</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{personalInfo.contact.location}</p>
                </div>
              </div>

            </div>

            {/* Social profiles row */}
            <div className="flex items-center space-x-4 border-t border-slate-200 dark:border-white/5 pt-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Socials:</span>
              <div className="flex space-x-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-slate-200 dark:bg-navy-900 dark:border-white/5 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-slate-200 dark:bg-navy-900 dark:border-white/5 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-md"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Feedback status banners */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  {statusMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
                  {statusMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border text-slate-900 dark:text-white text-sm transition-all focus:ring-2 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-slate-200 dark:border-white/5 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20'
                    }`}
                    placeholder="Enter name"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border text-slate-900 dark:text-white text-sm transition-all focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-slate-200 dark:border-white/5 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20'
                    }`}
                    placeholder="Enter email"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border text-slate-900 dark:text-white text-sm transition-all focus:ring-2 ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-slate-200 dark:border-white/5 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20'
                  }`}
                  placeholder="Enter subject"
                />
                {errors.subject && <p className="text-[10px] text-red-500 font-bold">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border text-slate-900 dark:text-white text-sm transition-all focus:ring-2 ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                      : 'border-slate-200 dark:border-white/5 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20'
                  }`}
                  placeholder="Describe your message (at least 10 characters)"
                ></textarea>
                {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-navy-950 font-bold rounded-xl transition-all shadow-md cursor-pointer hover:shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    {/* Visual loading spinner */}
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4 shrink-0" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
