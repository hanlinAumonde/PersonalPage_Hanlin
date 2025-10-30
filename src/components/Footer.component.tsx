import { IconButton } from "@mui/material";
import styles from "../styles/Footer.module.css";
import { ArrowUpward, GitHub, LinkedIn } from "@mui/icons-material";
import useWindowWidthChange from "../util/hooks/useWindowWidthChange";
import { useContext, useEffect } from "react";
import { languageContext } from "../config/languageContext.ts";
import { getFooterText } from "../util/TextContent/FooterData";
import useIntersectionAnimation from "../util/hooks/useIntersectionAnimation";

export default function Footer(
    { setFooterIsVisible }:
    { setFooterIsVisible: React.Dispatch<React.SetStateAction<boolean>> }
) {
    const language = useContext(languageContext);
    const footerText = getFooterText(language);
    const changeLayout = useWindowWidthChange();
    const [footerRef, isVisible] = useIntersectionAnimation<HTMLElement>({ 
        threshold: 0,
        header: false
    });

    useEffect(() => {
        setFooterIsVisible(isVisible);
    }, [isVisible, setFooterIsVisible]);
    
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/CV/';
    
    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className={styles.scrollTop}>
                <IconButton 
                    aria-label={footerText.scrollToTopText}
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
                                    <span>{footerText.githubText}</span>
                                </a>
                                <a 
                                href="https://www.linkedin.com/in/hanlin-wu-559552213/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                >
                                    <LinkedIn fontSize="small" />
                                    <span>{footerText.linkedinText}</span>
                                </a>
                            </>
                        )}
                        <a 
                            href={baseUrl + "Hanlin_WU_CV_2025.pdf"}
                            target="_blank" 
                            className={styles.socialLink}
                        >
                            <span>{footerText.resumeText}</span>
                        </a>
                    </div>
                    
                </div>
                
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Hanlin WU. {footerText.copyrightText}
                    </p>
                    <p className={styles.credits}>
                        {footerText.creditsText} <a href="https://www.freepik.com/icons" target="_blank" rel="noopener noreferrer">{footerText.creditsLinkText}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}