import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { moreProjects } from '@/data/projects';

const getBadgeClass = (variant: string) => {
  const classes: Record<string, string> = {
    green: 'badge-green',
    blue: 'badge-navy',
    purple: 'badge-purple',
    orange: 'badge-orange',
    gold: 'badge-gold',
    gray: 'bg-muted text-muted-foreground border-border',
    teal: 'badge-teal',
  };
  return classes[variant] || classes.gray;
};

export const MoreProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="more-projects" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          More Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Additional enterprise, telecom, and consulting engagements demonstrating breadth of experience
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreProjects.map((project) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover bg-card rounded-xl border border-border shadow-soft overflow-hidden"
          >
            <div className="p-5">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className={`text-xs ${getBadgeClass(badge.variant)}`}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <p className="text-xs text-muted-foreground mb-1">{project.timeline}</p>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>

              {/* Metrics Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.slice(0, 2).map((metric, index) => (
                  <div key={index} className={`bg-muted/50 rounded-md px-3 py-1.5 ${(project.category?.toLowerCase().includes("artificial intelligence") || project.category?.toLowerCase().includes("natural language")) ? "ring-2 ring-purple-500/60 shadow-lg shadow-purple-500/20" : ""}`}>
                    <span className="font-semibold text-sm text-foreground">{metric.value}</span>
                    <span className="text-xs text-muted-foreground ml-1">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full justify-center gap-2 text-accent hover:text-accent hover:bg-accent/10"
              >
                {expandedId === project.id ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View Details <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                    {/* All Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, index) => (
                          <div key={index} className="flex justify-between items-center bg-muted/30 rounded-md px-3 py-2">
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                            <span className="font-semibold text-sm text-foreground">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs badge-teal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-purple-400/60 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                  title="View on GitHub"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
