import About from "../../components/About/About"
import Projects from "../../components/Projects/Projects"
import TechStack from "../../components/TechStack/Techstack"
import styles from "../HomPage/HomePage.module.css"

export default function HomePage() {
    return (
        <div className={styles["page"]}>
            <About />
            <div className={styles["head"]}>
                My tech stack:
            </div>
            <TechStack />

            <div className={styles["head"]}>
                My projects:
                <Projects />
            </div>
            
        </div>
    )
};