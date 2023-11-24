import styles from "./CadastroAnimal.module.scss";
import img from "../../assets/cadastroanimal/cadatroanimal.png";
import ImageInput from "./ImageInput/imageinput";
import { Link } from "react-router-dom";
import OrangeToolbar from "../../components/OrangeToolbar";


export default function CadastroAnimal(){
    return(
        <body>
            <OrangeToolbar/>

            
      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.formImage}>
            <img src={img} alt="cadastroanimal" className={styles.img} />
          </div>

          <div className={styles.form}>
            <form action="#">
              <div className={styles.formHeader}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>BEM-VINDO!</h1>
                </div>
                <div className={styles.loginButton}>
                  <Link to={"/login"}>
                    <button className={styles.loginButton__button}>
                      <p className={styles.loginButton__text}>ENTRAR</p>
                    </button>
                  </Link>
                </div>
              </div>

              <div className={styles.avatarSpace}>
                <div className={styles.avatarBox}>
                  <ImageInput />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cidadedoanimal" className={styles.inputBox__label}>
                    {" "}
                    Link da Imagem{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="porte"
                    placeholder="Link da imagem"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="nome" className={styles.inputBox__label}>
                    {" "}
                    Nome{" "}
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Digite o nome do pet"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="porte" className={styles.inputBox__label}>
                    {" "}
                    Porte{" "}
                  </label>
                    <input
                        name="porte"
                        type="text"
                        placeholder="Informe o porte do seu pet"
                        required
                        className={styles.inputBox__input}
                    ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="idade" className={styles.inputBox__label}>
                    {""}
                    Idade{""}
                  </label>
                  <input
                    type="number"
                    name="idade"
                    placeholder="Informe a idade do seu pet"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cidadedoanimal" className={styles.inputBox__label}>
                    {" "}
                    Porte do animal{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="porte"
                    placeholder="Informe o porte do pet"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="estado" className={styles.inputBox__label}>
                    {" "}
                    Qual o estado do seu pet ?{" "}
                  </label>
                  <input
                    type="text"
                    name="estado"
                    placeholder="Informe o estado do pet"
                    required
                    className={styles.inputBox__input2}
                  ></input>
                </div>


               

              </div>
              <div className={styles.continueButton}>
                <button className={styles.continueButton__btn}>CADASTRAR ANIMAL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </body>
    )
}