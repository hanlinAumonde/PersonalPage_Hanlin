import Grid from "@mui/material/Grid2";
import styles from "../../styles/Profil.module.css";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Profil() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const baseUrl = import.meta.env.BASE_URL || '/';
    return (
        <Box className={styles.container}>
            <Grid container spacing={isMobile ? 2 : 4} alignItems="center">
                <Grid size={8} alignItems={"center"}>
                    <h2 className={styles.h2}><strong>Hanlin WU</strong></h2>
                    <p className={styles.p}>Jeune Diplôme de <strong>l'Université de Technologie de Compiègne</strong>, <br/>
                    filière systèmes et réseaux informatiques, <br/>
                    passionné par l'informatique, la découverte et l'apprentissage de nouvelles technologies
                    </p>
                    <Box className={styles.logoContainer}>
                        <img src={`${baseUrl}assets/logo_utc.png`} alt="UTC" className={styles.logo} />
                    </Box>
                </Grid>
                <Grid size={4}>
                    <Box className={styles.imageWrapper}>
                        <img src={`${baseUrl}assets/photo.jpg`} alt="Hanlin" className={styles.img} />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}