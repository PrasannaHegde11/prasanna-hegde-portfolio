import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { prefix: '', value: '100+', label: 'Organizations Onboarded' },
  { prefix: '', value: '250K+', label: 'API Transactions Processed' },
  { prefix: '$', value: '2.1M+', label: 'Revenue Generated' },
  { prefix: '', value: '18+', label: 'Years Product Leadership' },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-1/4 w-80 h-80 bg-purple-ai/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
              >
                <MapPin className="h-4 w-4" />
                <span>Bengaluru, India</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal/20 backdrop-blur-sm rounded-full text-white/90 text-sm border border-teal/30"
              >
                <Briefcase className="h-4 w-4 text-teal-light" />
                <span>Available for Consulting · Advisory · Speaking</span>
              </motion.div>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Building Products at the Intersection of{' '}
              <span className="block mt-2">
                <span className="gradient-text">AI, Identity & National Scale</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl lg:max-w-none">
              Pioneering India's Aadhaar Sandbox at UIDAI — cutting developer onboarding from 6 months to 1 week. 18+ years shipping AI-powered products across fintech, enterprise, and public sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-teal text-white hover:bg-teal-light hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                View Featured Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
              <a href="/Prasanna_Hegde_Resume.pdf" download="Prasanna_Hegde_Resume.pdf">
              Download Resume
             </a>

              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-teal shadow-xl overflow-hidden">
  <img 
    src="/profile.jpg" 
    alt="Prasanna Hegde" 
    className="w-full h-full object-cover object-top"
  />
</div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal flex items-center justify-center shadow-lg">
                <span className="text-2xl md:text-3xl">👋</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                  {stat.prefix}{stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/50"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
