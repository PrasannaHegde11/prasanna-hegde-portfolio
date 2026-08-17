import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title = "Prasanna Hegde | AI Product Leader · Digital Identity · UIDAI Aadhaar Sandbox · 20+ Years",
  description = "AI Product Leader at UIDAI building India's Aadhaar Sandbox. 20+ years delivering AI-powered products, digital identity platforms, and fintech solutions at national scale. $2.1M+ revenue impact. Available for consulting, advisory, and speaking.",
  keywords = "Prasanna Hegde, Product Manager Bengaluru, AI Product Leader India, Digital Identity Product Manager, Aadhaar Sandbox UIDAI, Agentic AI Product, Machine Learning Product Manager, Fintech Product Leader, API Platform Product, B2B SaaS Product Manager, GDPR Compliance Product, Product Strategy India, 0 to 1 Product, IIM Lucknow Data Science, IBM AI Product Manager",
  ogTitle = "Prasanna Hegde | AI Product Leader · Digital Identity & National-Scale Infrastructure",
  ogDescription = "Pioneering India's Aadhaar Sandbox at UIDAI. 20+ years building AI-powered products at national scale — from credit risk AI to marketplace platforms. $2.1M+ revenue impact. Available for consulting & advisory.",
  ogType = "website",
  canonicalUrl = "https://www.prasannahegde.biz",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prasanna Hegde",
    "jobTitle": "Product Lead – Aadhaar Sandbox, UIDAI",
    "description": "AI Product Leader with 20+ years building national-scale digital identity platforms, AI-powered fintech products, and enterprise solutions. Currently pioneering India's Aadhaar Sandbox at UIDAI.",
    "worksFor": {
      "@type": "Organization",
      "name": "UIDAI (Unique Identification Authority of India)"
    },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "IIM Lucknow" },
      { "@type": "EducationalOrganization", "name": "Institute of Product Leadership" },
      { "@type": "EducationalOrganization", "name": "Coventry University" }
    ],
    "knowsAbout": ["Product Management", "Agentic AI", "Machine Learning", "Digital Identity", "Aadhaar", "API Platforms", "Fintech", "GDPR", "B2B SaaS", "Product Strategy"],
    "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressCountry": "IN" },
    "url": canonicalUrl,
    "sameAs": [
      "https://www.linkedin.com/in/hegdeprasanna/",
      "https://github.com/PrasannaHegde11",
      "https://twitter.com/prasannahegde"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Prasanna Hegde" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      {/* Favicon - Text-based with initials */}
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' fill='%230d9488'>PH</text></svg>" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="Prasanna Hegde Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:creator" content="@prasannahegde" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
