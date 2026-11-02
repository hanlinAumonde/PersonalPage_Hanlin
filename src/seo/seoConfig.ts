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
  },
  zh: {
    title: "Hanlin - 初级软件工程师 | 个人作品集",
    description: "Hanlin 的个人作品集，毕业于贡比涅技术大学计算机工程专业。了解我的项目和技术能力。",
    keywords: [
      "Hanlin",
      "应届毕业生",
      "开发者",
      "软件工程师",
      "UTC",
      "作品集",
      "计算机工程",
      "Web 开发",
      "全栈开发",
      "后端开发",
      "前端开发"
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

  const jobTitles: Record<LanguageContextType, string> = {
    fr: "Ingénieur logiciel Junior",
    en: "Junior Software Engineer",
    zh: "初级软件工程师"
  };

  const universities: Record<LanguageContextType, string> = {
    fr: "Université de Technologie de Compiègne",
    en: "University of Technology of Compiègne",
    zh: "贡比涅技术大学"
  };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hanlin",
    "jobTitle": jobTitles[language],
    "description": seo.description,
    "url": seo.url,
    "image": `${seo.url}${seo.image}`,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": universities[language],
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