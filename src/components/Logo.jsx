import React from 'react'
import nike from '../assets/nike.png'
import { useNavigate } from 'react-router-dom'

export const Logo = ({msg}) => {
  const navigate= useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div className={msg}>
         <img src={nike} onClick={handleClick}/>
    </div>
  )
}
