import React from 'react'
import { Wrapper } from './logo.styles'
import { Link } from 'react-router-dom'

const Logo = ({ inline, sizeOf, hover }) => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <Wrapper size={sizeOf} inline={inline}>
        <div className='logo'>
          <div className='bloqueAzul'></div>
          <div className='bloqueVerde'></div>
          <div className='bloqueRojo'></div>
          <div className='bloqueNaranja'></div>
        </div>
        <p className={`logoText ${inline ? 'logoTextSmall' : ''}`}>
          <span className='rojo'>IN</span>
          <span className='azul'>SIDE</span>
          <br />
          <span className='verde'>BOOKS</span>
        </p>
      </Wrapper>
    </Link>
  )
}

export default Logo
