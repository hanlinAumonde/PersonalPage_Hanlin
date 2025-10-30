import Grid from "@mui/material/Grid2";
import styles from "../styles/MainContainer.module.css";
import NavBar from "./NavBar.component";
import Profil from "./Contents/Profil.component";
import Skills from "./Contents/Skills.component";
import Experience from "./Contents/Experience.component";
import Projects from "./Contents/Projects.component";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import {useEffect, useMemo, useState, memo, useContext} from "react";
import useWindowWidthChange from "../util/hooks/useWindowWidthChange";
import {ts_particle_config} from "../config/ts_particle_config.ts";
import {getMenuItem} from "../util/TextContent/NavBarText.ts";
import {languageContext} from "../config/languageContext.ts";

function MainContainer() {
    const [init, setInit] = useState(false);
    const changeLayout = useWindowWidthChange();
    const boxShadowStyle = "18px 18px 0 1px";
    const language = useContext(languageContext);

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

    const options: ISourceOptions = useMemo(ts_particle_config,[],);

    return (
        <main className={styles.mainContainer}>
            {/* Particules - assurez-vous qu'elles ont un bon positionnement */}
                {init ? 
                    <Particles
                        id="tsparticles"
                        particlesLoaded={async () => console.log("Particules loaded")}
                        options={options}
                    />
                    : null
                }
            
            <Grid container spacing={4} size={{xs:12}} sx={{overflow: 'visible', position: 'relative', zIndex: 2}}>
                <Grid size={{xs: changeLayout? 12 : 10}} sx={{paddingRight: '2rem'}}>
                    <section
                      className={`${styles.contentSection} ${styles.profileSection}`}
                      style={{
                        background: 'linear-gradient(to right,rgb(187, 232, 251) 0%, rgb(101, 181, 251) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(98, 134, 205, 0.41)',
                      }}
                      id={getMenuItem(language)[0]}
                      aria-labelledby="profil-heading">
                        <Profil />
                    </section>

                    <section
                      className={`${styles.contentSection} ${styles.skillsSection}`}
                      style={{
                        background: 'linear-gradient(to right,rgb(252, 254, 121) 0%, rgb(254, 255, 221) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(128, 130, 12, 0.44)',
                      }}
                      id={getMenuItem(language)[1]}
                      aria-labelledby="skills-heading">
                        <Skills />
                    </section>

                    <section
                      className={`${styles.contentSection} ${styles.experienceSection}`}
                      style={{
                        background: 'linear-gradient(to left,rgb(187, 255, 154) 0%, rgb(244, 255, 230) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(85, 177, 116, 0.52)',
                      }}
                      id={getMenuItem(language)[2]}
                      aria-labelledby="experience-heading">
                        <Experience />
                    </section>

                    <section
                      className={`${styles.contentSection} ${styles.projectsSection}`}
                      style={{
                        background: 'linear-gradient(to left,rgb(231, 220, 255) 0%, rgb(199, 254, 255) 100%)',
                        boxShadow: boxShadowStyle + ' rgba(150, 124, 182, 0.41)',
                      }}
                      id={getMenuItem(language)[3]}
                      aria-labelledby="projects-heading">
                        <Projects />
                    </section>
                </Grid>
                <Grid size={{xs: changeLayout? 0 : 2}} sx={{position: 'relative'}}>
                    {changeLayout? null:
                      <div className={styles.stickySidebar}>
                        <NavBar />
                      </div>
                    }
                </Grid>
            </Grid>
            
        </main>
    );
}

export default memo(MainContainer);