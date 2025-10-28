import { useState } from "react";
import styles from "../Projects/Projects.module.css";

export default function Projects() {
  const projs = [
    {
      name: "Subaru Scan Tool",
      desc: `The Subaru Scan Tool is built with ESP-IDF using freeRTOS, designed to interface directly with Subaru 
              vehicles using the Subaru Select Monitor (SSM) protocol. It communicates 
              with the ECU to retrieve and display over 30 real-time data parameters, including sensor readings, 
              switch states, and vehicle diagnostics information.`,
      link: "https://github.com/91tleg/solid-couscous",
      yt: "https://youtube.com/embed/itZp_FdnkTw?si=PxY3jLz4wu71zFWZ"
    },
    {
      name: "OCR Calculator",
      desc: `A calculator that recognizes handwritten math equations using TensorFlow Lite Micro, running fully offline on STM32. 
              Written in C++. Through this project, I learned interface design and embedded machine learning,
              combining firmware engineering with structured, testable software practices.`,
      link: "https://github.com/91tleg/ocr-calculator",
      yt: ""
    },
    {
      name: "Legguino",
      desc: `An Arduino-based version of the Subaru SSM Scan Tool, my first major embedded systems project.
              Through this project, I learned the fundamentals of serial communication, protocol parsing,
              and low-level hardware interfacing.
              It also helped me develop a stronger understanding of firmware structure, debugging techniques,
              and the importance of efficiency in resource-constrained environments.`,
      link: "https://github.com/91tleg/legguino",
      yt: "https://youtube.com/embed/CT1ohTnKfFU?si=VvriDDRA4X8IWd2R"
    },
    {
      name: "Arduino Big Numbers LCD Library",
      desc: "An LCD library for rendering large digits on HD44780 LCD with I2C.",
      link: "https://github.com/91tleg/bignumbersi2c",
      yt: "https://youtube.com/embed/empE1f6FC8M?si=3v5TRs7cru9YxNYY"
    },
  ];

  const [selected, setSelected] = useState(projs[0]);

  return (
    <div className={styles["container"]}>

      <div className={styles["grid"]}>
        {projs.map((proj) => (
          <div
            key={proj.name}
            className={`${styles["item"]} ${selected["name"] === proj.name ? styles["active"] : ""}`}
            onClick={() => setSelected(proj)}
          >

            <span className={styles["name"]}>{proj["name"]}</span>
          </div>
        ))}
      </div>

      <div className={styles["detail"]}>
        <div className={styles["detail-info"]}>
          <h2>{selected.name}</h2>
          <p>{selected.desc}</p>
          <div className={styles["yt-container"]}>
            <iframe
              className={styles["yt"]}
              src={selected.yt}
              title="YouTube Shorts Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          <a href={selected.link} target="_blank" rel="noreferrer">
            View Project on GitHub→
          </a>
        </div>
      </div>
    </div>
  );
}
