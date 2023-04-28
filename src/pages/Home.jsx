import React from 'react'
import { NavBar } from '../components/nav/NavBar'
import logo from '../assets/logo1.png'
import { NavItems } from '../components/nav/NavItems'
import { Carousel } from '../components/carousel/Carousel'

export const Home = ({logar}) => {
  return (
    <>
      <NavBar items={NavItems} logar={logar}/>
      <Carousel/>
      </>
  )
}
