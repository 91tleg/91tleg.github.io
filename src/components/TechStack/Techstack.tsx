import styles from "../TechStack/TechStack.module.css"
import c from "../../assets/c.png"
import cpp from "../../assets/cpp.png"
import py from "../../assets/py.png"
import freertos from "../../assets/freertos.png"
import idf from "../../assets/idf.png"
import hal from "../../assets/hal.png"
import cmake from "../../assets/cmake.png"
import gtest from "../../assets/gtest.png"
import unity from "../../assets/unity.png"

export default function TechStack() {
  const techs = [
    { name: "C", icon: c },
    { name: "C++", icon: cpp },
    { name: "Python", icon: py },
    { name: "FreeRTOS", icon: freertos },
    { name: "ESP-IDF", icon: idf },
    { name: "STM32Cube", icon: hal },
    { name: "CMake", icon: cmake },
    { name: "GTest", icon: gtest },
    { name: "Unity", icon: unity },
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