import React from 'react'

export const Forgot = ({onClick, msg}) => {
  return (
    <a className='forgot' onClick={onClick}>{msg}</a>
  )
}
