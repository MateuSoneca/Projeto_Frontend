import React from 'react'
import { Input } from '../components/Input'
import { Main } from '../components/Main'
import { Caixa } from '../components/Caixa'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { useState } from 'react'

export const Cadastro = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] =useState('')
  return (
    <>
    <Logo msg='esquerda'/>
    <Main>
      <Caixa>
        <h1 className='centro'>Cadastrar-se</h1>
        <Input nome="Email" email={email} />
        <Input nome="Password" senha={senha}/>
        <Input nome="Password" senha={senha}/>
        <Button msg='Cadastrar'/>
      </Caixa>
    </Main>
    </>
  )
}
