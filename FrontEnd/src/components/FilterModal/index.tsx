import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./FilterModal.module.scss";

type propsModal = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function FilterModal({ open, setIsOpen }: propsModal) {

  return (
    <>
      {open ? (
        <div className={styles.back}>
          <div className={styles.container}>

            
              <div className={styles.comeback}>
                <button className={styles.button} onClick={() => { setIsOpen(false) }}>
                  <AiOutlineCloseCircle size={"35px"} />
                </button>
              </div>
          

            <div className={styles.box}>
              <h1 className={styles.box__title}>SEXO</h1>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Macho{" "}
              </label>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Fêmea{" "}
              </label>
            </div>

            <div className={styles.box}>
              <h1 className={styles.box__title}>IDADE</h1>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Menos de 1 ano{" "}
              </label>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Entre 2 e 5{" "}
              </label>
            </div>

            <div className={styles.box}>
              <h1 className={styles.box__title}>PORTE</h1>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Pequeno{" "}
              </label>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Médio{" "}
              </label>

              <input type="checkbox" className={styles.box__check} />
              <label htmlFor="" className={styles.box__label}>
                {" "}
                Grande{" "}
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
