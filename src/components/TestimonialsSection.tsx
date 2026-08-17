import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Prasanna brings a rare combination of strategic product thinking and hands-on technical depth. He led the Aadhaar Sandbox from concept to 100+ onboarded organizations with remarkable speed and precision.",
    author: "Senior Leadership, UIDAI",
    title: "Government of India",
    placeholder: true,
  },
  {
    quote: "One of the most impact-driven product managers I've worked with. Prasanna's ability to translate complex regulatory requirements into elegant developer experiences is exceptional.",
    author: "Engineering Leader",
    title: "Former Colleague, Infosys",
    placeholder: true,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          What People Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Feedback from colleagues, managers, and partners
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative bg-card rounded-2xl border border-border p-6 shadow-soft"
          >
            <Quote className="h-8 w-8 text-accent/30 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-5 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">{t.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
            {t.placeholder && (
              <div className="absolute top-3 right-3">
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Placeholder</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-muted-foreground mb-4 text-sm">
          Read all recommendations on LinkedIn
        </p>
        <Button variant="outline" asChild className="gap-2">
          <a
            href="https://www.linkedin.com/in/hegdeprasanna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            View LinkedIn Recommendations
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
