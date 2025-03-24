import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Projects.module.css';
import Grid from "@mui/material/Grid2";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { ProjectsProp } from '../../util/ProjectsData';
import { Link } from '@mui/material';

function Projects({projectsData}:ProjectsProp){
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);
  
  const currentProject = projectsData[currentProjectIndex];
  
  const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/projects/';

  // 计算并设置容器高度
  const updateContainerHeight = () => {
    if (projectCardRef.current) {
      setContainerHeight(projectCardRef.current.offsetHeight);
    }
  };
  
  // 在组件挂载和项目切换后更新高度
  useEffect(() => {
    updateContainerHeight();
    // 添加窗口大小变化监听器
    window.addEventListener('resize', updateContainerHeight);
    
    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, [currentProject]);
  
  const changeProject = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setCurrentImageIndex(0);
      setTimeout(() => {
        setIsTransitioning(false);
        // 项目切换完成后更新容器高度
        updateContainerHeight();
      }, 50);
    }, 300); // 等待淡出动画完成
  };
  
  const goToPreviousProject = () => {
    const newIndex = currentProjectIndex === 0 ? projectsData.length - 1 : currentProjectIndex - 1;
    changeProject(newIndex);
  };
  
  const goToNextProject = () => {
    const newIndex = currentProjectIndex === projectsData.length - 1 ? 0 : currentProjectIndex + 1;
    changeProject(newIndex);
  };
  
  const goToPreviousImage = () => {
    if (currentProject.screenshots.length <= 1) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.screenshots.length - 1 : prev - 1
    );
  };
  
  const goToNextImage = () => {
    if (currentProject.screenshots.length <= 1) return;
    setCurrentImageIndex((prev) => 
      prev === currentProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <>
      <h2 className={styles.sectionTitle} style={{fontSize:36}}>Projets</h2>
      
      <div 
        className={styles.projectSliderContainer} 
        style={{ height: containerHeight ? `${containerHeight + 40}px` : 'auto' }}
      >
        <IconButton 
          className={styles.navArrow} 
          onClick={goToPreviousProject}
          aria-label="Previous project"
          disabled={isTransitioning}
        >
          <ArrowBackIos />
        </IconButton>
        
        <div 
          className={`${styles.projectCard} ${isTransitioning ? styles.fadeTransition : ''}`}
          ref={projectCardRef}
        >
          <Grid container spacing={2}>
            <Grid size={{xs:12, md:6}} className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                {currentProject.icon && (
                  <div className={styles.projectIcon}>
                    <img src={`${baseUrl}` + currentProject.icon} alt={`${currentProject.name} icon`} />
                  </div>
                )}
                <h3 className={styles.projectName}>{currentProject.name}</h3>
              </div>
              
              <div className={styles.projectContext}>
                <h4>Context</h4>
                <p>{currentProject.context}</p>
                {currentProject.link && (
                  <>
                    <p>Lien du site : </p>
                    <Link href={currentProject.link} target="_blank" color="inherit">{currentProject.link}</Link>
                  </>
                )}
              </div>
              
              <div className={styles.projectFunctionality}>
                <h4>Missions réalisés</h4>
                <ul>
                  {currentProject.missions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.projectTechnologies}>
                <h4>Tech-util:</h4>
                <div className={styles.techIcons}>
                  {currentProject.technologies.map((tech, index) => (
                    <div key={index} className={styles.techBadge}>{tech}</div>
                  ))}
                </div>
              </div>
            </Grid>
            
            <Grid size={{xs:12, md:6}} className={styles.screenshotContainer}>
              <div className={styles.screenshot}>
                {currentProject.screenshots.length > 0 && (
                  <img 
                    src={`${baseUrl}` + currentProject.screenshots[currentImageIndex]} 
                    alt={`${currentProject.name} screenshot`} 
                  />
                )}
                
                {currentProject.screenshots.length > 1 && (
                  <div className={styles.screenshotNavigation}>
                    <IconButton 
                      className={styles.screenshotNavButton} 
                      onClick={goToPreviousImage}
                      aria-label="Previous image"
                    >
                      <ArrowBackIos fontSize="small" />
                    </IconButton>
                    <IconButton 
                      className={styles.screenshotNavButton} 
                      onClick={goToNextImage}
                      aria-label="Next image"
                    >
                      <ArrowForwardIos fontSize="small" />
                    </IconButton>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        <IconButton 
          className={styles.navArrow} 
          onClick={goToNextProject}
          aria-label="Next project"
          disabled={isTransitioning}
        >
          <ArrowForwardIos />
        </IconButton>
      </div>
      
      <div className={styles.projectIndicators}>
        {projectsData.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.indicator} ${index === currentProjectIndex ? styles.activeIndicator : ''}`}
            onClick={() => {
              if (index !== currentProjectIndex && !isTransitioning) {
                changeProject(index);
              }
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;