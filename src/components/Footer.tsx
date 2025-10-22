import { motion } from 'motion/react';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import XIcon from './XIcon';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/09c011ab0', label: 'GitHub', isCustom: false },
    { icon: null, href: 'https://x.com/_fabianlouis', label: 'X', isCustom: true },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/fabian-louis-35b809198/', label: 'LinkedIn', isCustom: false },
    { icon: Mail, href: 'mailto:fabianlouis99@gmail.com', label: 'Email', isCustom: false },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Expertise', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-mono">
                <span className="text-foreground">fab</span>
                <span className="text-primary">.</span>
                <span className="text-muted-foreground">dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full stack developer crafting elegant solutions from Nairobi, Kenya.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm mb-4 text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {social.isCustom ? (
                    <XIcon className="w-3.5 h-3.5" />
                  ) : (
                    social.icon && <social.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Fabian Louis. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" /> and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
