import Grid from "@mui/material/Grid2";
import styles from "../styles/MainContainer.module.css";
import NavBar from "./NavBar.component";

export default function MainContainer() {
    return (
        <main className={styles.mainContainer}>
            <Grid container spacing={4} size={{xs:12}} sx={{overflow: 'visible'}}>
                <Grid size={{xs:10}} sx={{paddingRight: '2rem'}}>
                    <div className={styles.contentSection}>
                        <h2>A propos de moi</h2>
                        <p>Introduction personnelle...</p>
                    </div>
                    
                    <div className={styles.contentSection}>
                        <h2>Compétences</h2>
                        <p>Énumérez vos compétences techniques et professionnelles ici.</p>
                        <ul>
                            <li>Front-end: React, TypeScript, Material UI, ...</li>
                            <li>Backend: Node.js, Java ...</li>
                            <li>Autre compétences: Git, Docker, ...</li>
                        </ul>
                    </div>
                    
                    <div className={styles.contentSection}>
                        <h2>Expérience professionnelle</h2>
                        <div className={styles.experienceItem}>
                            <h3>Poste actuel - </h3>
                            <p className={styles.date}>20XX - 20YY</p>
                            <p>Decscription de votre travail et réalisations...</p>
                        </div>
                        <div className={styles.experienceItem}>
                            <h3>Poste précédent - </h3>
                            <p className={styles.date}>20XX - 20YY</p>
                            <p>Decscription de votre travail et réalisations...</p>
                        </div>
                    </div>
                    
                    <div className={styles.contentSection}>
                        <h2>Projets</h2>
                        <p>Montrez vos projets et contributions ici.</p>
                        <div className={styles.projectItem}>
                            <h3>Un projet</h3>
                            <p>Projet description et votre contribution...</p>
                        </div>
                        <div className={styles.projectItem}>
                            <h3>Un autre projet</h3>
                            <p>Projet description et votre contribution...</p>
                        </div>
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