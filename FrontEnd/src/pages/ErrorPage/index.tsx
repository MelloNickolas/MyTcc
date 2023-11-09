import styles from "./ErrorPage.module.scss";
import errorimage from "../../assets/error-page/Error.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <body className={styles.back}>
      <div className={styles.container}>
        <div className={styles.startBox}>
          <img src={errorimage} alt="error" className={styles.img}/>
          <Link to={"/"} className={styles.comeback}>
            <button className={styles.button}>
              <IoIosArrowRoundBack size={"35px"} />
            </button>
          </Link>
        </div>
        <div className={styles.endBox}>
          <h1 className={styles.endBox__error}>ERRO 404!</h1>
          <h3 className={styles.endBox__subtitle}>Nenhuma página foi encontrada :(</h3>
        </div>
      </div>
    </body>
  );
}
