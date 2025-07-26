// Header.component.tsx modernisé

import { useState, useRef, useEffect, useContext } from "react";
import styles from "../styles/Header.module.css";
import { languageContext } from "../languageContext";
import { getHeaderText } from "../util/TextContent/Header";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerLanguage = useContext(languageContext);
  const headerRef = useRef(null);
  
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
  
  useEffect(() => {
    // Animation initiale au chargement
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Intersection Observer pour réappliquer l'animation si nécessaire
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.2
    });
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);
   
  return (
    <header 
      className={styles.header} 
      ref={headerRef}
      style={{
        backgroundPosition: `center ${scrollPosition * 0.5}px`
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