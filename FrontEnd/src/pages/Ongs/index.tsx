import FullToolbar from "../../components/FullToolbar";
import styles from "./Ongs.module.scss";
import { GrMapLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import data from "../../dados/ongs";
import { Link } from "react-router-dom";

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
                <div className={styles.nomeBox}>
                  <span className={styles.nomeBox__nome}>{ongs.nomeong}</span>
                </div>
                <div className={styles.classBox}>
                    <div className={styles.classBox__class}>
                      <GrMapLocation className={styles.svg} />
                      <h1>{ongs.localizacao}</h1>
                    </div>
                  <Link to={ongs.instagram}>
                    <div className={styles.classBox__classInsta}>
                      <FaInstagram className={styles.svg} />
                      <h1>{ongs.nomeinsta}</h1>
                    </div>
                  </Link>

                  <h1 className={styles.description}>{ongs.descricao}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </>
  );
}
