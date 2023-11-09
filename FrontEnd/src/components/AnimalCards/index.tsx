import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animals";
import { Animal } from "../../types/animal";
import nescau from "../../assets/animais/nescau.jpg";

import styles from "./AnimalCards.module.scss";

type PropsAnimalCards = {
  valor: string
}

export default function AnimalCards({valor}: PropsAnimalCards ) {
  
  /* ---------------------------------------------------------------- */
  const [data, setData] = useState<Animal[]>([]);

  useEffect(() => {
    getAnimals().then((response) => {
      setData(response);
    });
  }, []);

  console.log(data);
  /* ----------------- End consume Api ------------------------------ */

  return (
    <>
      {data.length > 0 ?  (   
        data.map((animal) => (
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
                  {animal.cidadedoanimal.nomecidade}
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
