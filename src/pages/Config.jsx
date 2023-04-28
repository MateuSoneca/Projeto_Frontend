import React from 'react'
import { NavBar } from '../components/nav/NavBar'
import { NavItems } from '../components/nav/NavItems'
import { Caixa } from '../components/Caixa'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export const Config = () => {
  return (
    <>
    <NavBar items={NavItems}/>
    <Caixa>
        <Input  nome="Email" email='email'/>
        <Input  nome="senha" email='senha   '/>
        <Input  nome="novaSenha" email='novaSenha'/>
        <Button msg='salvar'/>

    </Caixa>
    </>
  )
}
