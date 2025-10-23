import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import XIcon from './XIcon';
import profileImage from 'figma:asset/6420d19e4188645ef402bbd99ede7e44848fe928.png';

const occupations = [
  'Full Stack Developer',
  'Frontend Specialist',
  'React Developer',
  'React Native Developer',
  'Tech Writer'
];

const HeroSection = () => {
  
  const [currentOccupationIndex, setCurrentOccupationIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const currentOccupation = occupations[currentOccupationIndex];
    
    if (isTyping) {
      // Typing forward
      if (displayedText.length < currentOccupation.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentOccupation.slice(0, displayedText.length + 1));
        }, 80); // Typing speed - faster for smoother typing
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Wait time before deleting - reduced to show more transitions
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting backward
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40); // Deleting speed - faster for quicker transitions
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next occupation
        setCurrentOccupationIndex((prevIndex) => (prevIndex + 1) % occupations.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentOccupationIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed - slightly faster
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">~/portfolio</span>
              <span className="text-primary">$</span>
              <span className="font-mono text-sm">whoami</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                <span className="text-foreground block mb-2">Fabian Louis</span>
                <span className="text-primary inline-block min-h-[1.2em] font-mono">
                  {displayedText}
                  <span 
                    className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    } transition-opacity`}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Passionate about transforming ideas into seamless digital experiences. Specializing in React and React Native, I craft intuitive, responsive applications that truly connect with users.
            </motion.p>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>fabianlouis99@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:text-primary transition-colors"
                asChild
              >
                <a href="#features">View Projects</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/fabian1ouis', label: 'GitHub', isCustom: false },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/fabian-louis-dev/', label: 'LinkedIn', isCustom: false },
                { icon: null, href: 'https://x.com/_fabianlouis', label: 'X', isCustom: true }
              ].map(({ icon: Icon, href, label, isCustom }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCustom ? <XIcon className="w-4 h-4" /> : Icon && <Icon className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={profileImage}
                  alt="Fabian Louis - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Accent Border */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10 blur-xl" />
              
              {/* Code-style decoration */}
              <motion.div
                className="absolute -top-4 right-4 md:-right-4 bg-card border border-border rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="text-muted-foreground">{"{"}</span>
                <span className="text-primary">status</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-500">"available"</span>
                <span className="text-muted-foreground">{"}"}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 pt-12 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-6 text-center lg:text-left">Tech Stack</p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {['React', 'React Native', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Git', 'GitHub'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 rounded-md bg-card border border-border text-sm text-foreground hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
