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
        I have experience working with microcontrollers, device drivers, peripheral programming, 
        RTOS-based systems, and performance optimization for resource-constrained systems.
        I love solving challenging engineering problems, exploring new technologies, and applying
        low-level programming skills to real-world problems.
      </div>
    </div>
  );
}