import styles from "./Animais.module.scss";
import Footer from "../../components/Footer";
import AnimalCards from "../../components/AnimalCards";
import FullToolbar from "../../components/FullToolbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterModal from "../../components/FilterModal";

export default function Animais() {
  /* --------------------- Constructor Modal ------------------------ */
  

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
          <button className={styles.button}>Quero Ajudar!</button>
        </Link>
      </div>

      <div className={styles.br}></div>

        <AnimalCards />

      <Footer />
    </div>
  );
}
