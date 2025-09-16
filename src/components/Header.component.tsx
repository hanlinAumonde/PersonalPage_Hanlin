import { useState, useEffect, useContext } from "react";
import styles from "../styles/Header.module.css";
import { languageContext } from "../languageContext";
import { getHeaderText } from "../util/TextContent/Header";
import useIntersectionAnimation from "../util/hooks/useIntersectionAnimation";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerLanguage = useContext(languageContext);

  const [headerRef, isVisible] = useIntersectionAnimation<HTMLElement>({ header: true });
  
  // Effet de défilement parallaxe
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   
  return (
    <header 
      className={styles.header} 
      ref={headerRef}
      style={{
        backgroundPosition: `center ${scrollPosition*0.75}px`
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.titre} ${isVisible ? styles.visible : ""}`}>
            {getHeaderText(headerLanguage).title}
          </h1>
          <h2 className={`${styles.sous_titre} ${isVisible ? styles.visible : ""}`}>
            {getHeaderText(headerLanguage).subtitle}
          </h2>
        </div>
      </div>
    </header>
  );
}