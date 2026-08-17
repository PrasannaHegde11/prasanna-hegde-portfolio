import { motion } from 'framer-motion';
import { Rocket, Brain, Code, Shield, Users } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Rocket,
    title: 'Product Strategy & Innovation',
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    items: [
      'End-to-end product lifecycle (0→1→100)',
      'Agile/Scrum, OKRs, JTBD, AARRR frameworks',
      'Product roadmapping & strategic planning',
      'Data-driven decision making',
    ],
  },
  {
    icon: Brain,
    title: 'AI/ML & Agentic Systems',
    color: 'text-purple-ai',
    bgColor: 'bg-purple-ai/10',
    items: [
      'Agentic AI development (autonomous systems)',
      'ML: Logistic Regression, Classification, Risk Modeling',
      'NLP & Transformers: BERT, SBERT, Semantic Search',
      'Python: scikit-learn, pandas, Streamlit, CrewAI',
      'MLOps: Model training, automated retraining',
      'Explainable AI: Model interpretability',
    ],
  },
  {
    icon: Code,
    title: 'API & Platform Management',
    color: 'text-navy dark:text-blue-400',
    bgColor: 'bg-navy/10 dark:bg-blue-400/10',
    items: [
      'RESTful API design & B2B SaaS platforms',
      'Developer experience & ecosystem growth',
      'API documentation & sandbox environments',
      'Enterprise integration & mobile-first solutions',
      'Platform scalability & performance optimization',
    ],
  },
  {
    icon: Shield,
    title: 'Regulatory & Compliance',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    items: [
      'GDPR, CCPA, Aadhaar/UIDAI regulations',
      'Data privacy, security & audit readiness',
      'BFSI compliance frameworks',
      'Data governance & quality management',
      'Regulatory reporting automation',
    ],
  },
  {
    icon: Users,
    title: 'Leadership & Execution',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-500/10',
    items: [
      'Cross-functional team leadership',
      'Stakeholder management & executive alignment',
      'P&L oversight & budget management',
      'Go-to-market strategy & growth hacking',
      'Change management & transformation',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
      </div>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 space-y-6"
      >
        <p className="text-lg leading-relaxed text-muted-foreground">
          I don't just manage products — I architect systems that reshape how people, businesses, and governments connect. Right now, I'm pioneering <strong className="text-foreground">India's first Aadhaar Sandbox at UIDAI</strong>, enabling fintechs, government agencies, and enterprises to integrate secure digital identity APIs — and cutting developer onboarding from 6 months to under a week.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Across <strong className="text-foreground">18+ years</strong>, I've gone from zero-to-one (co-founding Urbotask, 5,000 users in 6 months) to enterprise transformation (<strong className="text-foreground">$2.1M+ revenue</strong> from GDPR platforms at Infosys) to national-scale infrastructure (250K+ Aadhaar API transactions). My edge: I move fluently between product strategy, hands-on AI prototyping, and regulatory complexity.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          What sets me apart is the rare combination of <strong className="text-foreground">strategic PM thinking and hands-on technical depth</strong> — prototyping AI systems in Python (BERT, CrewAI, Streamlit) on Monday, aligning a regulatory stakeholder on Tuesday, and shipping a developer-facing API on Friday. I thrive where complexity is highest and the stakes are real.
        </p>
      </motion.div>

      {/* Core Expertise Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={area.title}
            variants={itemVariants}
            className="card-hover bg-card rounded-xl p-6 border border-border shadow-soft"
          >
            <div className={`w-12 h-12 rounded-lg ${area.bgColor} flex items-center justify-center mb-4`}>
              <area.icon className={`h-6 w-6 ${area.color}`} />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">{area.title}</h3>
            <ul className="space-y-2">
              {area.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className={`${area.color} mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0`} style={{ backgroundColor: 'currentColor' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
