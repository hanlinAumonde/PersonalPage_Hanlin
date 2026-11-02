import { LanguageContextType } from "../../config/languageContext.ts";

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
            "Réalisation d'une étude bibliographique approfondie pour comparer et sélectionner les algorithmes de contrôle de navigation optimaux pour le logiciel de simulation navale interne",
            "Implémentation et optimisation itérative des algorithmes de contrôle de navigation et de gouvernail, améliorant significativement la précision des algorithmes et réduisant l'écart de cap de 40%"
        ],
        technologies: ["Python", "Algorithmes de contrôle/navigation - Algorithme de guidage LOS | Algorithme Fuzzy-PID"]
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
        "Conducted in-depth literature research to compare and select optimal navigation control algorithms for the internal ship simulation software",
        "Implemented and iteratively optimized navigation and rudder control algorithms, significantly improving algorithm accuracy and reducing heading deviation by 40%"
        ],
        technologies: ["Python", "Algorithms for control/navigation - LOS Guidance Algorithm | Fuzzy-PID algorithm"]
    } 
];

// Données d'expérience en chinois
const experiencesZh: ExperienceItem[] = [
    {
        title: "Java EE 后端开发工程师",
        company: "Renault Group（雷诺集团）",
        period: "2024.03 - 2024.08",
        context: "由于 MongoDB 与 Apache Camel 的依赖兼容性问题影响了系统性能和可扩展性，迁移一个用于车辆文档集成的 Java 后端应用",
        achievements: [
            "快速熟悉 Apache Camel，并开发 Spring Boot 与 Quarkus 的对比 POC",
            "与团队和产品负责人协作，根据 POC 结果制定迁移策略",
            "积极参与应用架构的全面重构，性能提升 18%",
            "现代化单元测试套件（迁移至 JUnit 5）"
        ],
        technologies: ["Java", "Spring Boot", "Apache Camel", "MongoDB", "JUnit 5"]
    },
    {
        title: "助理工程师",
        company: "Cerema",
        period: "2021.11 - 2022.04",
        context: "为内部海事模拟软件开发集成于其中的船舶自动操控工具",
        achievements: [
            "面向内部船舶仿真软件的自动驾驶（自动舵）算法开发，通过文献调研对比多种导航控制算法，完成算法选型。",
            "基于 Python 实现并迭代优化导航及舵控制算法，与既有内部仿真系统集成，显著提升算法精度，航向偏差降低40%"
        ],
        technologies: ["Python", "控制/导航算法 - LOS 导航算法 | Fuzzy-PID 模糊控制算法"]
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
    },
    zh: {
        sectionTitle: "工作经历",
        contextTitle: "项目背景",
        achievementsTitle: "主要成果",
        technologiesTitle: "技术栈",
        experiences: experiencesZh
    }
};

export const getExperienceText = (language: LanguageContextType): ExperienceText => {
    return experienceTexts[language] || experienceTexts.fr;
};
