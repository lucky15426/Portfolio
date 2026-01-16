import React, { createContext, useState, useEffect, useRef, useMemo } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Footer from './components/Footer.jsx';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import { Analytics } from '@vercel/analytics/react';

export const ThemeContext = createContext();

function App() {
  const particlesContainerRef = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const particlesOptions = useMemo(() => {
    return {
      background: {
        color: theme === 'dark' ? '#1c1c1c' : '#fafafa',
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 },
        },
        color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.3, max: 0.6 },
          // value: 0.6,
          random: true,
          // animation: { enable: true, speed: 0.5, minimumValue: 0.5 },
          anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
        },
        size: {
          value: { min: 2.5, max: 3 },
          random: true,
          // animation: { enable: true, speed: 2, minimumValue: 2 },
          anim: { enable: true, speed: 2, size_min: 1, sync: false },
        },
        links: {
          enable: true,
          distance: 180,
          color: theme === 'dark' ? '#00BFFF' : '#1a73e8',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,           // slow and calming
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
        },
      },
      interactivity: {
        // detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: ['bubble', 'grab'],   // subtle line connection on hover
          },
          onClick: {
            enable: false,  // clicks won’t trigger anything; keeps focus on content
          },
          resize: { enable: true }, // responsive
        },
        modes: {
          grab: {
            distance: 150,       // how far lines stretch
            line_linked: {
              opacity: 0.2,      // very subtle lines
              color: '#00BFFF',  // matches your accent/theme
            },
          },
          bubble: {
            distance: 100,   // radius around cursor to trigger
            size: 6,         // how much the particle grows
            opacity: 0.8,    // opacity on hover
            duration: 2,     // smooth fade back to original
            color: '#00BFFF' // optional: changes particle color temporarily
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadSlim(tsParticles);
        await tsParticles.load({
          id: 'tsparticles',
          element: particlesContainerRef.current,
          options: particlesOptions,
        });
      } catch (error) {
        console.error('tsParticles failed to load:', error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles.dom().find((c) => c.id === 'tsparticles');
      if (container) {
        container.destroy();
      }
    };
  }, [particlesOptions]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      <div
        id="tsparticles"
        ref={particlesContainerRef}
        className="absolute inset-0 w-full h-full particles-canvas"
        style={{ minHeight: '100vh', zIndex: -10 }} // Lower z-index
      />
      <Analytics />
      <AnalyticsTracker />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;