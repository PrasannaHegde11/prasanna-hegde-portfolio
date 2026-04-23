export interface Project {
  id: string;
  title: string;
  tagline: string;
  timeline: string;
  category: string;
  badges: { label: string; variant: 'green' | 'blue' | 'purple' | 'orange' | 'gold' | 'gray' | 'teal' }[];
  challenge?: string;
  solution?: string;
  metrics: { value: string; label: string }[];
  features?: { title: string; items: string[] }[];
  businessImpact?: string[];
  learnings?: string[];
  techStack: string[];
  skills: string[];
  featured: boolean;
  githubUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'uidai-sandbox',
    title: 'UIDAI Aadhaar Sandbox Platform',
    tagline: "Pioneered India's first Aadhaar Sandbox enabling secure digital identity testing for 100+ organizations",
    timeline: 'Jan 2025 - Present',
    category: 'National Scale Infrastructure',
    badges: [
      { label: 'Current', variant: 'green' },
      { label: 'National Scale', variant: 'blue' },
      { label: '⭐ Featured', variant: 'gold' },
    ],
    challenge: "India needed a secure, scalable testing environment for organizations to integrate Aadhaar-based digital identity services without compromising national security or requiring lengthy approval processes (previously 6+ months).",
    solution: "Built the world's first Aadhaar Sandbox—a 0→1→100 product enabling fintechs, government agencies, and enterprises to integrate secure Aadhaar APIs through automated self-service, interactive documentation, and open licensing. Led product strategy for Aadhaar Login with multi-modal biometric authentication (OTP, fingerprint, face). Directed AI-driven contactless biometric authentication prototype using open-source ML models.",
    metrics: [
      { value: '100+', label: 'Organizations Onboarded' },
      { value: '250K+', label: 'API Transactions Processed' },
      { value: '86%', label: 'Faster Onboarding' },
      { value: '25+', label: 'Secure Integrations' },
    ],
    businessImpact: [
      'Dramatically accelerated developer onboarding from 6+ months to approximately 1 week',
      'Enabled secure API testing without production environment access',
      'Drove ecosystem adoption and innovation in digital identity space',
      'Collaborated with CTO and Head of Engineering & Innovation for cross-functional delivery',
    ],
    techStack: ['RESTful APIs', 'Biometric Authentication', 'AI/ML', 'DevOps', 'API Gateway', 'Compliance Frameworks', 'Developer Portal'],
    skills: ['API Platform Design', 'Developer Experience', 'Product Strategy', 'Biometric Security', 'National-Scale Systems', 'Ecosystem Growth', 'Compliance Management'],
    featured: true,
  },
  {
    id: 'credit-risk-ai',
    title: 'AI-Powered Credit Risk Assessment Agent',
    tagline: 'Autonomous agentic AI system for credit risk analysis with self-learning capabilities and explainable insights',
    timeline: 'Fintech AI Product',
    category: 'Artificial Intelligence & Machine Learning',
    badges: [
      { label: 'AI/ML', variant: 'purple' },
      { label: 'Agentic System', variant: 'purple' },
      { label: '⭐ Featured', variant: 'gold' },
    ],
    challenge: "Financial institutions struggled with time-consuming manual credit risk assessment prone to human bias, static risk models that become obsolete as customer behavior changes, inability to quickly adjust risk thresholds, and lack of transparency in risk decisions affecting stakeholder trust.",
    solution: "Built an end-to-end agentic AI system that autonomously assesses credit risk using payment history, demographics, and credit utilization patterns. System features self-adaptation through automated retraining when new customer data is uploaded, generates quantitative risk scores (0-100%) with HIGH/MEDIUM/LOW segmentation, recommends specific actions (reduce/suspend credit, monitor closely, maintain/increase limits), and provides explainable insights through interactive 5-tab Streamlit dashboard.",
    metrics: [
      { value: '<5 Sec', label: 'Process 100+ portfolios' },
      { value: '75-85%', label: 'Model accuracy' },
      { value: '60-70%', label: 'Defaulter detection' },
      { value: '30K+', label: 'Records handled' },
    ],
    features: [
      {
        title: 'Agentic Capabilities',
        items: [
          'Autonomous operation without human intervention',
          'Self-learning with automated model retraining',
          'Adaptive decision-making based on configurable business rules',
          'Continuous monitoring with analysis history tracking',
        ],
      },
      {
        title: 'Business Features',
        items: [
          'Configurable risk thresholds (30-70% adjustment range)',
          'Flexible top-N analysis (5-50 customers)',
          'Multi-source data support (standard datasets, custom CSVs)',
          'Complete analysis report export',
        ],
      },
    ],
    businessImpact: [
      '70% faster credit decisions (seconds vs. hours manually)',
      'Proactive identification of 60-70% of potential defaulters',
      'Optimized credit allocation with data-driven limit adjustments (±10% to 50%)',
      'Regulatory compliance through auditable decision trail',
    ],
    learnings: [
      'Configurability drives adoption - business users need control over thresholds',
      'Explainability is non-negotiable in financial AI systems',
      'Progressive disclosure improves UX - multi-tab interface prevents overload',
      'Automation enables agency - self-retraining transforms static models',
    ],
    techStack: ['Python', 'scikit-learn', 'pandas', 'numpy', 'Streamlit', 'Logistic Regression', 'StandardScaler', 'Feature Engineering', 'Model Persistence'],
    skills: ['Agentic AI', 'Machine Learning', 'Credit Risk Modeling', 'Product Management', 'Data Engineering', 'Feature Engineering', 'Python Development', 'Streamlit UI'],
    featured: true,
    githubUrl: 'https://github.com/PrasannaHegde11/credit-risk-ai',
  },
  {
    id: 'resume-jd-ai',
    title: 'AI-Powered Resume-JD Alignment System',
    tagline: 'NLP-powered recruitment system using BERT/SBERT transformers for semantic candidate-job matching and skill gap analysis',
    timeline: 'HR Tech AI Product',
    category: 'Natural Language Processing & AI',
    badges: [
      { label: 'AI/ML', variant: 'purple' },
      { label: 'NLP', variant: 'purple' },
      { label: '⭐ Featured', variant: 'gold' },
    ],
    challenge: "Recruitment teams struggled with time-consuming manual resume screening prone to subjective bias, difficulty identifying skill gaps and true candidate-role compatibility, inability to efficiently search large candidate databases for relevant matches, and lack of quantitative metrics for explaining hiring recommendations to stakeholders.",
    solution: "Built an end-to-end AI recruitment system that autonomously analyzes resumes against job descriptions using transformer-based semantic understanding (BERT/SBERT). System generates quantitative alignment scores (0-100%) with skill gap identification, ranks candidate profiles by relevance with explainable matching criteria, provides actionable insights through compatibility breakdowns and keyword matching, and surfaces top-N candidates from databases based on semantic similarity.",
    metrics: [
      { value: '70%', label: 'Time reduction' },
      { value: '<30 Sec', label: 'Process 100+ resumes' },
      { value: '85-92%', label: 'Semantic matching accuracy' },
      { value: '1K+/Min', label: 'Profile search capacity' },
    ],
    businessImpact: [
      'Reduced manual resume review time by 70%',
      'Data-driven candidate shortlisting increases hire success rates',
      'Scalable processing: 1000+ profiles in minutes vs. days manually',
      'Transparent quantitative scores enable objective hiring discussions',
    ],
    learnings: [
      'Explainability drives adoption - recruiters need transparency in match reasoning',
      'Domain-specific tuning matters - general models benefit from job-resume fine-tuning',
      'User workflow integration is critical - standalone tools fail without fitting existing processes',
      'Semantic understanding outperforms keyword matching for cross-format skill detection',
    ],
    techStack: ['Python', 'BERT/SBERT', 'SentenceTransformers', 'spaCy', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'Text Preprocessing'],
    skills: ['Natural Language Processing', 'Transformer Models', 'Product Management', 'AI/ML Pipeline Development', 'Recruitment Domain', 'Feature Engineering', 'Semantic Search'],
    featured: true,
    githubUrl: 'https://github.com/PrasannaHegde11/resume-jd-ai',
  },
  {
    id: 'urbotask',
    title: 'Urbotask Marketplace Platform',
    tagline: 'Co-founded P2P marketplace connecting 5,000+ users with service providers for everyday tasks',
    timeline: 'Dec 2020 - Sep 2024',
    category: 'Marketplace & Startup',
    badges: [
      { label: '0→1 Startup', variant: 'orange' },
      { label: 'Co-founder', variant: 'orange' },
      { label: '⭐ Featured', variant: 'gold' },
    ],
    challenge: "Build a trusted peer-to-peer marketplace from scratch in the fragmented gig economy, connecting individuals and businesses with reliable service providers while ensuring seamless user experience, secure transactions, and high task completion rates.",
    solution: "Founded and built Urbotask—a secure digital marketplace with recommendation engine, automated workflows, and user feedback loops. Enhanced user experience through data-driven iteration, implemented robust security protocols and payment integration, developed user-centric customer success strategies, and built cross-functional teams for product, engineering, and operations.",
    metrics: [
      { value: '5,000+', label: 'Users in 6 months' },
      { value: '40%', label: 'MAU rate' },
      { value: '85%', label: 'Task completion' },
      { value: 'NPS ≈60', label: 'Customer satisfaction' },
    ],
    features: [
      {
        title: 'Strategic & Financial',
        items: [
          'Built and executed GTM and financial strategies from scratch',
          'Achieved 10% YoY financial growth',
          'Karnataka Startup Competition Finalist',
          'Stanford Seed Spark 2024 selection',
        ],
      },
      {
        title: 'Team & Operations',
        items: [
          'Hired and managed cross-functional development, UX, and ops teams',
          'Boosted team productivity by ~40%',
          'Accelerated feature delivery timelines',
        ],
      },
    ],
    businessImpact: [
      'Validated market demand and attracted early adopters and investors',
      'Built loyal user base beyond transactions through community engagement',
      'Scaled platform for sustainable growth while maintaining security',
      'Positioned for continued expansion with optimized infrastructure',
    ],
    techStack: ['React', 'Node.js', 'Payment Integrations', 'Recommendation Engine', 'Analytics Dashboard', 'MongoDB', 'RESTful APIs', 'AWS'],
    skills: ['Marketplace Design', 'Product-Market Fit', 'GTM Strategy', 'Growth Hacking', 'P&L Management', 'Team Leadership', 'User Research', '0→1 Product Development'],
    featured: true,
  },
  {
    id: 'gdpr-compliance',
    title: 'GDPR Compliance & Regulatory Reporting Platform',
    tagline: 'Built automated regulatory reporting platform generating $2.1M+ revenue and $600K presales for UK bank',
    timeline: 'Infosys 2010-2020',
    category: 'Regulatory Technology & BFSI',
    badges: [
      { label: 'Enterprise', variant: 'blue' },
      { label: 'Compliance', variant: 'green' },
    ],
    challenge: "UK bank struggled with data sprawl and cumbersome manual regulatory reporting, grappling with compliance risks, operational roadblocks, lack of actionable insights, inability to meet tight regulatory deadlines, and potential fines for non-compliance.",
    solution: "Designed and implemented a modular regulatory reporting platform with automated ETL processes, established data governance policies and quality initiatives, built secure integrated automation platform compliant with GDPR regulations, enabled real-time reporting with enhanced data accessibility, and collaborated across finance, compliance, and IT teams to secure buy-in and define requirements.",
    metrics: [
      { value: '$2.1M+', label: 'Revenue generated' },
      { value: '$600K', label: 'Presales secured' },
      { value: '40%', label: 'Faster reporting' },
      { value: '20%', label: 'Effort reduction' },
    ],
    businessImpact: [
      'Automated reporting processes minimized errors',
      'Ensured timely compliance with regulatory requirements',
      'Real-time reporting empowered management with actionable insights',
      'Implemented comprehensive data governance policies',
    ],
    techStack: ['ETL Tools', 'Data Governance Frameworks', 'Regulatory Reporting Systems', 'Analytics Dashboards', 'SQL Databases', 'Data Quality Tools'],
    skills: ['GDPR/CCPA Compliance', 'Data Governance', 'Data Architecture', 'Analytics Design', 'Product Roadmapping', 'Stakeholder Management', 'BFSI Domain'],
    featured: true,
  },
  {
    id: 'oracle-siebel',
    title: 'Oracle CX & Siebel Platform Consolidation',
    tagline: 'Unified 27+ legacy CRM/CX systems into mobile-first platform, improving operational efficiency by 30%',
    timeline: 'Infosys - APAC Telecom',
    category: 'Enterprise CRM & Customer Experience',
    badges: [
      { label: 'Enterprise', variant: 'blue' },
      { label: 'Integration', variant: 'blue' },
    ],
    challenge: "Leading APAC telecom company faced fragmented customer experience with disparate data across Oracle CX SAAS solutions and on-premise Siebel creating silos and hindering seamless customer journeys. Operational inefficiencies from legacy systems lacking scalability and mobile accessibility resulted in manual processes and decreased productivity.",
    solution: "Designed end-to-end processes leveraging RODOD ecosystem (ATG, Siebel, OSM, AIA, BRM, POS, UIM) for seamless data exchange and unified customer experience. Crafted high-level mobile-friendly TEM system in Siebel tailored to client needs. Orchestrated factory model to revamp 27 legacy applications boosting scalability, accessibility, and future adaptability. Conceptualized skilled Center of Excellence for smooth implementation and ongoing platform optimization.",
    metrics: [
      { value: '27+', label: 'Legacy systems unified' },
      { value: '30%', label: 'Efficiency boost' },
      { value: 'Mobile-First', label: 'Enhanced accessibility' },
      { value: 'Improved', label: 'Customer satisfaction' },
    ],
    businessImpact: [
      'Integrated CX eliminated data silos',
      'Boosted customer satisfaction and loyalty',
      'Streamlined TEM system with mobile access',
      'Modernized platform empowered agility',
    ],
    techStack: ['Siebel CRM', 'Oracle CX Cloud', 'ATG', 'OSM', 'AIA', 'BRM', 'POS', 'UIM', 'Siebel Open UI', 'Mobile Platforms'],
    skills: ['CRM Strategy', 'Enterprise Integration', 'E2E Architecture', 'Solution Design', 'Project Estimation', 'Delivery Management', 'Center of Excellence', 'GTM Strategy'],
    featured: true,
  },
  {
    id: 'govt-portal',
    title: 'Government Portal Modernization & Citizen Services',
    tagline: 'Modernized government portal serving citizens, reducing frustration by 25% and manual processes by 30%',
    timeline: 'Infosys - North America Government',
    category: 'Government Technology & Civic Tech',
    badges: [
      { label: 'Public Sector', variant: 'gray' },
      { label: 'Digital Transformation', variant: 'teal' },
    ],
    challenge: "North American government organization faced cluttered and outdated online portal hindering citizens' access to crucial services, increasing reliance on manual processes, impacting operational efficiency, and eroding trust in government digital services.",
    solution: "Led product definition and strategy for portal modernization, capturing stakeholder requirements through workshops and interviews, conducting fit-gap analyses, developing comprehensive roadmap. Defined portal's core functionalities ensuring alignment with user needs and organizational objectives. Worked with designers to create user-friendly and intuitive interface prioritizing accessibility and ease of navigation. Partnered with technical teams to define system architecture and technology stack ensuring scalability, security, and seamless integration with existing government systems.",
    metrics: [
      { value: '25%', label: 'Reduced citizen frustration' },
      { value: '30%', label: 'Manual processes cut' },
      { value: '30%', label: 'Efficiency increase' },
      { value: 'Enhanced', label: 'Transparency' },
    ],
    businessImpact: [
      'Streamlined portal boosted service access',
      'Automated workflows freed staff for higher-value work',
      'Clearer information fostered transparency',
      'Robust architecture ensures secure data storage',
    ],
    techStack: ['Portal Platforms', 'UI/UX Design Tools', 'Agile Methodologies', 'Security Frameworks', 'Integration Middleware', 'CMS', 'Accessibility Tools'],
    skills: ['UI/UX Design', 'Government Technology', 'Product Strategy', 'Stakeholder Management', 'Requirement Elicitation', 'Solution Architecture', 'Accessibility Standards'],
    featured: true,
  },
];

