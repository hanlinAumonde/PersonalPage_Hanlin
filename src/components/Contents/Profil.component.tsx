import { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Profil.module.css";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Profil() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    
    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={profileRef} 
      className={`${styles.profileSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.sectionTitle}>Profil</h2>
      
      <div className={styles.profileContent}>
        <Grid container spacing={isMobile ? 4 : 6} alignItems="center">
          <Grid size={12} sx={{md:7}} className={styles.infoContainer}>
            <div className={styles.nameContainer}>
              <h2 className={styles.name}><strong>Hanlin WU</strong></h2>
            </div>
            
            <div className={styles.bio}>
              <p>
                Jeune Diplômé de <span className={styles.highlight}>l'Université de Technologie de Compiègne</span>, 
                filière systèmes et réseaux informatiques.
              </p>
              <p>
                Passionné par l'informatique, la découverte et l'apprentissage de nouvelles technologies. 
                Je cherche à mettre en œuvre mes compétences techniques dans des projets innovants.
              </p>
            </div>
            
          </Grid>
          
          <Grid size={12} sx={{md:5}} className={styles.mediaContainer}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid size={7} className={styles.photoContainer}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageBorder}>
                    <img src={`${baseUrl}assets/photo.jpg`} alt="Hanlin" className={styles.profileImage} />
                  </div>
                  <div className={styles.imageBackground}></div>
                </div>
              </Grid>
              
              <Grid size={5} className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                  <img src={`${baseUrl}assets/logo_utc.png`} alt="UTC" className={styles.logo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}