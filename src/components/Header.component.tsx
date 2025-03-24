import { useState, useRef, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  
  useEffect(() => {
    // 首次加载时触发动画
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
        
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 当header进入视窗，先设置为不可见，
          // 然后迅速设置为可见以重新触发动画，使用setTimeout确保状态更新后再更改可见性
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        } else {
          // 当header离开视窗，设置为不可见
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.1 
    });
    
    // 开始观察当前header元素
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
        <header className={styles.header} ref={headerRef}>
            <div className={styles.container}>
                <h1 className={styles.titre + (isVisible ? ` ${styles.visible}` : "")}>
                    Bonjour ! Je suis Hanlin WU
                </h1>
                <h2 className={styles.sous_titre + (isVisible ? ` ${styles.visible}` : "")}>
                    Jenue diplomé de l'UTC en 2024
                </h2>
            </div>
        </header>
    );
}
