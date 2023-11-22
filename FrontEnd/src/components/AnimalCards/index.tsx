import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animals";
import { Animal } from "../../types/animal";
import nescau from "../../assets/animais/nescau.jpg";

import styles from "./AnimalCards.module.scss";
import { AxiosResponse } from "axios";
import { json } from "stream/consumers";

/* ---------------------------------------------------------------- */
interface Response extends AxiosResponse {
  content: Animal[]
}
/* ----------- Criar uma tipação para a atualização ---------------- */


export default function AnimalCards() { 
  /* ---------------------------------------------------------------- */
  const [data, setData] = useState<Response>();
  const [pesquisa, setPesquisa] = useState<string>()

  useEffect(() => {
    getAnimals(pesquisa).then((response) => {
      console.log('update', response) // para mostrar no console.log
      setData(response);
    });
  }, [pesquisa]);

  /* ----------------- End consume Api ------------------------------ */

  return (
    <>
    <input type="text" placeholder="Pesquisa" onChange={(e: any) => {
      const pesquisa = e.target.value; // Atualizar a pesquisa e setar o novo map
      setPesquisa(pesquisa)
    }}/>

      {/* 
        Essa data.content, serve somente para quando você está puxando o DTO
        pois ele retorna um object com um content dentro, para você observar
        isso basta dar um console.log(data)
        Esse animal: Animal, serve para você atualizar o conteúdo com sua barra
        de busca, puxando o axios response: para o seu service
      */}
      {data && data && data.content ?  (   
        data.content.map((animal: Animal) => (
        <div className={styles.animaisCard} key={animal.id}>
          <div className={styles.imgBox}>
            <img
              src={nescau}
              alt="Foto do animal"
              className={styles.imgBox__img}
            />

            <div className={styles.imgBox__cidadeBox}>
              <div className={styles.cidadeContent}>
                <h1 className={styles.cidadeContent__text}>
                  {animal.nomecidade}
                </h1>
              </div>
            </div>
          </div>
          {/* fim da imgBox*/}
          <div className={styles.cardText}>

            <div className={styles.cardTextStart}>
              <h1 className={styles.cardTextStart__title}>
                {animal.nomeanimal}
              </h1>
              <div className={styles.cardTextStart__line}>.</div>
            </div>

            <div className={styles.cardTextEnd}>
                  <div className={styles.categorias}>
                    <h1 className={styles.categoriasText}> IDADE - </h1>
                    <h1 className={styles.categoriasText2}> {animal.idade} </h1>
                  </div>
                  <div className={styles.categorias}>
                    <h1 className={styles.categoriasText}> PORTE - </h1>
                    <h1 className={styles.categoriasText2}> {animal.porte} </h1>
                  </div>
                </div>
          </div>
        </div>
      ))
      ) : (
        <p>Não há animais disponíveis</p>
      )
    }

    </>
  );
}
