import Grid from "@mui/material/Grid2";
import styles from "../styles/MainContainer.module.css";
import NavBar from "./NavBar.component";

export default function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <Grid container spacing={4} size={{xs:12}}>
                <Grid size={{xs:10}}>

                </Grid>
                <Grid size={{xs:2}}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    )
}