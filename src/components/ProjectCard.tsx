import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

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

const getCategoryColor = (category: string) => {
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('ml')) {
    return 'border-l-purple-ai';
  }
  if (category.toLowerCase().includes('national') || category.toLowerCase().includes('government')) {
    return 'border-l-teal';
  }
  if (category.toLowerCase().includes('startup') || category.toLowerCase().includes('marketplace')) {
    return 'border-l-orange-500';
  }
  if (category.toLowerCase().includes('enterprise') || category.toLowerCase().includes('crm')) {
    return 'border-l-navy dark:border-l-blue-400';
  }
  if (category.toLowerCase().includes('compliance') || category.toLowerCase().includes('regulatory')) {
    return 'border-l-emerald-500';
  }
  return 'border-l-muted-foreground';
};

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`card-hover bg-card rounded-xl border border-border shadow-soft overflow-hidden border-l-4 ${getCategoryColor(project.category)}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.badges.map((badge, index) => (
            <Badge key={index} variant="outline" className={`text-xs ${getBadgeClass(badge.variant)}`}>
              {badge.label}
            </Badge>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{project.timeline}</p>
            <h3 className="font-display font-semibold text-xl text-foreground">{project.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{project.tagline}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {project.metrics.slice(0, 4).map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="font-display font-bold text-lg text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 5).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{project.techStack.length - 5} more
            </Badge>
          )}
        </div>

        {/* Expand/Collapse Button */}
        {featured && (project.challenge || project.solution || project.businessImpact) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-center gap-2 text-accent hover:text-accent hover:bg-accent/10"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && featured && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-6 space-y-6">
              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{project.challenge}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className={`bg-muted/30 rounded-lg p-4 ${(project.category?.toLowerCase().includes("artificial intelligence") || project.category?.toLowerCase().includes("natural language")) ? "ring-2 ring-purple-500/60 shadow-lg shadow-purple-500/20" : ""}`}>
                        <h5 className="font-medium text-foreground mb-2">{feature.title}</h5>
                        <ul className="space-y-1">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Impact */}
              {project.businessImpact && project.businessImpact.length > 0 && (
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Business Impact</h4>
                  <ul className="space-y-2">
                    {project.businessImpact.map((impact, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-display font-semibold text-foreground mb-3">Product Learnings</h4>
                  <ol className="space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="font-bold text-accent">{index + 1}.</span>
                        {learning}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Full Tech Stack */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Skills Demonstrated</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs badge-teal">
                      {skill}
                    </Badge>
                  ))}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
