
import styles from "./Animais.module.scss";
import TodosAnimais from "../../dados/animaisAll";
import Footer from "../../components/Footer";
import AnimalCards from "../../components/AnimalCards";
import FullToolbar from "../../components/FullToolbar";
import Buscador from "../../components/Buscador/bucador";
import { useState } from "react";


export default function Animais() {

  /**/
  const {valorBuscador, setValorBuscador} = useState("")

  return (
    <div className={styles.back}>
       <FullToolbar/>

      <div className={styles.ongBox}>
        <span className={styles.ongBox__title}>VAMOS AJUDAR NOSSOS BICHINHOS!</span>
        <span className={styles.ongBox__subtitle}>
          Caso você veja algum animal abandonado entre em contato imediatamente
          com um abrigo de animais local ou um grupo de resgate, vamos ajudar
          esses bichinhos peludos, faça o bem para nossos animais!
        </span>
      </div>

      <div className={styles.br}></div>

      <div className={styles.searchBox}>
        <Buscador valorBuscador={setValorBuscador}/>
      </div>

      <div className={styles.animais}>
        <AnimalCards/>
      </div>

        <Footer/>
    </div>
  );
}
