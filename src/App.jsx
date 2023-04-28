import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Login} from './pages/login/Login'
import {Home} from './pages/Home.jsx'
import { Erro404 } from "./pages/Erro404";
import { Cadastro } from "./pages/Cadastro";
import { User } from "./pages/User";
import { Config } from "./pages/Config";



function App(props) {
  const [logado, setLogado] = useState(false);
 
  function handleLogin(event){
    setLogado(true)
  }

  function handleLougout(event) {
    setLogado(false);
  }
  return (
    <BrowserRouter>
      <Routes>
        {logado ?
        <>
        <Route path="/login" element={<Home logar={handleLougout}/>} />
        <Route path="/user" element={<User />}/>
        <Route path="/config" element={<Config/>}/>
        </>
        :
        <>
        <Route path="/" element={<Login logar={handleLogin}/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        </>
        }
        <Route path="*" element={<Erro404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
