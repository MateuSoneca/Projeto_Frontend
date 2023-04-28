import React from 'react'
import logo from '../assets/logo3.png'
import { useNavigate } from 'react-router-dom'

export const Logo = ({msg}) => {
  const navigate= useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div className={msg}>
         <img src={logo} onClick={handleClick} className='logo'/>
    </div>
  )
}
