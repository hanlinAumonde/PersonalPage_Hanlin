// Projects.component.tsx avec transitions d'image préservées

import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Projects.module.css';
import Grid from "@mui/material/Grid2";
import { GitHub, Language, ChevronLeft, ChevronRight } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { ProjectsProp } from '../../util/TextContent/ProjectsData';
import useIntersectionAnimation from '../../util/hooks/useIntersectionAnimation';

function Projects({projectsData}: ProjectsProp) {
  // État pour suivre les indices et transitions
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTransitioningImage, setIsTransitioningImage] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [isLandscapeOrientation, setIsLandscapeOrientation] = useState(false);
  
  const [projectsRef, isVisible] = useIntersectionAnimation<HTMLElement>();
  const projectCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const currentProject = projectsData[currentProjectIndex];
  const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/projects/';

  // Préchargement des premiers images de chaque projet
  useEffect(() => {
    projectsData.forEach((project) => {
      if (project.screenshots.length > 0) {
        const preloadImage = new Image();
        preloadImage.src = `${baseUrl}${project.screenshots[0]}`;
      }
    });
  }, [projectsData, baseUrl]);
  
  // Détection de l'orientation de l'image
  useEffect(() => {
    if (currentProject.screenshots.length > 0) {
      const img = new Image();
      img.onload = () => {
        // Si le ratio largeur/hauteur est supérieur à 1.2, considérer comme paysage
        const isLandscape = img.width / img.height > 1.2;
        setIsLandscapeOrientation(isLandscape);
      };
      img.src = `${baseUrl}${currentProject.screenshots[currentImageIndex]}`;
    }
  }, [currentProject, currentImageIndex, baseUrl]);
  
  // Calcul et mise à jour de la hauteur du conteneur
  const updateContainerHeight = () => {
    if (projectCardRef.current) {
      setContainerHeight(projectCardRef.current.offsetHeight);
    }
  };
  
  // Mise à jour de la hauteur lors du changement de projet ou de redimensionnement
  useEffect(() => {
    updateContainerHeight();
    
    window.addEventListener('resize', updateContainerHeight);
    
    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [currentProject, isLandscapeOrientation]);
  
  // Changement de projet avec transitions
  const changeProject = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setCurrentImageIndex(0);
      setTimeout(() => {
        setIsTransitioning(false);
        // Mise à jour de la hauteur après transition
        updateContainerHeight();
      }, 50);
    }, 300);
  };

  // Changement d'image avec transitions et préchargement
  const changeImage = (newIndex: number) => {
    if (isTransitioningImage || currentImageIndex === newIndex) return;
    
    setIsTransitioningImage(true);
    const imagePreload = new Image();
    imagePreload.onload = () => {
      setTimeout(() => {
        setCurrentImageIndex(newIndex);
        setTimeout(() => {
          setIsTransitioningImage(false);
          // Mise à jour de la hauteur après transition
          updateContainerHeight();
        }, 50);
      }, 300);
    };
    imagePreload.src = `${baseUrl}${currentProject.screenshots[newIndex]}`;
  };
  
  // Navigation entre projets
  const goToPreviousProject = () => {
    const newIndex = currentProjectIndex === 0 ? projectsData.length - 1 : currentProjectIndex - 1;
    changeProject(newIndex);
  };
  
  const goToNextProject = () => {
    const newIndex = currentProjectIndex === projectsData.length - 1 ? 0 : currentProjectIndex + 1;
    changeProject(newIndex);
  };
  
  return (
    <section 
      ref={projectsRef} 
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 className={styles.sectionTitle}>Projets</h2>
      <div className={styles.carouselControls}>
        <IconButton 
          className={styles.carouselArrow} 
          onClick={goToPreviousProject}
          disabled={isTransitioning}
          aria-label="Projet précédent"
        >
          <ChevronLeft />
        </IconButton>
        
        <div className={styles.indicators}>
          {projectsData.map((_, index) => (
            <button 
              key={index}
              className={`${styles.indicator} ${index === currentProjectIndex ? styles.activeIndicator : ''}`}
              onClick={() => changeProject(index)}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
        
        <IconButton 
          className={styles.carouselArrow} 
          onClick={goToNextProject}
          disabled={isTransitioning}
          aria-label="Projet suivant"
        >
          <ChevronRight />
        </IconButton>
      </div>
      <div 
        className={styles.projectSliderContainer}
        style={{ height: containerHeight ? `${containerHeight + 40}px` : 'auto' }}
      >
        <div 
          className={`${styles.projectCard} ${isTransitioning ? styles.transitioning : ''}`}
          ref={projectCardRef}
        >
          <Grid container spacing={3}>
            <Grid size={12} sx={{md:7}}>
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  {currentProject.icon && (
                    <div className={styles.projectIcon}>
                      <img src={`${baseUrl}${currentProject.icon}`} alt={`${currentProject.name} icône`} />
                    </div>
                  )}
                  <h3 className={styles.projectName}>{currentProject.name}</h3>
                </div>
                
                <div className={styles.projectContext}>
                  <p>{currentProject.context}</p>
                </div>
                
                <div className={styles.projectLinks}>
                  {currentProject.repo && (
                    <a 
                      href={currentProject.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <GitHub fontSize="small" />
                      <span>Code source</span>
                    </a>
                  )}
                  
                  {currentProject.link && (
                    <a 
                      href={currentProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <Language fontSize="small" />
                      <span>Site web</span>
                    </a>
                  )}
                </div>
                
                <div className={styles.projectMissions}>
                  <h4>Missions réalisées</h4>
                  <ul>
                    {currentProject.missions.map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.projectTechnologies}>
                  <h4>Technologies utilisées</h4>
                  <div className={styles.techTags}>
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={12} sx={{md:5}}>
              <div className={styles.projectGallery}>
                <div className={`${styles.screenshot} ${isLandscapeOrientation ? styles.landscapeScreenshot : ''}`}>
                  <div className={`${styles.screenshotContainer} ${isTransitioningImage ? styles.fadeTransition : ''}`}>
                    {currentProject.screenshots.length > 0 && (
                      <img 
                        ref={imageRef}
                        src={`${baseUrl}${currentProject.screenshots[currentImageIndex]}`} 
                        alt={`${currentProject.name} capture d'écran`} 
                      />
                    )}
                  </div>
                </div>
                {currentProject.screenshots.length > 1 && (
                    <div className={styles.screenshotNavigation}>
                      {currentProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.screenshotDot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                          onClick={() => changeImage(index)}
                          aria-label={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Projects;