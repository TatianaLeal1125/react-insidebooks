import React from 'react'
import Logo from '../Logo'
import SearchBar from './SearchBar'
import { MenuButtons, NavBar, Wrapper } from './navBar.styles'

function NavegationBar () {
  return (
    <Wrapper>
    <NavBar>
      <Logo inline={true} sizeOf={1.3} hover={true} />
      <SearchBar></SearchBar>

      <MenuButtons className='menuButton'>
        <a href='/login'>
          <i className='fas fa-user-circle'></i>
          <span className='menu-label'> Mi Cuenta</span>
        </a>
        <a href='/carrito'>
          <i className='fas fa-shopping-cart'></i>
          <span className='menu-label'> Mi Carrito</span>
        </a>
        <a href='#' onClick='openNav()'>
          <i className='fas fa-bars'></i>
          <span className='menu-label'>Menú</span>
        </a>
      </MenuButtons>
    </NavBar>
    </Wrapper>

  )
}

export default NavegationBar
