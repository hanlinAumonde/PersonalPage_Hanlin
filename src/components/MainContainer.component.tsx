import Grid from "@mui/material/Grid2";
import styles from "../styles/MainContainer.module.css";
import NavBar from "./NavBar.component";
import Profil from "./Contents/Profil.component";
import Skills from "./Contents/Skills.component";
import Experience from "./Contents/Experience.component";
import Projects from "./Contents/Projects.component";
import projectsData from "../util/ProjectsData";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions, MoveDirection, OutMode, type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { useEffect, useMemo, useState } from "react";

export default function MainContainer() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
          background: {
            color: {
              value: "#edf2fd"
            }
          },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          fpsLimit: 90,
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
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#949494",
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
              speed: 6,
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
            {
                init? 
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                    : null
            }
            <Grid container spacing={4} size={{xs:12}} sx={{overflow: 'visible'}}>
                <Grid size={{xs:10}} sx={{paddingRight: '2rem'}}>
                    <div className={styles.contentSection} style={{backgroundColor: '#cce7ff'}} id="Profils">
                        <Profil />
                    </div>
                    
                    <div className={styles.contentSection} style={{backgroundColor:'#fdfde2'}} id="Skills">
                        <Skills />
                    </div>
                    
                    <div className={styles.contentSection} style={{backgroundColor:'#f2fff0'}} id="Experience">
                        <Experience />
                    </div>
                    
                    <div className={styles.contentSection} style={{backgroundColor:'#ebffff'}} id="Projects">
                        <Projects projectsData={projectsData}  />
                    </div>
                </Grid>
                <Grid size={{xs:2, md:2}} sx={{position: 'relative'}}>
                    <div className={styles.stickySidebar}>
                        <NavBar />
                    </div>
                </Grid>
            </Grid>
        </main>
    )
}