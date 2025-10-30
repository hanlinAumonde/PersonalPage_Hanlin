import Grid from "@mui/material/Grid2";
import styles from "../../styles/Profil.module.css";
import { useMediaQuery, useTheme } from "@mui/material";
import useIntersectionAnimation from "../../util/hooks/useIntersectionAnimation";
import { useContext } from "react";
import { languageContext } from "../../config/languageContext.ts";
import { getProfilText } from "../../util/TextContent/ProfilData";

export default function Profil() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const baseUrl = import.meta.env.BASE_URL || '/';
  const language = useContext(languageContext);
  const profilText = getProfilText(language);
  
  const [profileRef, isVisible] = useIntersectionAnimation<HTMLDivElement>();
  
  return (
    <div 
      ref={profileRef} 
      className={`${styles.profileSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 id="profil-heading" className={styles.sectionTitle}>{profilText.sectionTitle}</h2>
      
      <div className={styles.profileContent}>
        <Grid container spacing={isMobile ? 4 : 6} alignItems="center">
          <Grid size={12} sx={{md:7}} className={styles.infoContainer}>
            <div className={styles.nameContainer}>
              <h3 className={styles.name}><strong>Hanlin WU</strong></h3>
            </div>
            
            <div className={styles.bio}>
              <p>
                {profilText.bio.paragraph1.split('{highlight}').map((part, index) => 
                  index === 0 ? part : (
                    <span key={index}>
                      <span className={styles.highlight}>{profilText.bio.highlight}</span>
                      {part}
                    </span>
                  )
                )}
              </p>
              <p>
                {profilText.bio.paragraph2}
              </p>
            </div>
            
          </Grid>
          
          <Grid size={12} sx={{md:5}} className={styles.mediaContainer}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid size={7} className={styles.photoContainer}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageBorder}>
                    <img src={`${baseUrl}assets/photo.jpg`} alt="Portrait professionnel de Hanlin WU, développeur systèmes et réseaux" className={styles.profileImage} />
                  </div>
                  <div className={styles.imageBackground}></div>
                </div>
              </Grid>
              
              <Grid size={5} className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                  <img src={`${baseUrl}assets/logo_utc.png`} alt="Logo de l'Université de Technologie de Compiègne (UTC)" className={styles.logo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}