import { LanguageContextType } from "../../config/languageContext.ts";

interface Project {
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
    name:"Video App - Gestionnaire vidéo auto-hébergé",
    context: "Une application full-stack auto-hébergée pour cataloguer, rechercher et lire des vidéos stockées sur un disque local ou un stockage compatible S3. \
             Elle génère des vignettes, gère les métadonnées (titre, auteur, tags, séries, favoris) et intègre un lecteur avec diffusion en continu.",
    missions: [
      "Concevoir une architecture backend par domaine (catalog, browsing, playback, migration) dont le sens des dépendances est vérifié par un test d'architecture",
      "Développer une API GraphQL avec FastAPI et Strawberry, incluant requêtes, mutations et subscriptions WebSocket",
      "Implémenter une abstraction de stockage commune au système de fichiers local et aux buckets S3 (MinIO/RustFS)",
      "Créer une interface Angular 22 (standalone, signals, Material, Tailwind) avec recherche paginée, filtres, édition des métadonnées et gestion des séries",
      "Mettre en place le streaming vidéo par requêtes Range, la génération de vignettes et la transcodification à la volée avec ffmpeg",
      "Développer un système de migration de fichiers avec progression en temps réel, reprise après redémarrage et verrous par chemin",
      "Conteneuriser l'ensemble des services (frontend, backend, MongoDB, Redis, RustFS) avec Docker Compose"
    ],
    technologies: ["Python", "FastAPI", "Strawberry GraphQL", "MongoDB", "Angular", "TypeScript", "Tailwind CSS", "Video.js", "Redis", "Docker", "Nginx", "S3"],
    screenshots:["/video-app/homepage.png", "/video-app/search.png", "/video-app/video-player.png", "/video-app/file-browser.png", "/video-app/directory-browse.png", "/video-app/edit-metadata.png", "/video-app/edit-metadata-tags.png", "/video-app/migration-tasks.png"],
    icon:"/video-app/icon.png",
    repo:"https://github.com/hanlinAumonde/selfhosted-tagged-local-video-manager"
  },
  {
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
    name:"Magic Tower - Jeu d'aventure en Java",
    context: "Un jeu de rôle de type « Magic Tower » développé en Java avec JavaFX et FXGL. \
             Le jeu propose 10 étages chargés depuis des fichiers JSON, un système de combat au tour par tour, \
             des équipements, des compétences actives et passives, ainsi qu'un système de sauvegarde multi-emplacements.",
    missions: [
      "Concevoir une architecture modulaire séparant le moteur de jeu, le contenu et l'interface (JavaFX/FXGL)",
      "Développer le moteur de combat au tour par tour avec calcul des dégâts, compétences et effets",
      "Mettre en place le chargement des niveaux, monstres, objets et compétences depuis des fichiers JSON avec Jackson",
      "Implémenter les systèmes d'équipement, de combinaisons de compétences et de raccourcis clavier",
      "Créer les menus du jeu : menu principal, sauvegarde automatique et 9 emplacements manuels, inventaire et ensembles d'équipement",
      "Développer une interface entièrement pilotable au clavier"
    ],
    technologies: ["Java", "JavaFX", "FXGL", "Jackson", "Maven", "JUnit"],
    screenshots:["/motagame/main-menu.png", "/motagame/gameplay.png", "/motagame/equipment.png", "/motagame/skill-combos.png", "/motagame/monster-skills.png", "/motagame/equipment-presets.png", "/motagame/save-menu.png", "/motagame/load-menu.png"],
    icon:"/motagame/icon.png",
    repo:"https://github.com/hanlinAumonde/MotaGame"
  },
  {
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
  }
];

const projectsDataEn: Project[] = [
  {
    name:"Video App - Self-hosted Video Manager",
    context: "A self-hosted full-stack application for cataloging, searching and streaming videos stored on a local disk or S3-compatible storage. \
             It generates thumbnails, manages metadata (title, author, tags, series, favourites) and includes a built-in video player.",
    missions: [
      "Designed a capability-based backend architecture (catalog, browsing, playback, migration) with a one-way dependency chain enforced by an architecture test",
      "Built a GraphQL API with FastAPI and Strawberry, including queries, mutations and WebSocket subscriptions",
      "Implemented a shared storage abstraction over the local filesystem and S3-compatible buckets (MinIO/RustFS)",
      "Created an Angular 22 frontend (standalone, signals, Material, Tailwind) with paginated search, filters, metadata editing and series management",
      "Added range-request video streaming, thumbnail generation and on-the-fly transcoding with ffmpeg",
      "Developed a file migration system with real-time progress, crash recovery and per-path locks",
      "Containerized all services (frontend, backend, MongoDB, Redis, RustFS) with Docker Compose"
    ],
    technologies: ["Python", "FastAPI", "Strawberry GraphQL", "MongoDB", "Angular", "TypeScript", "Tailwind CSS", "Video.js", "Redis", "Docker", "Nginx", "S3"],
    screenshots:["/video-app/homepage.png", "/video-app/search.png", "/video-app/video-player.png", "/video-app/file-browser.png", "/video-app/directory-browse.png", "/video-app/edit-metadata.png", "/video-app/edit-metadata-tags.png", "/video-app/migration-tasks.png"],
    icon:"/video-app/icon.png",
    repo:"https://github.com/hanlinAumonde/selfhosted-tagged-local-video-manager"
  },
  {
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
    technologies: ["Angular", "TypeScript", "Java", "API Rest", "Spring-boot", "Spring Cloud", "WebSocket", "JWT", "MongoDB", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "Nginx", "GitHub Actions", "AWS EC2"],
    screenshots: ["/chatapp/login-page-pwd.png", "/chatapp/login-page-code.png", "/chatapp/accueil-page.png", "/chatapp/chatroom.png", "/chatapp/create-compte.png", "/chatapp/forget-password.png","/chatapp/architecture.png", "/chatapp/CI-CD.png"],
    icon: "/chatapp/chat_icon.png",
    repo: "https://github.com/hanlinAumonde/SimpleChatApp_Devops"
  },
  {
    name:"Magic Tower - Java Adventure Game",
    context: "A Magic Tower-style role-playing game built in Java with JavaFX and FXGL. \
             The game features 10 floors loaded from JSON files, turn-based combat, equipment, \
             active and passive skills, and a multi-slot save system.",
    missions: [
      "Designed a modular architecture separating the game engine, content and UI (JavaFX/FXGL)",
      "Built the turn-based battle engine with damage calculation, skills and effects",
      "Implemented data-driven loading of levels, monsters, items and skills from JSON files using Jackson",
      "Developed the equipment, skill combo preset and keyboard shortcut systems",
      "Created the game menus: main menu, auto-save plus 9 manual save slots, inventory and equipment loadouts",
      "Built a fully keyboard-driven interface"
    ],
    technologies: ["Java", "JavaFX", "FXGL", "Jackson", "Maven", "JUnit"],
    screenshots:["/motagame/main-menu.png", "/motagame/gameplay.png", "/motagame/equipment.png", "/motagame/skill-combos.png", "/motagame/monster-skills.png", "/motagame/equipment-presets.png", "/motagame/save-menu.png", "/motagame/load-menu.png"],
    icon:"/motagame/icon.png",
    repo:"https://github.com/hanlinAumonde/MotaGame"
  },
  {
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
