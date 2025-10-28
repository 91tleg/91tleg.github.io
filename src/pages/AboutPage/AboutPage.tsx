import About from "../../components/About/About";
import styles from "../AboutPage/AboutPage.module.css"

export default function AboutPage() {
  return (
    <div className={styles["page"]}>
      <About />
    </div>
  );
}