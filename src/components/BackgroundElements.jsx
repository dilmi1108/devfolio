const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Decorative Grid Backdrop */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Floating Blobs (Dark/Light Responsive) */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/5 blur-[80px] md:blur-[120px] animate-blob" />
      <div className="absolute top-[35%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-indigo-500/10 dark:bg-emerald-500/5 blur-[80px] md:blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[10%] left-[20%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-purple-500/10 dark:bg-indigo-500/5 blur-[80px] md:blur-[120px] animate-blob animation-delay-4000" />
      
      {/* Additional fine particle glows for dark mode */}
      <div className="hidden dark:block absolute top-[60%] left-[80%] w-[100px] h-[100px] bg-cyan-400/20 rounded-full blur-[40px] animate-pulse-slow" />
      <div className="hidden dark:block absolute top-[20%] left-[45%] w-[150px] h-[150px] bg-emerald-400/10 rounded-full blur-[60px] animate-pulse-slow" />
    </div>
  );
};

export default BackgroundElements;
