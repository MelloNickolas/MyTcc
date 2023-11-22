import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";
import { GoPerson } from "react-icons/go";
import { PiDogLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";


export default function EmptyToolbar() {
  return (
    <header className={styles.toolbar}>
      <div className={styles.start}>
        <Link to={"/"}>
          <img src={logo} alt="Logo Adota LP" className={styles.start__logo} />
        </Link>
      </div>

      <div className={styles.middle}></div>

      <div className={styles.end}>
        <div className={styles.end__searchBox}>
      
          <Link to={"/cadastro"}>
            <button className={styles.end__searchButton}>
              <GoPerson size={"40px"} />
            </button>
          </Link>
          <Link to={"/animais"} >
            <button className={styles.end__searchButton}>
              <PiDogLight size={"40px"} />
            </button>
          </Link>
          <Link to={"/ongs"} >
            <button className={styles.end__searchButton}>
              <FaHandsHelping size={"40px"} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
