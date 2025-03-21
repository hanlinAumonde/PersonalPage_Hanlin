import CardKanban from "../../util/cardKanban";
import {skillLevel} from "../../util/cardKanban";
import styles from "../../styles/Skills.module.css";

export default function Skills() {
    return (
        <>
            <h2 style={{fontSize:36}}>Compétences</h2>
            <ul className={styles.skillsList}>
                <li>
                    <h3>Front-end:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl="public/assets/skills/javascript.svg" name="JavaScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/typescript.svg" name="TypeScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/html.svg" name="HTML5" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/css.svg" name="CSS3" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/react.svg" name="ReactJS" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/angular.svg" name="Angular" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Backend:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl="public/assets/skills/java.svg" name="Java" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/python.svg" name="Python" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/cpp.svg" name="C++" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/golang.svg" name="Golang" level={skillLevel.beginner}/>
                        <CardKanban logoUrl="public/assets/skills/sql.svg" name="SQL" level={skillLevel.beginner}/>
                        <CardKanban logoUrl="public/assets/skills/spring.svg" name="Spring-boot" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/apache-camel.svg" name="Apache Camel" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/postgresql.svg" name="PostgreSQL" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/mongodb.svg" name="MongoDB" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/rabbitmq.svg" name="RabbitMQ" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Autre compétences:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl="public/assets/skills/git.svg" name="Git" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/docker.svg" name="Docker" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/linux.svg" name="Linux" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/websocket.svg" name="WebSocket" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl="public/assets/skills/oauth.svg" name="OAuth2 / OIDC" level={skillLevel.beginner}/>
                        <CardKanban logoUrl="public/assets/skills/api.svg" name="Restful API" level={skillLevel.beginner}/>
                    </div>
                </li>
            </ul>
        </>
    );
}