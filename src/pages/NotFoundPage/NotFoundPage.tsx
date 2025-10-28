import styles from "../NotFoundPage/NotFoundPage.module.css"
import lol from "../../assets/lol.gif"
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className={styles["page"]}>
            <h1 className={styles["msg"]}>oops page not found</h1>
            <img 
                className={styles["img"]}
                src={lol}
                onClick={()=>navigate("/")}
            />
        </div>
    );
}