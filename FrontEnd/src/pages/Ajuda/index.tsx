import ajuda from "../../assets/ajuda/Ajuda.png";
import styles from "./Ajuda.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

export default function Ajuda() {
  return (
    <div className={styles.back}>
      <div className={styles.container}>
        <div className={styles.startBox}>
          <img src={ajuda} alt="" className={styles.startBox__img} />
          <div className={styles.comeback}>
            <Link to={"/"}>
              <IoIosArrowRoundBack size={"35px"} />
            </Link>
          </div>
        </div>
        <div className={styles.br}></div>
        <div className={styles.endBox}>
          <h1 className={styles.endBox__title}>ALGUMA DÚVIDA?</h1>
          <h2 className={styles.endBox__subtitle}>Entre em contato conosco:</h2>
          <div className={styles.socialMedias}>
            <BsFacebook size={"70px"} style={{ color: "#2b7bf6" }} />
            <MdEmail size={"80px"} style={{ color: "#2b7bf6"}} />
            <BsInstagram size={"70px"} style={{color: "#2b7bf6"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
