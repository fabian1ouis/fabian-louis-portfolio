import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Expertise' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
          aria-label={`Navigate to ${section.label}`}
        >
          {/* Dot */}
          <div className="relative">
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary border-primary shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                  : 'bg-background border-border group-hover:border-primary/60 group-hover:bg-primary/20'
              }`}
            />
            {/* Active glow effect */}
            {activeSection === section.id && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none scale-95 group-hover:scale-100">
            <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 text-sm whitespace-nowrap text-foreground shadow-xl">
              {section.label}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-border -mr-px" />
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-card/95 absolute top-1/2 -translate-y-1/2 right-0" />
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default ScrollProgress;
