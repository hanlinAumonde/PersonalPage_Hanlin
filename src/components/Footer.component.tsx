import { IconButton } from "@mui/material";
import styles from "../styles/Footer.module.css";
import { ArrowUpward, GitHub, LinkedIn } from "@mui/icons-material";
import useWindowWidthChange from "../util/useWindowWidthChange";

export default function Footer() {
    const changeLayout = useWindowWidthChange();
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/CV/';
    
    return (
        <footer className={styles.footer}>
            <div className={styles.scrollTop}>
                <IconButton 
                    aria-label="Retour en haut"
                    onClick={handleScrollToTop}
                    className={styles.scrollButton}
                    color='secondary'
                >
                    <ArrowUpward />
                </IconButton>
            </div>
            
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLogo}>
                        <h3 className={styles.footerName}>Hanlin WU</h3>
                    </div>
                        <div className={styles.footerSocial}>
                        {changeLayout && (
                            <>
                                <a 
                                href="https://github.com/hanlinAumonde" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                >
                                    <GitHub fontSize="small" />
                                    <span>GitHub</span>
                                </a>
                                <a 
                                href="https://www.linkedin.com/in/hanlin-wu-559552213/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                >
                                    <LinkedIn fontSize="small" />
                                    <span>LinkedIn</span>
                                </a>
                            </>
                        )}
                        <a 
                        href={baseUrl + "Hanlin_WU_CV_2025.pdf"}
                        target="_blank" 
                        className={styles.socialLink}
                        >
                            <span>Résumé</span>
                        </a>
                    </div>
                    
                </div>
                
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Hanlin WU. Tous droits réservés.
                    </p>
                    <p className={styles.credits}>
                        Icônes par <a href="https://iconduck.com" target="_blank" rel="noopener noreferrer">iconduck</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}