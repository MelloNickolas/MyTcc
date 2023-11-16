import FullToolbar from "../../components/FullToolbar";
import styles from "./Ongs.module.scss";
import { GrMapLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import data from "../../dados/ongs";

export default function Ongs() {
  return (
    <>
      <body className={styles.back}>
        <FullToolbar />

        <div className={styles.list}>
          {data.map((ongs) => {
            return (
              <div className={styles.card} key={ongs.id}>
                <div className={styles.imgBox}>
                  <img
                    src={ongs.fotoong}
                    alt=""
                    className={styles.imgBox__image}
                  />
                </div>
                <div className={styles.nome}>
                  <h1>{ongs.nomeong}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </>
  );
}
