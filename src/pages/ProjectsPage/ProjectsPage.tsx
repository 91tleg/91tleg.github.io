import Projects from "../../components/Projects/Projects";
import styles from "../ProjectsPage/ProjectsPage.module.css"

export default function ProjectsPage() {
    return (
        <div className={styles["page"]}>
            <Projects />
        </div>
    );
}