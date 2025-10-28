import { useNavigate } from "react-router-dom";
import styles from "../HomeButton/HomeButton.module.css"

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      className={styles["button"]}
      onClick={() => navigate("/")}
    >
      Go Home
    </button>
  );
}