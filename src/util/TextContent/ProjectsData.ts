import { LanguageContextType } from "../../languageContext";

interface Project {
  id: number;
  name: string;
  context: string;
  missions: string[] | { [key: string]: string[] }[];
  technologies: string[];
  screenshots: string[];
  icon?: string;
  repo?: string;
  link?: string;
}

export interface ProjectsProp {
    projectsData: Project[];
}

export interface ProjectsText {
  sectionTitle: string;
  missionsTitle: string;
  technologiesTitle: string;
  sourceCodeText: string;
  websiteText: string;
  previousProjectText: string;
  nextProjectText: string;
  goToProjectText: string;
  projects: Project[];
}

const projectsDataFr: Project[] = [
  {
    id: 1,
    name: "Application de chatroom en ligne",
    context: "Un projet avancé mettant en œuvre une application de chat en temps réel basée sur une architecture microservices moderne avec Spring Cloud.\
              Les utilisateurs s'inscrivent par e-mail, peuvent créer et gérer des salons de discussion, inviter d'autres utilisateurs, et communiquer en temps réel avec une scalabilité horizontale complète.\
              e-mail, peuvent créer et gérer des salons de discussion, inviter d'autres utilisateurs, et communiquer en temps réel avec une scalabilité horizontale complète.",
    missions: [
      {
        "FrontEnd": [
          "Réalisation en utilisant Angular 19 avec la dernière stack moderne",
          "Interface utilisateur responsive avec gestion des WebSockets en temps réel",
          "Système de routage avancé avec guards d'authentification",
          "Gestion d'état optimisée pour les sessions distribuées" 
        ],
        "Architecture Backend Microservices":[
          "Eureka Server : Service Discovery et registre de services",
          "API Gateway : Point d'entrée unifié avec routage intelligent et authentification centralisée",
          "Auth Service : Service d'authentification dédié avec gestion JWT avancée",
          "CRUD Service : Gestion des données utilisateurs et salons avec PostgreSQL",
          "Message Service : Stockage et récupération des messages avec MongoDB",
          "WebSocket Gateway : Service de messagerie temps réel avec support multi-instance"
        ],
        "Infrastructure & DevOps":[
          "Stack de données : PostgreSQL + MongoDB + Redis (cache distribué)",
          "Messagerie asynchrone : RabbitMQ pour les événements inter-services",
          "Monitoring complet : Zipkin (tracing), Prometheus (métriques), Grafana (visualisation)",
          "Déploiement containerisé : Docker Compose avec orchestration complète",
          "Observabilité : Spring Boot Actuator sur tous les services"
        ],
        "Fonctionnalités avancées":[
          "Authentification multi-mode (email/password et code de vérification)",
          "Gestion distribuée des sessions WebSocket via Redis Pub/Sub",
          "Résilience avec Circuit Breaker (Resilience4j)",
          "Monitoring et alerting en temps réel",
          "Scalabilité horizontale automatique des services",
          "Traçabilité complète des requêtes distribuées"
        ]
      }
    ],
    technologies: ["Angular", "TypeScript", "Java", "API Rest", "Spring-boot", "Spring Cloud", "WebSocket", "JWT", "MongoDB", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "Nginx", "GitHub Actions", "AWS EC2"],
    screenshots: ["/chatapp/login-page-pwd.png", "/chatapp/login-page-code.png", "/chatapp/accueil-page.png", "/chatapp/chatroom.png", "/chatapp/create-compte.png", "/chatapp/forget-password.png", "/chatapp/architecture.png", "/chatapp/CI-CD.png"],
    icon: "/chatapp/chat_icon.png",
    repo: "https://github.com/hanlinAumonde/SimpleChatApp_Devops"
  },
  {
    id: 2,
    name: "Site Web du cours LO18 de l'UTC",
    context: "En collaboration avec trois autres étudiants, j'ai créé un site Web d'information sur le cours LO18 de l'UTC, développé à l'aide de Reactjs+Nextjs, \
              qui comprend une introduction à la philosophie du cours, le plan du cours, les commentaires des étudiants et d'autres informations.\
              ",
    missions: [
      "Développer certains composants d'affichage du contenu du cours",
      "Participer à la conception des pages et à la gestion des ressources multimédias",
      "Participer à certains développements d'animation CSS"
    ],
    technologies: ["Reactjs", "Nextjs", "MUI", "CSS"],
    screenshots: ["/lo18/home-page.png", "/lo18/programme-page.png", "/lo18/evaluation-page.png"],
    icon: "/lo18/favicon.ico",
    link: "https://www4.utc.fr/lo18"
  },
  {
    id: 3,
    name: "Calculatrice scientifique App",
    context: "L'application de calculatrice scientifique développée en collaboration avec quatre autres étudiants comprend des calculs d'addition, \
              de soustraction, de multiplication et de division de base, prend en charge les calculs entre les nombres réels, les fractions et les nombres complexes, \
              prend en charge une variété de fonctions de calcul telles que les fonctions trigonométriques, prend en charge la création d'expressions et prend en charge le retraçage des enregistrements historiques.",
    missions: [
      "Participer à la conception UML globale de l'application",
      "Participer au développement de classes et de méthodes de base liées aux littéraux et aux opérateurs",
      "Participer au développement de l'interface graphique"
    ],
    technologies: ["C++", "QT", "Cmake"],
    screenshots: ["/cppqt/calculatrice.jpg"],
    icon: "/cppqt/calculateur_icon.png",
    repo:"https://github.com/hanlinAumonde/projet-comput-Science"
  },
  {
    id:4,
    name:"LocalTaggedVideo_ManagementTool",
    context: "Un petit outil simple pour visualiser et rechercher des fichiers vidéo locaux, \
             utilisant une base de données MongoDB pour stocker et récupérer les informations d'étiquetage des fichiers vidéo, \
             permettant d'ajouter des étiquettes aux vidéos et de rechercher des vidéos par étiquette.",
    missions: [
      "Parcourir et organiser les fichiers vidéo locaux avec tri et recherche intégrés",
      "Ajouter et supprimer des tags aux fichiers vidéo sélectionnés",
      "Rechercher des vidéos par un ou plusieurs tags avec suggestions automatiques",
      "Intégration avec MongoDB, avec démarrage automatique d'un conteneur Docker si nécessaire"
    ],
    technologies: ["Python", "MongoDB", "Tkinter", "Docker"],
    screenshots:["/videoTagManage/1.png", "/videoTagManage/2.png", "/videoTagManage/3.png"],
    icon:"/videoTagManage/tags.ico",
    repo:"https://github.com/hanlinAumonde/Manage_LocalTaggedVideo"
  }
];

