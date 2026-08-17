import { motion } from 'framer-motion';
import { Trophy, Star, Users, Award } from 'lucide-react';

const awards = [
  {
    icon: Star,
    label: 'Stanford Seed Spark 2024',
    sublabel: 'Startup Program Selectee',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Trophy,
    label: 'Karnataka Startup Competition',
    sublabel: 'National Finalist',
    color: 'text-teal',
    bg: 'bg-teal/10 border-teal/20',
  },
  {
    icon: Award,
    label: 'IIM Lucknow',
    sublabel: 'Executive Program — Data Science & AI',
    color: 'text-purple-ai',
    bg: 'bg-purple-ai/10 border-purple-ai/20',
  },
  {
    icon: Users,
    label: '100+ Organizations',
    sublabel: 'Onboarded on Aadhaar Sandbox',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

export const AwardsStrip = () => {
  return (
    <section className="py-8 border-y border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-full border ${award.bg} backdrop-blur-sm`}
            >
              <award.icon className={`h-5 w-5 ${award.color} flex-shrink-0`} />
              <div>
                <p className={`text-sm font-semibold ${award.color}`}>{award.label}</p>
                <p className="text-xs text-muted-foreground">{award.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
