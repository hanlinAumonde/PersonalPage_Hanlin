import styles from '../../styles/Experience.module.css';

export default function Experience() {
    return (
        <>
            <h2 style={{color:'#4bb823'}}>Expérience professionnelle</h2>
            <div className={styles.experienceItem}>
                <h3 className={styles.h3}>Renault Group - stagiaire développeur Back-end Java EE</h3>
                <p className={styles.date}>03/2024 - 08/2024</p>
                <div className={styles.emphasize}>
                    <ul>
                        <li>Contribué à la refonte d'une application d'intégration de la documentation véhicules, </li>
                        <li>Optimisant le processus de gestion documentaire avec le Framework <strong>Apache Camel</strong>, en utilisant une base <strong>MongoDB</strong></li>
                        <li>Dirigé la migration de l'application vers <strong>Spring Boot</strong> avec le dernière version du Apache Camel, améliorant la performance et la scalabilité (en effectuant des POC dans différents scénarios) </li>
                        <li>Refait tous les tests unitaires vers <strong>JUnit 5 </strong>pour assurer la fiabilité et la robustesse des fonctionnalités critiques.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.experienceItem}>
                <h3 className={styles.h3}>Cerema - stagiaire assistance ingénieur</h3>
                <p className={styles.date}>11/2021 - 04/2022</p>
                <div className={styles.emphasize}>
                    <ul>
                        <li>
                            Développement d'un outil de pilotage automatique de bateau en milieu fluvial basé sur un logiciel 'Navmer', 
                            permettant la définition et l'optimisation des commandes nécessaires au pilotage du bateau en fonction de son état actuel 
                        </li>
                        <li>
                            Le travail consistait à apprendre les algorithmes de navigation et de pilotage sur les articles scientifiques,
                            analysait les différentes solutions existantes et proposait une solution optimale pour le pilotage automatique.
                            et puis développer des algorithmes en <strong>Python</strong>.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}