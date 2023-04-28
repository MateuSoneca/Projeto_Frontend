import React from 'react'
import { NavBar } from '../components/nav/NavBar'
import logo from '../assets/logo1.png'
import { NavItems } from '../components/nav/NavItems'
import { Carousel } from '../components/carousel/Carousel'
import ImageCarousel from '../components/carousel/CarouselTeste'
import ImageList from '../components/minha lista/MinhaLista'

export const User = () => {
  return (
    <>
      <NavBar items={NavItems} />
      <ImageList/>
      </>
  )
}
