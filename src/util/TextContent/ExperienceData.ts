// Interface pour les données d'expérience
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

// Données d'expérience
const experiences: ExperienceItem[] = [
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

export default experiences;