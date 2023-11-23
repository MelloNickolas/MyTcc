import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animals";
import { Animal } from "../../types/animal";
import nescau from "../../assets/animais/nescau.jpg";
import { FaFilter } from "react-icons/fa";
import styles from "./AnimalCards.module.scss";
import { AxiosResponse } from "axios";
import { useNavigate} from "react-router-dom";
import FilterModal from "../FilterModal";

/* ---------------------------------------------------------------- */
interface Response extends AxiosResponse {
  content: Animal[];
}
/* ----------- Criar uma tipação para a atualização ---------------- */

export default function AnimalCards() {
  /* ---------------------------------------------------------------- */
  const [data, setData] = useState<Response>();
  const [pesquisa, setPesquisa] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    getAnimals(pesquisa).then((response) => {
      setData(response);
    });
  }, [pesquisa]);

  /* ----------------- End consume Api ------------------------------ */

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.filterBox}>
        <input
          type="text"
          placeholder="Procurar"
          onChange={(e: any) => {
            const pesquisa = e.target.value; // Atualizar a pesquisa e setar o novo map
            setPesquisa(pesquisa);
          }}
          className={styles.filterBox__pesquisa}
        />

        {/* ----------- Isso serve para abrir o modal ----------------*/}
        <div>
          <button onClick={() => setIsOpen(true)} className={styles.filterBox__filtro}>
            <FaFilter/>
            <h1>FILTROS</h1>
            </button>
          <FilterModal open={isOpen} setIsOpen={setIsOpen}></FilterModal>
        </div>
        {/* ------------------------------------------------------------*/}
      </div>

      {/* 
        Essa data.content, serve somente para quando você está puxando o DTO
        pois ele retorna um object com um content dentro, para você observar
        isso basta dar um console.log(data)
        Esse animal: Animal, serve para você atualizar o conteúdo com sua barra
        de busca, puxando o axios response: para o seu service
      */}
      <div className={styles.animaisBox}>
      {data && data && data.content ? (
        data.content.map((animal: Animal) => (
          <div
            className={styles.animaisCard}
            key={animal.id}
            onClick={() => navigate(`${animal.id}`)}
          >
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
      )}

      </div>
    </>
  );
}
