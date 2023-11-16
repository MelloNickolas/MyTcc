import FullToolbar from "../../components/FullToolbar";
import styles from "./Ongs.module.scss";
import { GrMapLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import data from "../../dados/ongs"

export default function Ongs() {
  return (
    <>
      <body className={styles.back}>
        <FullToolbar />

        <div className={styles.list}>   
            {data.map((ongs) => {
                return(
                    <div className={styles.card} key={ongs.id}>
                    <div className={styles.imgBox}>
                      <img
                        src={ongs.fotoong}
                        alt="Foto da Ong"
                        className={styles.imgBox__image}
                      />
                    </div>
                    <div className={styles.textBox}>
                      <div className={styles.textBox__name}>{ongs.nomeong}</div>
                      <div className={styles.textBox__informations}>
                        <div className={styles.textBox__informations__text}>
                          <GrMapLocation />
                          <h1>{ongs.localizacao}</h1>
                        </div>
                        <div className={styles.textBox__informations__insta}>
                          <FaInstagram />
                          <h1>{ongs.instagram}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
      </body>
    </>
  );
}
