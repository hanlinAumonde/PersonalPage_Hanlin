import styles from '../../styles/Experience.module.css';
import experiences from '../../util/TextContent/ExperienceData';
import useIntersectionAnimation from '../../util/hooks/useIntersectionAnimation';
import useMultipleIntersectionAnimation from '../../util/hooks/useMultipleIntersectionAnimation';

export default function Experience() {
  const [experienceRef, isVisible] = useIntersectionAnimation<HTMLElement>();
  const visibleItems = useMultipleIntersectionAnimation({
    targetSelector: `.${styles.experienceItem}`,
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  return (
    <section 
      ref={experienceRef}
      className={`${styles.experienceSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.sectionTitle}>Expérience professionnelle</h2>
      
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <div 
            key={index}
            data-index={index}
            className={`${styles.experienceItem} ${visibleItems[index] ? styles.visible : ''}`}
          >
            <div className={styles.timelinePoint}></div>
            
            <div className={styles.experienceHeader}>
              <div className={styles.experienceTitle}>
                <h3>{experience.title}</h3>
                <div className={styles.companyBadge}>{experience.company}</div>
              </div>
              <div className={styles.periodBadge}>{experience.period}</div>
            </div>
            
            <div className={styles.achievementsContainer}>
              <h4 className={styles.achievementsTitle}>Réalisations clés</h4>
              <ul className={styles.achievementsList}>
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className={styles.achievementItem}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}