import styles from "./FilterModal.module.scss"

type propsModal = {
    open: boolean
}

export default function FilterModal({ open }: propsModal) {
  return (
      <>
    {open ? (
      <div className={styles.back}>
        <div className={styles.container}>

        </div>
      </div>
    ): null
    }
    </>
  );
}
