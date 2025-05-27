const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/skills/';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Front-end',
    icon: '⚡',
    skills: [
      { name: "JavaScript", logo: `${baseUrl}javascript.svg`},
      { name: "TypeScript", logo: `${baseUrl}typescript.svg`},
      { name: "HTML5", logo: `${baseUrl}html.svg`},
      { name: "CSS3", logo: `${baseUrl}css.svg`},
      { name: "ReactJS", logo: `${baseUrl}react.svg`},
      { name: "Angular", logo: `${baseUrl}angular.svg`},
    ]
  },
  {
    id: 'backend',
    title: 'Back-end',
    icon: '🔧',
    skills: [
      { name: "Java", logo: `${baseUrl}java.svg`},
      { name: "Python", logo: `${baseUrl}python.svg`},
      { name: "C++", logo: `${baseUrl}cpp.svg`},
      { name: "Golang", logo: `${baseUrl}golang.svg`},
      { name: "SQL", logo: `${baseUrl}sql.svg`},
      { name: "Spring-boot", logo: `${baseUrl}spring.svg`},
      { name: "FastAPI", logo: `${baseUrl}fastapi.svg`},
      { name: "Apache Camel", logo: `${baseUrl}apache-camel.svg`},
      { name: "PostgreSQL", logo: `${baseUrl}postgresql.svg`},
      { name: "MongoDB", logo: `${baseUrl}mongodb.svg`},
      { name: "RabbitMQ", logo: `${baseUrl}rabbitmq.svg`},
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Autres',
    icon: '🚀',
    skills: [
      { name: "Git", logo: `${baseUrl}git.svg`},
      { name: "Docker", logo: `${baseUrl}docker.svg`},
      { name: "Linux", logo: `${baseUrl}linux.svg`},
      { name: "WebSocket", logo: `${baseUrl}websocket.svg`},
      { name: "OAuth2 / OIDC", logo: `${baseUrl}oauth.svg`},
      { name: "Restful API", logo: `${baseUrl}api.svg`},
      { name: "AWS", logo: `${baseUrl}aws.svg`},
      { name: "Nginx", logo: `${baseUrl}nginx.svg`},
    ]
  }
];