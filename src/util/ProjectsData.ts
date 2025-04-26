interface Project {
  id: number;
  name: string;
  context: string;
  missions: string[];
  technologies: string[];
  screenshots: string[];
  icon?: string;
  link?: string;
}

export interface ProjectsProp {
    projectsData: Project[];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Application de chatroom en ligne",
    context: "Un projet Web d'apprentissage personnel pour créer une application Web de chat en ligne. \
              Les utilisateurs s'inscrivent par e-mail, peuvent créer plusieurs salons de discussion et inviter d'autres utilisateurs à les rejoindre, \
              modifier les propriétés du salon créé et consulter l'historique des conversations du salon correspondant, \
              les messages sont actualisés en temps réel par l'application.",
    missions: [
      "Création de la partie frontend de l'application avec Angular 17+, incluant la mise en page CSS, les requêtes API, la gestion des websockets, le routage des pages, etc.",
      "Implémentation du module de gestion de connexion backend avec Spring Security, ainsi que les différents moyens de connexion en parallèle, y compris la connexion par e-mail et la connexion par code de vérification",
      "Réalisation d'une séparation complète frontend/backend, et gestion de l'état de connexion via la solution JWTtoken",
      "Mise en œuvre du côté backend ainsi que des API RESTful, établissement de connexions à la base de données et des services CRUD correspondants",
      "Implémentation d'un serveur websocket basé sur Spring Boot pour gérer les conversations entre utilisateurs",
      "Utilisation d'une base de données pour gérer les différentes données de l'application",
      "Intégrer RabbitMQ pour gérer les demandes de réinitialisation de mot de passe des utilisateurs",
      "Mise en œuvre d'un processus préliminaire d'intégration continue avec GitHub Actions et Docker/Docker Compose",
      "Déployer l'application sur un serveur cloud (AWS EC2) avec Docker et Nginx"
    ],
    technologies: ["Angular", "bootstrap", "TypeScript", "Spring-boot", "WebSocket", "JWT", "MongoDB", "PostgreSQL"],
    screenshots: ["/chatapp/login-page-pwd.png", "/chatapp/login-page-code.png", "/chatapp/accueil-page.png", "/chatapp/chatroom.png", "/chatapp/create-compte.png", "/chatapp/forget-password.png"],
    icon: "/chatapp/chat_icon.png"
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
    icon: "/cppqt/calculateur_icon.png"
  }
];

export default projectsData;