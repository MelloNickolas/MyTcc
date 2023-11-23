import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../../services/animals";
import { Animal } from "../../types/animal";
import FullToolbar from "../../components/FullToolbar";
import styles from "./AnimalDescription.module.scss";

export default function AnimalDescription() {
  const params = useParams(); // pega o parametro da url, paga o id
  const [data, setData] = useState<Animal>();

  const id = params.id;

  useEffect(() => {
    getAnimalById(id).then((response) => {
      setData(response);
    });
  }, [id]);

  return (
    <>
      <body>
        <FullToolbar />

        <div className={styles.back}>
          <div className={styles.container}>
            <div className={styles.formImage}></div>

            <div className={styles.form}>

              <div className={styles.formHeader}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputBox}>
                    <div className={styles.inputBox__label}>
                      <p>{id}</p>
                      <p>{data && JSON.stringify(data)}</p>
                      <p>{data ? data.nomeanimal : "Carregando..."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.continueButton}>
                <button className={styles.continueButton__btn}>ADOTAR ANIMAL</button>
              </div>
          </div>
        </div>
       
      </body>
    </>
  );
}
