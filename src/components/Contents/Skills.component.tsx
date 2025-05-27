import { SkillCard } from "../../util/ui/skillCard";
import styles from "../../styles/Skills.module.css";
import useIntersectionAnimation from "../../util/hooks/useIntersectionAnimation";
import useMultipleIntersectionAnimation from "../../util/hooks/useMultipleIntersectionAnimation";
import { skillsData } from "../../util/TextContent/SkillsData";

export default function Skills() {
  const [sectionRef, isVisible] = useIntersectionAnimation<HTMLElement>();
  const visibleCategories = useMultipleIntersectionAnimation({
    targetSelector: `.${styles.categoryContainer}`,
    threshold: 0.2
  });
  
  return (
    <section 
      ref={sectionRef} 
      className={`${styles.skillsSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.sectionTitle}>Compétences</h2>
      
      {skillsData.map((category, index) => (
        <div 
          key={category.id}
          data-index={index}
          className={`${styles.categoryContainer} ${visibleCategories[index] ? styles.visible : ""}`}
        >
          <h3 className={styles.categoryTitle}>
            <span className={styles.categoryIcon}>{category.icon}</span> {category.title}
          </h3>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={`${category.id}-${skillIndex}`}
                name={skill.name}
                logoUrl={skill.logo}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}