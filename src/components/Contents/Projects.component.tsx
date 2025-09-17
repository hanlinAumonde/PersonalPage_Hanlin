import { useEffect, useRef, useState, useContext } from 'react';
import styles from '../../styles/Projects.module.css';
import Grid from "@mui/material/Grid2";
import { GitHub, Language } from '@mui/icons-material';
import useIntersectionAnimation from '../../util/hooks/useIntersectionAnimation';
import { languageContext, LanguageContextType } from '../../languageContext';
import { getProjectsText, ProjectsText } from '../../util/TextContent/ProjectsData';
import useWindowWidthChange from '../../util/hooks/useWindowWidthChange';
import CarouselControl from '../../util/ui/CarouselControll';

function Projects() {
  const language: LanguageContextType = useContext(languageContext);
  const projectsText: ProjectsText = getProjectsText(language);

  // État pour suivre les indices et transitions
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isTransitioningImage, setIsTransitioningImage] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [projectsRef, isVisible] = useIntersectionAnimation<HTMLElement>();
  const changeLayout = useWindowWidthChange();
  const projectCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const currentProject = projectsText.projects[currentProjectIndex];
  const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/projects/';

  // Préchargement des premiers images de chaque projet
  useEffect(() => {
    projectsText.projects.forEach((project) => {
      if (project.screenshots.length > 0) {
        const preloadImage = new Image();
        preloadImage.onload = () => {
        };
        preloadImage.src = `${baseUrl}${project.screenshots[0]}`;
      }
    });
    //setLandScapes(landScapes);
  }, [projectsText.projects, baseUrl]);
  
  // Préchargement de l'image actuelle
  useEffect(() => {
    if (currentProject.screenshots.length > 0) {
      const img = new Image();
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
    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, [currentProject]);
  
  // Changement de projet avec transitions
  const changeProject = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setCurrentImageIndex(0);
      setTimeout(() => {
        if(imageRef.current && imageRef.current.complete) {
          updateContainerHeight();
        }
        setIsTransitioning(false)
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
        setTimeout(() => setIsTransitioningImage(false), 50);
      }, 300);
    };
    imagePreload.src = `${baseUrl}${currentProject.screenshots[newIndex]}`;
  };
  
  // Navigation entre projets
  const goToPreviousProject = () => {
    const newIndex = currentProjectIndex === 0 ? projectsText.projects.length - 1 : currentProjectIndex - 1;
    changeProject(newIndex);
  };
  
  const goToNextProject = () => {
    const newIndex = currentProjectIndex === projectsText.projects.length - 1 ? 0 : currentProjectIndex + 1;
    changeProject(newIndex);
  };

  const goToPreviousImage = () => {
    const newIndex = currentImageIndex === 0 ? currentProject.screenshots.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = currentImageIndex === currentProject.screenshots.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex);
  };

  return (
    <section 
      ref={projectsRef} 
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ""}`}
    >
      <h2 id="projects-heading" className={styles.sectionTitle}>{projectsText.sectionTitle}</h2>
      <CarouselControl 
        goToPrevious={goToPreviousProject}
        goToNext={goToNextProject}
        currentIndex={currentProjectIndex}
        isTransitioning={isTransitioning}
        changeItem={changeProject}
        totalItems={projectsText.projects.length}
      />
      <div 
        className={styles.projectSliderContainer}
        style={{ height: containerHeight ? `${containerHeight + 40}px` : 'auto' }}
      >
        <div 
          className={`${styles.projectCard} ${isTransitioning ? styles.transitioning : ''}`}
          ref={projectCardRef}
        >
          <Grid container spacing={3}>
            <Grid size={12}>
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  {currentProject.icon && (
                    <div className={styles.projectIcon}>
                      <img src={`${baseUrl}${currentProject.icon}`} alt={`${currentProject.name} icône`} />
                    </div>
                  )}
                  <h3 className={styles.projectName}>
                    {currentProject.name}
                  </h3>
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
                      <span>{projectsText.sourceCodeText}</span>
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
                      <span>{projectsText.websiteText}</span>
                    </a>
                  )}
                </div>
                <div className={styles.projectContext}>
                  <p>{currentProject.context}</p>
                </div>
                
              </div>
            </Grid>
            <Grid size={changeLayout? 12 : 6}>
              <div className={styles.projectInfo}>
                <div className={styles.projectMissions}>
                  <h4>{projectsText.missionsTitle}</h4>
                  <ul>
                    {currentProject.missions.length == 1? 
                      Object.keys(currentProject.missions[0] as { [key: string]: string[] }).map((section, idx) => (
                        <li key={idx}>
                          <strong>{section}:</strong>
                          <ul>
                            {(currentProject.missions[0] as { [key: string]: string[] })[section].map((task, taskIdx) => (
                              <li key={taskIdx}>{task}</li>
                            ))}
                          </ul>
                        </li>
                      ))
                    :
                    (currentProject.missions as string[]).map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))
                  }
                  </ul>
                </div>
                
                <div className={styles.projectTechnologies}>
                  <h4>{projectsText.technologiesTitle}</h4>
                  <div className={styles.techTags}>
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={changeLayout ? 12 : 6}>
              <div className={styles.projectGallery}>
                <div className={`${styles.screenshot}`}>
                  <div className={`${styles.screenshotContainer} ${isTransitioningImage ? styles.fadeTransition : ''}`}>
                    {currentProject.screenshots.length > 0 && (
                      <img 
                        ref={imageRef}
                        src={`${baseUrl}${currentProject.screenshots[currentImageIndex]}`} 
                        alt={`${currentProject.name} capture d'écran`} 
                        //onLoad={updateContainerHeight}
                      />
                    )}
                  </div>
                </div>
                <br/>
                {currentProject.screenshots.length > 1 && (
                  <CarouselControl
                    goToPrevious={goToPreviousImage}
                    goToNext={goToNextImage}
                    currentIndex={currentImageIndex}
                    isTransitioning={isTransitioningImage}
                    changeItem={changeImage}
                  totalItems={currentProject.screenshots.length}
                />)}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Projects;
