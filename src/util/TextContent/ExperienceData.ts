import { LanguageContextType } from "../../languageContext";

// Interface pour les données d'expérience
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  context: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceText {
  sectionTitle: string;
  contextTitle: string;
  achievementsTitle: string;
  experiences: ExperienceItem[];
  technologiesTitle: string;
}

// Données d'expérience en français
const experiencesFr: ExperienceItem[] = [
    {
        title: "Développeur Back-end Java EE",
        company: "Renault Group",
        period: "03/2024 - 08/2024",
        context: "Migration d'une application backend Java d'intégration de documentation véhicule suite à des problèmes de compatibilité de dépendances avec MongoDB et Apache Camel, impactant les performances et la scalabilité du système",
        achievements: [
            "Familiariser rapidement avec Apache Camel, puis développer des POCs comparatifs entre Spring Boot et Quarkus",
            "Collaborer avec l'équipe et le Product Owner pour établir la stratégie de migration basée sur les résultats du POC",
            "Participer activement à la refonte complète de l'architecture applicative, améliorer des performances de 18%",
            "Moderniser la suite de tests unitaires (migration vers JUnit 5)"
        ],
        technologies: ["Java", "Spring Boot", "Apache Camel", "MongoDB", "JUnit 5"]
    },
    {
        title: "Assistant Ingénieur",
        company: "Cerema",
        period: "11/2021 - 04/2022",
        context: "Développement d'un outil de pilotage automatique pour navires intégré à un logiciel de simulation maritime interne",
        achievements: [
        "Rechercher et sélectionner d'algorithmes de navigation optimaux via analyse bibliographique approfondie",
        "Implémenter et optimiser itérative des algorithmes, réduisant de 50% le lacet et améliorant significativement la stabilité de la navigation"
        ],
        technologies: ["Python", "Algorithmes de contrôle/navigation"]
    } 
];

// Données d'expérience en anglais
const experiencesEn: ExperienceItem[] = [
    {
        title: "Back-end Java EE Developer",
        company: "Renault Group",
        period: "03/2024 - 08/2024",
        context: "Migration of a Java backend application for vehicle documentation integration due to dependency compatibility issues with MongoDB and Apache Camel, impacting system performance and scalability",
        achievements: [
            "Quickly familiarize with Apache Camel, then develop comparative POCs between Spring Boot and Quarkus",
            "Collaborate with the team and Product Owner to establish the migration strategy based on POC results",
            "Actively participate in the complete redesign of the application architecture, improving performance by 18%",
            "Modernize the unit test suite (migration to JUnit 5)"
        ],
        technologies: ["Java", "Spring Boot 3", "Apache Camel 4", "MongoDB", "JUnit 5", "Agile (SCRUM)", "Jira", "Confluence"]
    },
    {
        title: "Assistant Engineer",
        company: "Cerema",
        period: "11/2021 - 04/2022",
        context: "Development of an automatic steering tool for ships integrated into an internal maritime simulation software",
        achievements: [
        "Researched and selected optimal navigation algorithms through in-depth bibliographic analysis",
        "Implemented and iteratively optimized algorithms, reducing yaw by 50% and significantly improving navigation stability"
        ],
        technologies: ["Python", "Algorithms for control/navigation"]
    } 
];

const experienceTexts: Record<LanguageContextType, ExperienceText> = {
    fr: {
        sectionTitle: "Expérience professionnelle",
        contextTitle: "Contexte",
        achievementsTitle: "Réalisations clés",
        technologiesTitle: "Technologies",
        experiences: experiencesFr
    },
    en: {
        sectionTitle: "Professional Experience",
        contextTitle: "Context",
        technologiesTitle: "Technologies",
        achievementsTitle: "Key Achievements",
        experiences: experiencesEn
    }
};

export const getExperienceText = (language: LanguageContextType): ExperienceText => {
    return experienceTexts[language] || experienceTexts.fr;
};

// Pour la rétrocompatibilité
const experiences = experiencesFr;
export default experiences;