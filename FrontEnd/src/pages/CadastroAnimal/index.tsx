import styles from "./CadastroAnimal.module.scss";
import img from "../../assets/cadastroanimal/cadatroanimal.png";
import ImageInput from "./ImageInput/imageinput";
import { Link } from "react-router-dom";
import OrangeToolbar from "../../components/OrangeToolbar";
import { SyntheticEvent, useState } from "react";
import { Animal } from '../../types/animal'
import axios from "axios";

import api from "../../services/api";

export default function CadastroAnimal() {

  const [nome, setNome] = useState<string>("")
  const [porte, setPorte] = useState<string>("")
  const [idade, setIdade] = useState<number>(1)
  const [nomecidade, setNomecidade] = useState<string>("")
  const [foto, setFoto] = useState<string>("")
  const [sexo, setSexo] = useState<string>("")

  const submit = (e: any) => {
    e.preventDefault()
    const data: Animal = {
      id: 1,
      nomeanimal: nome,
      porte,
      idade,
      nomecidade,
      foto,
      sexo,
      idcidade: 1,
      descricao: "Teste" 
    }
    api.post('/animal/saveAnimal', data).then((response) => {
      console.log(response)
    })
  }

  return (
    <body>
      <OrangeToolbar />


      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.formImage}>
            <img src={img} alt="cadastroanimal" className={styles.img} />
          </div>

          <div className={styles.form}>
            <form onSubmit={submit}>
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
                    onChange={(e: any) => {
                      setFoto(e.target.value)
                    }}
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
                    onChange={(e: any) => {
                      setNome(e.target.value)
                    }}
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
                    onChange={(e: any) => {
                      setPorte(e.target.value)
                    }}
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
                    onChange={(e: any) => {
                      setIdade(e.target.value)
                    }}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cidadedoanimal" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="porte"
                    placeholder="Informe a cidade"
                    required
                    onChange={(e: any) => {
                      setNomecidade(e.target.value)
                    }}
                    className={styles.inputBox__input}
                  ></input>
                </div>
              </div>
              <div className={styles.continueButton}>
                <button className={styles.continueButton__btn} type="submit">CADASTRAR ANIMAL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  )
}