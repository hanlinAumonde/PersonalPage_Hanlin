import { LanguageContextType } from "../../languageContext";

// Interface pour les données d'expérience
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface ExperienceText {
  sectionTitle: string;
  achievementsTitle: string;
  experiences: ExperienceItem[];
}

// Données d'expérience en français
const experiencesFr: ExperienceItem[] = [
    {
        title: "Développeur Back-end Java EE",
        company: "Renault Group",
        period: "03/2024 - 08/2024",
        achievements: [
        "Contribué à la refonte d'une application d'intégration de la documentation véhicules",
        "Optimisé le processus de gestion documentaire avec le Framework Apache Camel, en utilisant une base MongoDB",
        "Dirigé la migration de l'application vers Spring Boot avec la dernière version d'Apache Camel, améliorant la performance et la scalabilité (en effectuant des POC dans différents scénarios)",
        "Refait tous les tests unitaires vers JUnit 5 pour assurer la fiabilité et la robustesse des fonctionnalités critiques"
        ]
    },
    {
        title: "Assistant Ingénieur",
        company: "Cerema",
        period: "11/2021 - 04/2022",
        achievements: [
        "Développement d'un outil de pilotage automatique de bateau en milieu fluvial basé sur un logiciel 'Navmer', permettant la définition et l'optimisation des commandes nécessaires au pilotage du bateau en fonction de son état actuel",
        "Le travail consistait à apprendre les algorithmes de navigation et de pilotage sur les articles scientifiques, analyser les différentes solutions existantes et proposer une solution optimale pour le pilotage automatique, puis développer des algorithmes en Python"
        ]
    } 
];

// Données d'expérience en anglais
const experiencesEn: ExperienceItem[] = [
    {
        title: "Java EE Back-end Developer",
        company: "Renault Group",
        period: "03/2024 - 08/2024",
        achievements: [
        "Contributed to the redesign of a vehicle documentation integration application",
        "Optimized document management process with Apache Camel Framework, using MongoDB database",
        "Led the application migration to Spring Boot with the latest version of Apache Camel, improving performance and scalability (by performing POCs in different scenarios)",
        "Rewrote all unit tests to JUnit 5 to ensure reliability and robustness of critical functionalities"
        ]
    },
    {
        title: "Assistant Engineer",
        company: "Cerema",
        period: "11/2021 - 04/2022",
        achievements: [
        "Development of an automatic boat piloting tool in fluvial environment based on 'Navmer' software, enabling the definition and optimization of commands necessary for boat piloting according to its current state",
        "The work consisted of learning navigation and piloting algorithms from scientific articles, analyzing different existing solutions and proposing an optimal solution for automatic piloting, then developing algorithms in Python"
        ]
    } 
];

const experienceTexts: Record<LanguageContextType, ExperienceText> = {
    fr: {
        sectionTitle: "Expérience professionnelle",
        achievementsTitle: "Réalisations clés",
        experiences: experiencesFr
    },
    en: {
        sectionTitle: "Professional Experience",
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