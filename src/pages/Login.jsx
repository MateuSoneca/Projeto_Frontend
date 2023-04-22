import { Caixa } from "../components/Caixa"
import { Input } from "../components/Input"
import { Main } from "../components/Main"
import {Button} from "../components/Button"
import {Forgot} from '../components/Forgot'
import {Logo} from '../components/Logo'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Login = ({logar}) => {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const navigate = useNavigate()

  function handleLogin(){
    if(Email=="m"){
      logar();
      navigate('/login')
    }else{
      console.log('nao da')
    }
  }

  function handleChange() {
    setEmail(event.target.value)
  }
  function handleChangeSenha() {
    setSenha(event.target.value)
  }
  function handleForgot(props) {
    console.log("esquece a senha")
  }
  function handleCadastro(event) {
    navigate('/cadastro')
  }
  return (
    <>
    <Main>
      <Caixa>
        <Logo msg='centro'/>
        <Input nome="Email" email={Email} handleChange={handleChange}/>
        <Input nome="Password" senha={Senha} handleChange={handleChangeSenha}/>
        <Button onClick={handleLogin} msg="Entrar"/>
        <Forgot onClick={handleForgot} />
        <Button onClick={handleCadastro} msg="Nao tem cadastro? clique aqui!"/>
      </Caixa>
    </Main>
    </>
  )
}
