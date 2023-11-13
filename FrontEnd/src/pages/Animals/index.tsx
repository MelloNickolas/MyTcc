import styles from "./Animais.module.scss";
import Footer from "../../components/Footer";
import AnimalCards from "../../components/AnimalCards";
import FullToolbar from "../../components/FullToolbar";
import Buscador from "../../components/Buscador/bucador";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Animais() {
  /**/
  const { valorBuscador, setValorBuscador } = useState("");

  return (
    <div className={styles.back}>
      <FullToolbar />

      <div className={styles.ongBox}>
        <span className={styles.ongBox__title}>
          VAMOS AJUDAR NOSSOS BICHINHOS!
        </span>
        <span className={styles.ongBox__subtitle}>
          Tem interesse em ajudar nossos animais? Dê uma olhada nas Ongs que
          fazem sua ajuda chegar aos animais!
        </span>

        <Link to={"/ongs"}>
          <button>Quero Ajudar!</button>
        </Link>
      </div>

      <div className={styles.br}></div>

      <div className={styles.searchBox}>
        <Buscador valorBuscador={setValorBuscador} />
      </div>

      <div className={styles.animais}>
        <AnimalCards />
      </div>

      <Footer />
    </div>
  );
}
