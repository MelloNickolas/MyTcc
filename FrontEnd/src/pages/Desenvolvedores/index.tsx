
import styles from "./Desenvolvedores.module.scss";
import Marcela from "../../assets/desenvolvedores/Marcela.png";
import Nickolas from "../../assets/desenvolvedores/nickolas.png";
import Dudao from "../../assets/desenvolvedores/dudao.png"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FullToolbar from "../../components/FullToolbar";

export default function Desenvolvedores() {
    return (
        <body>
            <FullToolbar/>
            <div className={styles.back}>

                <div className={styles.titleBox}>
                    <h1 className={styles.titleBox__title}> DESENVOLVEDORES </h1>
                </div>

                <div className={styles.cardBox}>

                    <div className={styles.card}>
                        <div className={styles.cardimg}>
                            <img src={Marcela} alt="Desenvolvedor" className={styles.cardImg__img} />
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.cardStart}>
                                <h1 className={styles.cardStart__text}>Marcela Martins</h1>
                            </div>
                            <div className={styles.cardEnd}>
                                <div className={styles.icon}>
                                <FaGithub size={40}/>
                                </div>
                                <div className={styles.icon}>
                                <MdEmail size={40}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fim do card - 1 */}

                    <div className={styles.card}>
                        <div className={styles.cardimg}>
                            <img src={Dudao} alt="Desenvolvedor" className={styles.cardImg__img} />
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.cardStart}>
                                <h1 className={styles.cardStart__text}>Duda Giglioli</h1>
                            </div>
                            <div className={styles.cardEnd}>
                                <div className={styles.icon}>
                                <FaGithub size={40}/>
                                </div>
                                <div className={styles.icon}>
                                <MdEmail size={40}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fim do card - 2 */}

                    <div className={styles.card}>
                        <div className={styles.cardimg}>
                            <img src={Nickolas} alt="Desenvolvedor" className={styles.cardImg__img} />
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.cardStart}>
                                <h1 className={styles.cardStart__text}>Nickolas Mello</h1>
                            </div>
                            <div className={styles.cardEnd}>
                                <div className={styles.icon}>
                                <FaGithub size={40}/>
                                </div>
                                <div className={styles.icon}>
                                <MdEmail size={40}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fim do card - 3 */}

                </div>
                {/* Fim do cardBox */}

                <div className={styles.subscribeBox}>
                    <h1 className={styles.subscribeBox__text}>
                        Somos estudantes da ETEC "Cidade do Livro" e escolhemos
                        esse tema para ser nosso projeto de finalização de curso por conta da grande alta de animais 
                        abandonados e sem casa, viemos com uma solução para ajudar nossos bichinhos :)
                    </h1>
                </div>

            </div>
        </body>
    );
}