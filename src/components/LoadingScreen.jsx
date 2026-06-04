import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = [
  "systemctl start dilmi-portfolio.service",
  "Loading Full Stack modules...",
  "Loading QA automation scripts...",
  "Connecting to Sri Lanka Ports Authority systems...",
  "Establishing secure connection...",
  "Dilmi Sooriyaarachchi Portfolio [READY]"
];

const LoadingScreen = ({ onFinished }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (textIndex < loadingSteps.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, textIndex === 0 ? 600 : textIndex === loadingSteps.length - 1 ? 1200 : 400);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setVisible(false);
        if (onFinished) onFinished();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [textIndex, onFinished]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-navy-950 text-white font-mono p-4"
        >
          <div className="w-full max-w-md p-6 rounded-lg border border-white/10 bg-navy-900/80 shadow-2xl backdrop-blur-md">
            {/* Terminal Top bar */}
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-white/40 ml-2 font-mono">root@dilmi-sooriyaarachchi:~</span>
            </div>
            
            {/* Terminal Body */}
            <div className="space-y-2 text-sm md:text-base min-h-[160px]">
              {loadingSteps.slice(0, textIndex).map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-cyan-400 mr-2">$</span>
                  <span className={idx === loadingSteps.length - 1 ? "text-emerald-400 font-bold" : "text-white/80"}>
                    {step}
                  </span>
                  {idx < textIndex - 1 && <span className="text-emerald-500 ml-2">✔</span>}
                </div>
              ))}
              
              {textIndex < loadingSteps.length && (
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">$</span>
                  <span className="text-white/80">{loadingSteps[textIndex]}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-white/80 ml-1"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
