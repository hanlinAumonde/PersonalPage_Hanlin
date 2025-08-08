import Grid from "@mui/material/Grid2";
import styles from "../styles/MainContainer.module.css";
import NavBar from "./NavBar.component";
import Profil from "./Contents/Profil.component";
import Skills from "./Contents/Skills.component";
import Experience from "./Contents/Experience.component";
import Projects from "./Contents/Projects.component";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions, MoveDirection, OutMode, type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { useEffect, useMemo, useState, memo } from "react";
import CustomFab from "../util/ui/CustomFab";
import useWindowWidthChange from "../util/hooks/useWindowWidthChange";

function MainContainer() {
    const [init, setInit] = useState(false);
    const changeLayout = useWindowWidthChange();
    const boxShadowStyle = "18px 18px 0 1px";

    useEffect(() => {
        // Initialisation du moteur de particules
        const initializeParticlesEngine = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
                setInit(true);
            } catch (error) {
                console.error("Erreur lors de l'initialisation de tsParticles:", error);
            }
        };
        
        initializeParticlesEngine();
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Particules chargées:", container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
          background: {
            color: {
              value: "#F3F2FA" // Couleur de fond des particules
            }
          },
          fullScreen: {
            enable: true,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 70,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#353131",
            },
            links: {
              color: "#c2c2c2",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 320,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
    );

    return (
        <main className={styles.mainContainer}>
            {/* Particules - assurez-vous qu'elles ont un bon positionnement */}
                {init ? 
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                    : null
                }
            
            <Grid container spacing={4} size={{xs:12}} sx={{overflow: 'visible', position: 'relative', zIndex: 2}}>
                <Grid size={{xs: changeLayout? 12 : 10}} sx={{paddingRight: '2rem'}}>
                    <div className={`${styles.contentSection} ${styles.profileSection}`} 
                      style={{
                        background: 'linear-gradient(to right,rgb(187, 232, 251) 0%, rgb(101, 181, 251) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(98, 134, 205, 0.41)',
                      }} 
                      id="Profils">
                        <Profil />
                    </div>
                    
                    <div className={`${styles.contentSection} ${styles.skillsSection}`}
                      style={{
                        background: 'linear-gradient(to right,rgb(252, 254, 121) 0%, rgb(254, 255, 221) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(128, 130, 12, 0.44)',
                      }}
                      id="Skills">
                        <Skills />
                    </div>
                    
                    <div className={`${styles.contentSection} ${styles.experienceSection}`}
                      style={{
                        background: 'linear-gradient(to left,rgb(187, 255, 154) 0%, rgb(244, 255, 230) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(85, 177, 116, 0.52)',
                      }}
                      id="Experience">
                        <Experience />
                    </div>
                    
                    <div className={`${styles.contentSection} ${styles.projectsSection}`}
                      style={{
                        background: 'linear-gradient(to left,rgb(231, 220, 255) 0%, rgb(199, 254, 255) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(150, 124, 182, 0.41)',
                      }}
                      id="Projects">
                        <Projects />
                    </div>
                </Grid>
                <Grid size={{xs: changeLayout? 0 : 2}} sx={{position: 'relative'}}>
                    {changeLayout? null:
                      <div className={styles.stickySidebar}>
                        <NavBar />
                      </div>
                    }
                </Grid>
            </Grid>
            <CustomFab changeLayout={changeLayout} />
        </main>
    );
}

export default memo(MainContainer);