const projectsDataEn: Project[] = [
  {
    id: 1,
    name: "Online Chatroom Application",
    context: "A advanced project implementing a real-time chat application based on a modern microservices architecture with Spring Cloud.\
              Users register via email, can create and manage chat rooms, invite other users, and communicate in real-time with full horizontal scalability.",
    missions: [
      {
        "FrontEnd": [
          "Built using Angular 19 with the latest modern stack",
          "Responsive user interface with real-time WebSocket handling",
          "Advanced routing system with authentication guards",
          "Optimized state management for distributed sessions"
        ],
        "Backend Microservices Architecture":[
          "Eureka Server: Service Discovery and service registry",
          "API Gateway: Unified entry point with intelligent routing and centralized authentication",
          "Auth Service: Dedicated authentication service with advanced JWT management",
          "CRUD Service: User and room data management with PostgreSQL",
          "Message Service: Message storage and retrieval with MongoDB",
          "WebSocket Gateway: Real-time messaging service with multi-instance support"
        ],
        "Infrastructure & DevOps":[
          "Data stack: PostgreSQL + MongoDB + Redis (distributed cache)",
          "Asynchronous messaging: RabbitMQ for inter-service events",
          "Comprehensive monitoring: Zipkin (tracing), Prometheus (metrics), Grafana (visualization)",
          "Containerized deployment: Docker Compose with full orchestration",
          "Observability: Spring Boot Actuator on all services"
        ],
        "Advanced Features":[
          "Multi-mode authentication (email/password and verification code)",
          "Distributed WebSocket session management via Redis Pub/Sub",
          "Resilience with Circuit Breaker (Resilience4j)",
          "Real-time monitoring and alerting",
          "Automatic horizontal scalability of services",
          "Complete traceability of distributed requests"
        ]
      }
    ],
    technologies: ["Angular", "bootstrap", "TypeScript", "Spring-boot", "WebSocket", "JWT", "MongoDB", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "Nginx", "GitHub Actions", "AWS EC2"],
    screenshots: ["/chatapp/architecture.png", "/chatapp/CI-CD.png","/chatapp/login-page-pwd.png", "/chatapp/login-page-code.png", "/chatapp/accueil-page.png", "/chatapp/chatroom.png", "/chatapp/create-compte.png", "/chatapp/forget-password.png"],
    icon: "/chatapp/chat_icon.png",
    repo: "https://github.com/hanlinAumonde/SimpleChatApp_Devops"
  },
  {
    id: 2,
    name: "UTC LO18 Course Website",
    context: "In collaboration with three other students, I created an information website for the UTC LO18 course, developed using Reactjs+Nextjs, \
              which includes an introduction to the course philosophy, course plan, student comments and other information.\
              ",
    missions: [
      "Develop certain course content display components",
      "Participate in page design and multimedia resource management",
      "Participate in certain CSS animation developments"
    ],
    technologies: ["Reactjs", "Nextjs", "MUI", "CSS"],
    screenshots: ["/lo18/home-page.png", "/lo18/programme-page.png", "/lo18/evaluation-page.png"],
    icon: "/lo18/favicon.ico",
    link: "https://www4.utc.fr/lo18"
  },
  {
    id: 3,
    name: "Scientific Calculator App",
    context: "The scientific calculator application developed in collaboration with four other students includes basic addition, \
              subtraction, multiplication and division calculations, supports calculations between real numbers, fractions and complex numbers, \
              supports a variety of calculation functions such as trigonometric functions, supports expression creation and supports historical record tracing.",
    missions: [
      "Participate in the overall UML design of the application",
      "Participate in the development of basic classes and methods related to literals and operators",
      "Participate in the development of the graphical interface"
    ],
    technologies: ["C++", "QT", "Cmake"],
    screenshots: ["/cppqt/calculatrice.jpg"],
    icon: "/cppqt/calculateur_icon.png",
    repo:"https://github.com/hanlinAumonde/projet-comput-Science"
  },
  {
    id:4,
    name:"LocalTaggedVideo_ManagementTool",
    context: "A simple small tool to view and search local video files, \
             using a MongoDB database to store and retrieve video file tagging information, \
             allowing to add tags to videos and search videos by tag.",
    missions: [
      "Browse and organize local video files with integrated sorting and search",
      "Add and remove tags to selected video files",
      "Search videos by one or more tags with automatic suggestions",
      "Integration with MongoDB, with automatic Docker container startup if needed"
    ],
    technologies: ["Python", "MongoDB", "Tkinter", "Docker"],
    screenshots:["/videoTagManage/1.png", "/videoTagManage/2.png", "/videoTagManage/3.png"],
    icon:"/videoTagManage/tags.ico",
    repo:"https://github.com/hanlinAumonde/Manage_LocalTaggedVideo"
  }
];

export const projectsTexts: Record<LanguageContextType, ProjectsText> = {
  fr: {
    sectionTitle: "Projets",
    missionsTitle: "Missions réalisées",
    technologiesTitle: "Technologies utilisées",
    sourceCodeText: "Code source",
    websiteText: "Site web",
    previousProjectText: "Projet précédent",
    nextProjectText: "Projet suivant",
    goToProjectText: "Aller au projet",
    projects: projectsDataFr
  },
  en: {
    sectionTitle: "Projects",
    missionsTitle: "Completed Missions",
    technologiesTitle: "Technologies Used",
    sourceCodeText: "Source Code",
    websiteText: "Website",
    previousProjectText: "Previous Project",
    nextProjectText: "Next Project",
    goToProjectText: "Go to project",
    projects: projectsDataEn
  }
};

export const getProjectsText = (language: LanguageContextType): ProjectsText => {
  return projectsTexts[language] || projectsTexts.fr;
};

// Pour la rétrocompatibilité
const projectsData = projectsDataFr;
export default projectsData;