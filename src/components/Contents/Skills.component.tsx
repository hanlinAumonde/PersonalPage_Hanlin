import CardKanban from "../../util/cardKanban";
import {skillLevel} from "../../util/cardKanban";
import styles from "../../styles/Skills.module.css";

export default function Skills() {
    const baseUrl = (import.meta.env.BASE_URL || '/') + 'assets/skills/';
    return (
        <>
            <h2 style={{fontSize:36}}>Compétences</h2>
            <ul className={styles.skillsList}>
                <li>
                    <h3>Front-end:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={`${baseUrl}javascript.svg`} name="JavaScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}typescript.svg`} name="TypeScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}html.svg`} name="HTML5" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}css.svg`} name="CSS3" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}react.svg`} name="ReactJS" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}angular.svg`} name="Angular" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Backend:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={`${baseUrl}java.svg`} name="Java" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}python.svg`} name="Python" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}cpp.svg`} name="C++" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}golang.svg`} name="Golang" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={`${baseUrl}sql.svg`} name="SQL" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={`${baseUrl}spring.svg`} name="Spring-boot" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}apache-camel.svg`} name="Apache Camel" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}postgresql.svg`} name="PostgreSQL" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}mongodb.svg`} name="MongoDB" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}rabbitmq.svg`} name="RabbitMQ" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Autre compétences:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={`${baseUrl}git.svg`} name="Git" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}docker.svg`} name="Docker" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}linux.svg`} name="Linux" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}websocket.svg`} name="WebSocket" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={`${baseUrl}oauth.svg`} name="OAuth2 / OIDC" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={`${baseUrl}api.svg`} name="Restful API" level={skillLevel.beginner}/>
                    </div>
                </li>
            </ul>
        </>
    );
}