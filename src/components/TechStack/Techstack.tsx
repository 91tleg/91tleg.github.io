import styles from "../TechStack/TechStack.module.css"
import c from "../../assets/c.png"
import cpp from "../../assets/cpp.png"
import py from "../../assets/py.png"

export default function TechStack() {
  const techs = [
    { name: "C", icon: c },
    { name: "C++", icon: cpp },
    { name: "Python", icon: py },
  ];

  return (
    <div className={styles["container"]}>
      {techs.map((tech) => (
        <div key={tech.name} className={styles["item"]}>
          <img src={tech.icon} alt={tech.name} className={styles["icon"]} />
          <span className={styles["name"]}>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}