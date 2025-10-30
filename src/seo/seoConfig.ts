import { LanguageContextType } from '../config/languageContext.ts';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  type: string;
  image?: string;
  url?: string;
}

const seoData: Record<LanguageContextType, SEOConfig> = {
  fr: {
    title: "Hanlin - Ingénieur logiciel Junior | Portfolio",
    description: "Portfolio de Hanlin, jeune diplômé de l'Université de Technologie de Compiègne en génie informatiques. Découvrez mes projets et compétences techniques.",
    keywords: [
      "Hanlin",
      "Jeune diplômé",
      "développeur",
      "ingénieur logiciel",
      "UTC",
      "portfolio",
      "ingénieur informatique",
      "développement web",
      "développeur fullstack",
      "génie informatique",
      "développeur backend",
      "développeur frontend"
    ],
    author: "Hanlin",
    type: "website",
    image: "/portfolio.svg",
    url: "https://hanlinAumonde.github.io/PersonalPage_Hanlin"
  },
  en: {
    title: "Hanlin - Junior Software Engineer | Portfolio",
    description: "Portfolio of Hanlin, a recent graduate from the University of Technology of Compiègne in computer engineering. Explore my projects and technical skills.",
    keywords: [
      "Hanlin",
      "recent graduate",
      "developer",
      "software engineer",
      "UTC",
      "portfolio",
      "computer engineering",
      "web development",
      "fullstack developer",
      "backend developer",
      "frontend developer"
    ],
    author: "Hanlin",
    type: "website",
    image: "/portfolio.svg",
    url: "https://hanlinAumonde.github.io/PersonalPage_Hanlin"
  }
};

export const getSEOConfig = (language: LanguageContextType): SEOConfig => {
  return seoData[language] || seoData.fr;
};

export const getPersonStructuredData = (language: LanguageContextType) => {
  const seo = getSEOConfig(language);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hanlin",
    "jobTitle": language === 'fr' ? "Ingénieur logiciel Junior" : "Junior Software Engineer",
    "description": seo.description,
    "url": seo.url,
    "image": `${seo.url}${seo.image}`,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": language === 'fr' ? "Université de Technologie de Compiègne" : "University of Technology of Compiègne",
      "sameAs": "https://www.utc.fr/"
    },
    "knowsAbout": [
      "Computer Systems",
      "Networks",
      "React",
      "TypeScript",
      "Web Development",
      "Software Engineering"
    ],
    "sameAs": [
      seo.url
    ]
  };
};