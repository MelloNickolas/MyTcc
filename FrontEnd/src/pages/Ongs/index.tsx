import FullToolbar from "../../components/FullToolbar";
import styles from "./Ongs.module.scss";
import testefoto from "../../assets/animais/nescau.jpg"

export default function Ongs() {
    return<>
        <body>
            <FullToolbar/>

            <div className={styles.list}>

                <div className={styles.card}>
                    <div className={styles.imgBox}>
                        <img src={testefoto} alt="Foto da Ong" />
                    </div>
                </div>

            </div>

        </body>
    </>
}
