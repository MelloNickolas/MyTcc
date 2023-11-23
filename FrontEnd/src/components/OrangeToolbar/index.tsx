import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

export default function OrangeToolbar() {
    return <>
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
              <IoPerson size={"40px"} />
            </button>
          </Link>
          <Link to={"/animais"} >
            <button className={styles.end__searchButton}>
              <MdOutlinePets size={"40px"} />
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
    
    
    </>
}