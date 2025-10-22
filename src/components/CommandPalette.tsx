import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  FileText, 
  Moon, 
  Sun, 
  Rocket,
  Zap,
  Terminal,
  Code,
  Github,
  Linkedin,
  Twitter as X,
  Download,
  Sparkles
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface Command {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  category: string;
  keywords?: string[];
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const { theme, setTheme } = useTheme();

  // Navigation helper
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  // Easter egg: Konami code
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  // Commands
  const commands: Command[] = [
    // Navigation
    {
      id: 'nav-home',
      label: 'Go to Home',
      icon: Home,
      category: 'Navigation',
      action: () => scrollToSection('#home'),
      keywords: ['home', 'hero', 'start']
    },
    {
      id: 'nav-about',
      label: 'Go to About',
      icon: User,
      category: 'Navigation',
      action: () => scrollToSection('#about'),
      keywords: ['about', 'bio', 'info']
    },
    {
      id: 'nav-resume',
      label: 'Go to Resume',
      icon: FileText,
      category: 'Navigation',
      action: () => scrollToSection('#resume'),
      keywords: ['resume', 'cv', 'experience', 'skills']
    },
    {
      id: 'nav-work',
      label: 'Go to Features',
      icon: Briefcase,
      category: 'Navigation',
      action: () => scrollToSection('#features'),
      keywords: ['features', 'work', 'projects', 'portfolio']
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact',
      icon: Mail,
      category: 'Navigation',
      action: () => scrollToSection('#contact'),
      keywords: ['contact', 'email', 'message', 'reach']
    },
    // Theme
    {
      id: 'theme-toggle',
      label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      icon: theme === 'dark' ? Sun : Moon,
      category: 'Appearance',
      action: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setIsOpen(false);
      },
      keywords: ['theme', 'dark', 'light', 'mode', 'appearance']
    },
    // Social Links
    {
      id: 'social-github',
      label: 'Open GitHub Profile',
      icon: Github,
      category: 'Social',
      action: () => {
        window.open('https://github.com/09c011ab0', '_blank');
        setIsOpen(false);
      },
      keywords: ['github', 'code', 'projects', 'repos']
    },
    {
      id: 'social-linkedin',
      label: 'Open LinkedIn Profile',
      icon: Linkedin,
      category: 'Social',
      action: () => {
        window.open('https://www.linkedin.com/in/fabian-louis-35b809198/', '_blank');
        setIsOpen(false);
      },
      keywords: ['linkedin', 'professional', 'network']
    },
    {
      id: 'social-x',
      label: 'Open X Profile',
      icon: X,
      category: 'Social',
      action: () => {
        window.open('https://x.com/_fabianlouis', '_blank');
        setIsOpen(false);
      },
      keywords: ['twitter', 'x', 'social', 'tweets']
    },
    // Actions
    {
      id: 'action-email',
      label: 'Send Email',
      icon: Mail,
      category: 'Actions',
      action: () => {
        window.location.href = 'mailto:fabianlouis99@gmail.com';
        setIsOpen(false);
      },
      keywords: ['email', 'contact', 'message', 'mail']
    },
    {
      id: 'action-download-resume',
      label: 'Download Resume',
      icon: Download,
      category: 'Actions',
      action: () => {
        // Placeholder - would trigger actual download
        alert('Resume download feature coming soon!');
        setIsOpen(false);
      },
      keywords: ['download', 'resume', 'cv', 'pdf']
    },
    // Easter Eggs
    {
      id: 'easter-rocket',
      label: '🚀 Launch Rocket Mode',
      icon: Rocket,
      category: 'Easter Eggs',
      action: () => {
        // Fun animation effect
        document.body.style.animation = 'shake 0.5s';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 500);
        setIsOpen(false);
      },
      keywords: ['rocket', 'launch', 'fun', 'easter']
    },
    {
      id: 'easter-sparkles',
      label: '✨ Add Sparkles',
      icon: Sparkles,
      category: 'Easter Eggs',
      action: () => {
        // Create sparkle effect
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = '2rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'fadeOut 2s forwards';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
          }, i * 100);
        }
        setIsOpen(false);
      },
      keywords: ['sparkles', 'fun', 'magic', 'easter']
    },
    {
      id: 'easter-matrix',
      label: '🟢 Matrix Mode',
      icon: Terminal,
      category: 'Easter Eggs',
      action: () => {
        document.body.style.filter = 'hue-rotate(90deg) saturate(3)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 3000);
        setIsOpen(false);
      },
      keywords: ['matrix', 'green', 'terminal', 'easter']
    }
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter(command => {
    const searchLower = search.toLowerCase();
    return (
      command.label.toLowerCase().includes(searchLower) ||
      command.category.toLowerCase().includes(searchLower) ||
      command.keywords?.some(keyword => keyword.includes(searchLower))
    );
  });

  // Group commands by category
  const groupedCommands = filteredCommands.reduce((acc, command) => {
    if (!acc[command.category]) {
      acc[command.category] = [];
    }
    acc[command.category].push(command);
    return acc;
  }, {} as Record<string, Command[]>);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Open/close command palette
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
      setSearch('');
      setSelectedIndex(0);
    }

    // Konami code detection
    const newCode = [...konamiCode, e.key].slice(-10);
    setKonamiCode(newCode);
    if (newCode.join(',') === konamiSequence.join(',')) {
      // Konami code activated!
      setIsOpen(true);
      setSearch('easter');
      setKonamiCode([]);
    }

    // Close on Escape
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      setSearch('');
    }

    // Navigation in command palette
    if (isOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    }
  }, [isOpen, filteredCommands, selectedIndex, konamiCode]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Show hint on first visit
  useEffect(() => {
    const hasSeenHint = localStorage.getItem('commandPaletteHintSeen');
    if (!hasSeenHint) {
      setTimeout(() => {
        setShowHint(true);
        setTimeout(() => {
          setShowHint(false);
          localStorage.setItem('commandPaletteHintSeen', 'true');
        }, 5000);
      }, 2000);
    }
  }, []);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      {/* Keyboard Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 glass-strong p-4 rounded-xl shadow-lg max-w-xs"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm mb-2">
                  <strong>Pro tip:</strong> Press{' '}
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd> or{' '}
                  <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+K</kbd>{' '}
                  for quick navigation
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[10vh] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="glass-strong rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
                {/* Search Input */}
                <div className="flex items-center space-x-3 px-4 py-4 border-b border-border/50">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    autoFocus
                  />
                  <kbd className="hidden sm:block px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                    ESC
                  </kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="px-4 py-8 text-center text-muted-foreground">
                      <Code className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No commands found</p>
                      <p className="text-sm mt-1">Try searching for navigation, theme, or social</p>
                    </div>
                  ) : (
                    <div className="py-2">
                      {Object.entries(groupedCommands).map(([category, categoryCommands]) => (
                        <div key={category} className="mb-2">
                          <div className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                            {category}
                          </div>
                          {categoryCommands.map((command, index) => {
                            const globalIndex = filteredCommands.indexOf(command);
                            const isSelected = globalIndex === selectedIndex;
                            const Icon = command.icon;

                            return (
                              <motion.button
                                key={command.id}
                                onClick={() => command.action()}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full px-4 py-3 flex items-center space-x-3 transition-colors ${
                                  isSelected
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-foreground hover:bg-muted/50'
                                }`}
                                whileHover={{ x: 4 }}
                              >
                                <Icon className={`w-5 h-5 flex-shrink-0 ${
                                  isSelected ? 'text-primary' : 'text-muted-foreground'
                                }`} />
                                <span className="flex-1 text-left">{command.label}</span>
                                {isSelected && (
                                  <kbd className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                                    ↵
                                  </kbd>
                                )}
                              </motion.button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd>
                      <span>Navigate</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <kbd className="px-1.5 py-0.5 bg-muted rounded">↵</kbd>
                      <span>Select</span>
                    </span>
                  </div>
                  <span>
                    {filteredCommands.length} {filteredCommands.length === 1 ? 'command' : 'commands'}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px) rotate(-5deg); }
          75% { transform: translateX(10px) rotate(5deg); }
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-50px) scale(0.5); }
        }
      `}</style>
    </>
  );
};

export default CommandPalette;