import React from 'react'
import logo from '../../assets/logo3.png'
import { useState, state } from 'react'

import { NavItems } from './NavItems'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

export const NavBar = ({items,logar}) => {
  const navigate = useNavigate()
  
  const [menu, setMenu] = useState(false)
  function handleClick(){
    menu ? setMenu(false) : setMenu(true)
    console.log('clicou')
  }
  function handleSair(){
    logar();
    navigate('/')
    console.log('saiu')
  }

  return (
    <>
      <nav className='NavbarItems'>
        <img src={logo}/>
        <div className='menu-icon' onClick={handleClick}>
          <i className={menu ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
        </div>
        <ul className={menu ? 'nav-menu active' : 'menu-icon'}>
          
        </ul>
      </nav>
    </>
  )
}
