import styles from "./FilterModal.module.scss"

type propsModal = {
    open: boolean
}

export default function FilterModal({ open }: propsModal) {
  return (
      <>
    {open ? (
    <div>
    <h1>teste</h1>
    </div>
    ): null
    }
    </>
  );
}
