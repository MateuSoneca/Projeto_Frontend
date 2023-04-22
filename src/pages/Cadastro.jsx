import React from 'react'
import { Input } from '../components/Input'
import { Main } from '../components/Main'
import { Caixa } from '../components/Caixa'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { useState } from 'react'
import { Forgot } from '../components/Forgot'
import { useNavigate } from 'react-router-dom'

export const Cadastro = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] =useState('')
    const navigate = useNavigate('')
    function handleClick() {
      navigate('/')
    }
  return (
    <>
    <Main>
      <Caixa>
        <Logo msg='centro'/>
        <Input nome="Email" email={email} />
        <Input nome="Password" senha={senha}/>
        <Input nome="Password" senha={senha}/>
        <Forgot msg='Ja tenho cadastro' onClick={handleClick}/>
        <Button msg='Cadastrar'/>
      </Caixa>
    </Main>
    </>
  )
}
