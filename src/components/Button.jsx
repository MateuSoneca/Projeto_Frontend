import React from 'react'

export const Button = ({onClick, msg}) => {
  return (
    <button type="text" className="submit" onClick={onClick}>{msg}</button>
  )
}
