import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { BiCommentError, BiCode } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.back}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="" className={styles.left__img} />
        </div>
        <div className={styles.box}>
          <div className={styles.cardTitle}>
            <h1 className={styles.cardTitle__title}> QUER SABER MAIS?</h1>
          </div>
          <div className={styles.cardText}>
            <h1 className={styles.cardText__text}>
              PetMania é um programa criado em prol do bem estar dos animais,
              fomentando os laços do dono e de seu pet! Vamos juntos
              conscientizar as pessoas sobre como cuidar dos seus animais, vamos
              transformar esse mundo um lugar melhor para os animais!
            </h1>
          </div>
          <div className={styles.boxButton}>
            <Link to={"/desenvolvedores"}>
              <div className={styles.button}>
                <BiCode size={"25px"} />
                <h1 className={styles.button__text}> Desenvolvedores </h1>
              </div>
            </Link>
            <Link to={"/ajuda"}>
              <div className={styles.button}>
                <BiCommentError size={"25px"} />
                <h1 className={styles.button__text}>Central de Ajuda</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
