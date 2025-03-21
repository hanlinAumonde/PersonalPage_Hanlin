import CardKanban from "../../util/cardKanban";
import {skillLevel} from "../../util/cardKanban";
import styles from "../../styles/Skills.module.css";
import jsIcon from "/assets/skills/javascript.svg";
import tsIcon from "/assets/skills/typescript.svg";
import htmlIcon from "/assets/skills/html.svg";
import cssIcon from "/assets/skills/css.svg";
import reactIcon from "/assets/skills/react.svg";
import angularIcon from "/assets/skills/angular.svg";
import javaIcon from "/assets/skills/java.svg";
import pythonIcon from "/assets/skills/python.svg";
import cppIcon from "/assets/skills/cpp.svg";
import golangIcon from "/assets/skills/golang.svg";
import sqlIcon from "/assets/skills/sql.svg";
import springIcon from "/assets/skills/spring.svg";
import camelIcon from "/assets/skills/apache-camel.svg";
import postgresqlIcon from "/assets/skills/postgresql.svg";
import mongodbIcon from "/assets/skills/mongodb.svg";
import rabbitmqIcon from "/assets/skills/rabbitmq.svg";
import gitIcon from "/assets/skills/git.svg";
import dockerIcon from "/assets/skills/docker.svg";
import linuxIcon from "/assets/skills/linux.svg";
import websocketIcon from "/assets/skills/websocket.svg";
import oauthIcon from "/assets/skills/oauth.svg";
import apiIcon from "/assets/skills/api.svg";

export default function Skills() {
    return (
        <>
            <h2 style={{fontSize:36}}>Compétences</h2>
            <ul className={styles.skillsList}>
                <li>
                    <h3>Front-end:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={jsIcon} name="JavaScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={tsIcon} name="TypeScript" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={htmlIcon} name="HTML5" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={cssIcon} name="CSS3" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={reactIcon} name="ReactJS" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={angularIcon} name="Angular" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Backend:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={javaIcon} name="Java" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={pythonIcon} name="Python" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={cppIcon} name="C++" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={golangIcon} name="Golang" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={sqlIcon} name="SQL" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={springIcon} name="Spring-boot" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={camelIcon} name="Apache Camel" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={postgresqlIcon} name="PostgreSQL" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={mongodbIcon} name="MongoDB" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={rabbitmqIcon} name="RabbitMQ" level={skillLevel.beginner}/>
                    </div>
                </li>
                <li>
                    <h3>Autre compétences:</h3>
                    <div className={styles.scrollableCardContainer}>
                        <CardKanban logoUrl={gitIcon} name="Git" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={dockerIcon} name="Docker" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={linuxIcon} name="Linux" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={websocketIcon} name="WebSocket" level={skillLevel.intermediate}/>
                        <CardKanban logoUrl={oauthIcon} name="OAuth2 / OIDC" level={skillLevel.beginner}/>
                        <CardKanban logoUrl={apiIcon} name="Restful API" level={skillLevel.beginner}/>
                    </div>
                </li>
            </ul>
        </>
    );
}