export const moreProjects: Project[] = [
  {
    id: 'data-analytics',
    title: 'Data & Analytics Platform Consolidation',
    tagline: 'Unified fragmented data ecosystem for smart buildings, enabling optimized building performance and valuable customer insights',
    timeline: 'Infosys - Electrical & Home Automation Solutions',
    category: 'Data Architecture & Analytics',
    badges: [{ label: 'Enterprise', variant: 'blue' }],
    metrics: [
      { value: 'Empowered', label: 'Data-driven decisions' },
      { value: 'Optimized', label: 'Building operations' },
      { value: 'Enhanced', label: 'Market leadership' },
    ],
    techStack: ['Data Architecture', 'Analytics Frameworks', 'Predictive Models', 'BI Dashboards', 'Data Governance'],
    skills: ['Data Strategy', 'Analytics Design', 'Product Roadmapping', 'Stakeholder Management', 'Change Management'],
    featured: false,
  },
  {
    id: 'oracle-marketing',
    title: 'Oracle Marketing Cloud Automation',
    tagline: 'Documented comprehensive Oracle Eloqua L0-L4 processes and integrated Marketing Cloud with Salesforce for unified data platform',
    timeline: 'Infosys - Internal & External Marketing Operations',
    category: 'Marketing Technology',
    badges: [{ label: 'MarTech', variant: 'teal' }],
    metrics: [
      { value: '20%', label: 'Manual effort reduction' },
      { value: '15%', label: 'Higher conversion rates' },
      { value: '10%', label: 'Event registration boost' },
    ],
    techStack: ['Oracle Marketing Cloud', 'Salesforce', 'Marketing Automation', 'Integration Architecture', 'Event Management'],
    skills: ['Marketing Automation', 'Process Optimization', 'Solution Design', 'Technical Implementation', 'Integration Architecture'],
    featured: false,
  },
  {
    id: 'rodod-ecosystem',
    title: 'RODOD Ecosystem Integration',
    tagline: 'Designed comprehensive E2E processes across ATG, Siebel, OSM, AIA, BRM, POS, UIM for seamless telecom operations',
    timeline: 'Infosys - APAC Telecom',
    category: 'Telecom Operations',
    badges: [{ label: 'Telecom', variant: 'blue' }],
    metrics: [
      { value: 'Boosted', label: 'Operational performance' },
      { value: 'Empowered', label: 'User productivity' },
      { value: 'Synchronized', label: 'Workflows' },
    ],
    techStack: ['ATG', 'Siebel', 'OSM', 'AIA', 'BRM', 'POS', 'UIM', 'RODOD Ecosystem'],
    skills: ['E2E Architecture', 'Strategic Vision', 'Use Case Development', 'Project Estimation', 'GTM Strategy'],
    featured: false,
  },
  {
    id: 'sales-mobile-app',
    title: 'Consultative Sales Mobile App',
    tagline: 'Built mobile app for telecom sales teams to present complex product bundles with real-time data and personalized recommendations',
    timeline: 'Infosys - Telecom Sales Enablement',
    category: 'Mobile Product Management',
    badges: [{ label: 'Mobile', variant: 'teal' }],
    metrics: [
      { value: 'Increased', label: 'Sales conversion' },
      { value: 'Improved', label: 'Customer satisfaction' },
      { value: 'Enhanced', label: 'Team productivity' },
    ],
    techStack: ['WebCenter Site', 'ATG', 'Mobile Development', 'UI/UX Design', 'Real-time Data Integration'],
    skills: ['Mobile Product Management', 'Market Analysis', 'Requirements Management', 'UI Design', 'Agile Collaboration'],
    featured: false,
  },
  {
    id: 'crm-optimization',
    title: 'Telecom CRM Optimization & SR Automation',
    tagline: 'Optimized CRM product model for faster performance and automated SR capture via Task-Based UI',
    timeline: 'Infosys - Telecom',
    category: 'CRM Performance & Automation',
    badges: [{ label: 'CRM', variant: 'blue' }],
    metrics: [
      { value: 'Significant', label: 'Performance improvement' },
      { value: 'Reduced', label: 'Manual effort' },
      { value: 'Improved', label: 'Data accuracy' },
    ],
    techStack: ['Siebel CRM', 'Task-Based UI', 'Workflow Automation', 'Performance Optimization Tools'],
    skills: ['Solution Architecture', 'Performance Optimization', 'Problem-Solving', 'Project Management', 'Data Analysis'],
    featured: false,
  },
  {
    id: 'marketing-fitgap',
    title: 'Marketing Automation Fit-Gap Analysis',
    tagline: 'Provided strategic recommendations for marketing automation platforms and conducted Fit-Gap analysis for global clients',
    timeline: 'Infosys - US Risk Consulting & European Media',
    category: 'Consulting & Marketing Technology',
    badges: [{ label: 'Consulting', variant: 'gray' }],
    metrics: [
      { value: 'Improved', label: 'Marketing efficiency' },
      { value: 'Higher', label: 'Campaign ROI' },
      { value: 'Successful', label: 'GTM execution' },
    ],
    techStack: ['Marketing Automation Platforms', 'Lead Management Systems', 'Campaign Management Tools', 'Integration Technologies'],
    skills: ['Client Consulting', 'Needs Analysis', 'Solution Design', 'Implementation Support', 'GTM Strategy'],
    featured: false,
  },
  {
    id: 'event-management',
    title: 'Training Center Event Management System',
    tagline: 'Built centralized event management system within existing CRM platform for training center operations with automated workflows',
    timeline: 'Infosys - US Manufacturing Company',
    category: 'CRM & Event Management',
    badges: [{ label: 'CRM', variant: 'blue' }],
    metrics: [
      { value: 'Increased', label: 'Operational efficiency' },
      { value: 'Improved', label: 'Communication' },
      { value: 'Enhanced', label: 'Data visibility' },
    ],
    techStack: ['CRM Platform', 'Event Management Workflows', 'Reporting Tools', 'Integration'],
    skills: ['Product Vision', 'User-Centric Design', 'Requirements Architecture', 'Technical Writing', 'Knowledge Transfer'],
    featured: false,
  },
  {
    id: 'pharma-crm',
    title: 'Pharma CRM Integration & Enhancement',
    tagline: 'Enhanced existing CRM application by integrating DMAB product for improved data management, automation, and decision-making',
    timeline: 'Infosys - US Biotechnology Company',
    category: 'Pharmaceutical CRM',
    badges: [{ label: 'Pharma', variant: 'green' }],
    metrics: [
      { value: 'Successful', label: 'Integration' },
      { value: 'Streamlined', label: 'Internal processes' },
      { value: 'Reduced', label: 'Operational costs' },
    ],
    techStack: ['Siebel CRM', 'DMAB Product', 'Data Integration', 'Workflow Automation'],
    skills: ['Business Analysis', 'Requirements Elicitation', 'Functional Design', 'Integration Design', 'Testing Support'],
    featured: false,
  },
  {
    id: 'uk-telecom-ordering',
    title: 'E2E Service Ordering for UK Telecom',
    tagline: 'Streamlined end-to-end service ordering process for new and existing customers, improving efficiency and reducing errors',
    timeline: 'Infosys - UK Major Telecom Company',
    category: 'Telecom Process Optimization',
    badges: [{ label: 'Telecom', variant: 'blue' }],
    metrics: [
      { value: 'Improved', label: 'Customer satisfaction' },
      { value: 'Reduced', label: 'Processing time' },
      { value: 'Increased', label: 'Data accuracy' },
    ],
    techStack: ['Siebel CRM', 'E2E Process Design', 'Workflow Automation', 'Integration'],
    skills: ['Business Analysis', 'E2E Solution Design', 'Process Optimization', 'Siebel Development', 'Stakeholder Engagement'],
    featured: false,
  },
];

export const allProjects = [...featuredProjects, ...moreProjects];

export const projectCategories = [
  'All',
  'National Scale',
  'AI/ML',
  'Startup',
  'Enterprise',
  'Compliance',
  'Public Sector',
];
