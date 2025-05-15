// Header.component.tsx modernisé

import { useState, useRef, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
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
            Bonjour ! Je suis Hanlin WU
          </h1>
          <h2 className={`${styles.sous_titre} ${isVisible ? styles.visible : ""}`}>
            Jeune diplomé de l'UTC en 2024
          </h2>
        </div>
      </div>
    </header>
  );
}