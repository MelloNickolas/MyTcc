import { useState } from "react";
import styles from "./FilterModal.module.scss"

export default function FilterModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal}>filter</button>

      <div className={styles.back}>
        ASKFHGIUFJGSAKJHGJK
      </div>
    </>
  );
}
