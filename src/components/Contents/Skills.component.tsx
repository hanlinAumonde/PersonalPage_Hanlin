import { SkillCard } from "../../util/skillCard";
import styles from "../../styles/Skills.module.css";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/skills/';
  
  // Données structurées pour les compétences
  const skillsData = {
    frontend: [
      { name: "JavaScript", logo: `${baseUrl}javascript.svg`},
      { name: "TypeScript", logo: `${baseUrl}typescript.svg`},
      { name: "HTML5", logo: `${baseUrl}html.svg`},
      { name: "CSS3", logo: `${baseUrl}css.svg`},
      { name: "ReactJS", logo: `${baseUrl}react.svg`},
      { name: "Angular", logo: `${baseUrl}angular.svg`},
    ],
    backend: [
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
    ],
    devops: [
      { name: "Git", logo: `${baseUrl}git.svg`},
      { name: "Docker", logo: `${baseUrl}docker.svg`},
      { name: "Linux", logo: `${baseUrl}linux.svg`},
      { name: "WebSocket", logo: `${baseUrl}websocket.svg`},
      { name: "OAuth2 / OIDC", logo: `${baseUrl}oauth.svg`},
      { name: "Restful API", logo: `${baseUrl}api.svg`},
      { name: "AWS", logo: `${baseUrl}aws.svg`},
      { name: "Nginx", logo: `${baseUrl}nginx.svg`},
    ]
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.skillsSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.sectionTitle}>Compétences</h2>
      
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>
          <span className={styles.categoryIcon}>⚡</span> Front-end
        </h3>
        <div className={styles.skillsGrid}>
          {skillsData.frontend.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              logoUrl={skill.logo}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>
          <span className={styles.categoryIcon}>🔧</span> Back-end
        </h3>
        <div className={styles.skillsGrid}>
          {skillsData.backend.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              logoUrl={skill.logo}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>
          <span className={styles.categoryIcon}>🚀</span> DevOps & Autres
        </h3>
        <div className={styles.skillsGrid}>
          {skillsData.devops.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              logoUrl={skill.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}