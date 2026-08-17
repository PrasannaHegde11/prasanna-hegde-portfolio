import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured-projects', label: 'Featured Projects' },
  { href: '#more-projects', label: 'All Projects' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/hegdeprasanna', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hegdeprasanna11@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/PrasannaHegde11', label: 'GitHub' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Copyright */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Prasanna Hegde</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Product Strategy & Innovation Lead specializing in AI/ML, Digital Identity, and Fintech. Building impactful products that transform industries.
            </p>
            <p className="text-white/40 text-sm mt-4">
              © {new Date().getFullYear()} Prasanna Hegde. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-400" /> using Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};
