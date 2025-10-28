import styles from "./Header.module.css"
import cat from "../../assets/cat.gif"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles["header"]}>
      <img className={styles["img"]} src={cat} onClick={() => navigate("/")} />
      <div className={styles["right"]}>

        <div
          className={styles["about"]}
          onClick={() => navigate("/about")}
        >
          ABOUT
        </div>
        <div
          className={styles["projects"]}
          onClick={() => navigate("/projects")}
        >
          PROJECTS
        </div>

        <div
          className={styles["github"]}
          onClick={() => window.open("https://linkedin.com/in/91tleg")}
        >
          LINKEDIN
        </div>

        <div
          className={styles["github"]}
          onClick={() => window.open("https://github.com/91tleg")}
        >
          GITHUB
        </div>

      </div>
    </div>
  );
}