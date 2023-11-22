import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import ErrorPage from "./pages/ErrorPage";

// 1- configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Desenvolvedores from "./pages/Desenvolvedores";
import Ajuda from "./pages/Ajuda";
import Animais from "./pages/Animals";
import Login from "./pages/Login";
import Teste from "./pages/Teste";
import Ongs from "./pages/Ongs";
import CadastroAnimal from "./pages/CadastroAnimal";
import AnimalDescription from "./pages/AnimalDescription";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // Pagina de erro xxxxxxxx
    errorElement: <ErrorPage/>,
  },
  {
    path: "cadastro",
    element: <Cadastro/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "desenvolvedores",
    element: <Desenvolvedores/>
  },
  {
    path: "ajuda",
    element: <Ajuda/>
  },
  {
    path: "animais",
    element: <Animais/>
  },
  {
    path: "teste",
    element: <Teste/>
  },
  {
    path: "ongs",
    element: <Ongs/>
  },
  {
    path: "animais/cadastro",
    element: <CadastroAnimal/>
  },
  {
    path: "animais/:id",
    element: <AnimalDescription/>
  }

]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// https://www.youtube.com/watch?v=7b42lVMdEjE  QUAQLUER DUVIDA SOBRE AS rotas
// implement AXIOS