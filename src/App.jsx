import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SEO from './components/SEO';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import BackgroundElements from './components/BackgroundElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainApp() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. SEO Configuration */}
      <SEO 
        title="Dilmi Sooriyaarachchi | Software Developer & QA Engineer Portfolio"
        description="Dilmi Sooriyaarachchi - Software Developer Intern with experience in Full Stack Development, Test Automation, Manual Testing, and Modern Web Technologies."
        keywords="Dilmi Sooriyaarachchi, Dilmi, Sooriyaarachchi, Software Developer, QA Engineer, Test Automation, Full Stack Developer, Sri Lanka Ports Authority, SLPA, NDT, Moratuwa, Portfolio"
      />

      {/* 2. Loading Screen */}
      <LoadingScreen onFinished={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-navy-950 transition-colors duration-300 antialiased selection:bg-indigo-600/30 dark:selection:bg-cyan-400/30">
          
          {/* 3. Top Scroll Progress Indicator */}
          <ScrollProgress />

          {/* 4. Decorative Background Elements & Grids */}
          <BackgroundElements />

          {/* 5. Sticky Navbar */}
          <Navbar />

          {/* 6. Main Portfolio Content Sections */}
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Services />
            <FeaturedProjects />
            <Projects />
            <GithubStats />
            <Experience />
            <Achievements />
            <Certifications />
            <Contact />
          </main>

          {/* 7. Footer */}
          <Footer />

          {/* 8. Floating Scroll to Top button */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
