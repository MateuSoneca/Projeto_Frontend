import React from 'react'
import { Caixa } from '../components/Caixa'
import { Main } from '../components/Main'
import { Logo } from '../components/Logo'

export const Erro404 = () => {
  return (
    <>
      <Main>
        <Caixa>
          <Logo/>
          <h1>Page Not Found</h1>
        </Caixa>
      </Main>
    </>

  )
}
