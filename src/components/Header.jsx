import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 glass-pill px-6 py-3 rounded-full flex items-center gap-8"
        >
          <div className="font-royale font-bold text-xl tracking-widest text-primary mr-4 uppercase">
            LUMIÈRE
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-primary/70 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pl-4 border-l border-primary/20">
            <ThemeToggle />
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
