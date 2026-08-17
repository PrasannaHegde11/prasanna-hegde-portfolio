import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured-projects', label: 'Featured Projects' },
  { href: '#more-projects', label: 'All Projects' },
  { href: '#methodology', label: 'Methodology' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-display font-bold text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Prasanna Hegde
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="rounded-full"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href="/Prasanna_Hegde_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-display font-bold text-lg">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex-1 p-4" aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t border-border">
                  <Button
                    className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                    asChild
                  >
                    <a href="/Prasanna_Hegde_Resume.pdf" download>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
