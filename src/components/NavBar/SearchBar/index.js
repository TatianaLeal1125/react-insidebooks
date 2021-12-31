import React from 'react'
import { Search } from './seachBar.styles'

function SearchBar (props) {
  return (
    <Search className='searchBar' method='GET'>
      <input ref={props.searchKeyWord} className='btn' type='text' placeholder=' Buscar...' name='search' />
      <button type='submit'>
        <i className='fas fa-search'></i>
      </button>
    </Search>
  )
}

export default SearchBar
