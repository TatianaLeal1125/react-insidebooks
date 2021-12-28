import React from 'react'
import {Search} from './seachBar.styles'

function SearchBar() {
  return (
    <Search className='searchBar' action='/searchBook'>
      <input className='btn' type='text' placeholder=' Buscar..' name='search' />
      <button  type='submit'>
        <i className='fas fa-search'></i>
      </button>
    </Search>
  )
}

export default SearchBar
