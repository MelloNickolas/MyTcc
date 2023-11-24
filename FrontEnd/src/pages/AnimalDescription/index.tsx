import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../../services/animals";
import { Animal } from "../../types/animal";
import FullToolbar from "../../components/FullToolbar";
import styles from "./AnimalDescription.module.scss";
import nescau from "../../assets/animais/nescau.jpg";
import OrangeToolbar from "../../components/OrangeToolbar";

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
        <OrangeToolbar />

        <div className={styles.back}>
          <div className={styles.container}>
            <div className={styles.imageBox}>
              <img src={nescau} alt="" className={styles.imageBox__image} />
              <h1 className={styles.imageBox__text}>
                {data ? data.nomeanimal : "Não tem nenhum nome"}
              </h1>
            </div>

            <div className={styles.textBox}>
              <h1 className={styles.title}>DADOS DO PET</h1>

              <div className={styles.groupBox}>
                <div className={styles.box}>
                  <h1 className={styles.box__title}>PORTE :</h1>

                  <h2 className={styles.box__context}>
                    {data ? data.porte : "Porte Não definido"}
                  </h2>
                </div>

                <div className={styles.box}>
                  <h1 className={styles.box__title}>SEXO :</h1>

                  <h2 className={styles.box__context}>
                    {data ? data.sexo : "Sexo Não definido"}
                  </h2>
                </div>

                <div className={styles.box}>
                  <h1 className={styles.box__title}>IDADE :</h1>

                  <h2 className={styles.box__context}>
                    {data ? data.idade : "Idade Não definido"}
                  </h2>
                </div>

                <div className={styles.box}>
                  <h1 className={styles.box__title}>CIDADE :</h1>

                  <h2 className={styles.box__context}>
                    {data ? data.nomecidade : "Cidade Não definido"}
                  </h2>
                </div>
              </div>

              <div className={styles.buttonBox}>
                <button className={styles.button}>Quero Adotar!</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
