import styles from "./Cadastro.module.scss";
import cat from "../../assets/cadastro-login/Cat.png";
import ImageInput from "./ImageInput/imageinput";
import { Link } from "react-router-dom";
import FullToolbar from "../../components/FullToolbar";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { cpf } from "cpf-cnpj-validator";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Entre com um email válido")
    .required("Email válido"),

  password: yup
    .string()
    .min(8, "Password minimum 8 characters")
    .required("Password is required"),

  confirmpassword: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Confirmação incorreta"),

  cpf: yup
    .string()
    .required("CPF is required")
    .test((value) => cpf.isValid(value))
});



const handleSubmit = (values: any) => {
  console.log(values);
};


export default function Cadastro() {
  return (
    <body>
      <FullToolbar/>

      <div className={styles.back}>
        <div className={styles.container}>
          <div className={styles.formImage}>
            <img src={cat} alt="gato" className={styles.img} />
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
                    placeholder="Digite seu nome"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cpf" className={styles.inputBox__label}>
                    {" "}
                    Cpf{" "}
                  </label>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                  {(formikProps) => (
                      <Form>
                        <div>
                          <Field
                            name="cpf"
                            placeholder="Digite seu CPF"
                            required
                            className={styles.inputBox__input}
                          />
                          <ErrorMessage component="div" name="cpf" />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email{""}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Telefone{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    placeholder="(xx) xxxxx-xxxx"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="password" className={styles.inputBox__label}>
                    {" "}
                    Senha{" "}
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label
                    htmlFor="Confirmpassword"
                    className={styles.inputBox__label}
                  >
                    {" "}
                    Confirme sua senha{" "}
                  </label>
                  <input
                    id="Confirmpassword"
                    type="password"
                    name="password"
                    placeholder="Confirme sua senha"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>
              </div>
              <div className={styles.continueButton}>
                <button className={styles.continueButton__btn}>CONTINUE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}