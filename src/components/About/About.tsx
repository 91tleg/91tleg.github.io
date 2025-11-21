import styles from "../About/About.module.css"

export default function About() {
  return (
    <div className={styles["page"]}>
      <div className={styles["head"]}>
        Hello, my name is Max Chou
      </div>

      <div className={styles["desc"]}>
        I'm a computer science student at Bellevue College.
      </div>
      <div className={styles["desc"]}>
        I'm passionate about embedded systems, C/C++ programming, and firmware development.
        I loves tinkering with cars just as much as I love programming. When I'm not building
        or debugging embedded projects, you'll probably find me under the hood of my car,
        figuring out how things work (and occasionally making them work better).
      </div>
    </div>
  );
}