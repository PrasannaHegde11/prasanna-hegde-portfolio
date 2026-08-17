import { motion } from 'framer-motion';
import { MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { careerPositions } from '@/data/career';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const CareerSection = () => {
  return (
    <section id="career" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Career Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          20+ years building products across startups, enterprises, and national platforms
        </motion.p>
      </div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-purple-ai to-navy transform md:-translate-x-1/2" />

        {careerPositions.map((position, index) => (
          <motion.div
            key={position.id}
            variants={itemVariants}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background transform -translate-x-1/2 z-10">
              {position.current && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal rounded-full animate-ping" />
              )}
            </div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="card-hover bg-card rounded-xl border border-border p-6 shadow-soft">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {position.current && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-teal/10 text-teal rounded-full mb-2">
                        Current Role
                      </span>
                    )}
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {position.role}
                    </h3>
                    <p className="text-accent font-medium">{position.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {position.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {position.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Empty space for alignment */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
