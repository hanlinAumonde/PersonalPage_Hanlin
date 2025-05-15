import styles from "../styles/Skills.module.css"

// Interface pour définir le niveau de compétence
interface SkillCardProps {
  name: string;
  logoUrl: string;
}

// Composant de carte de compétence modernisé
export const SkillCard = ({ name, logoUrl }: SkillCardProps) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIconContainer}>
        <img src={logoUrl} alt={name} className={styles.skillIcon} />
      </div>
      <h4 className={styles.skillName}>{name}</h4>
    </div>
  );
};