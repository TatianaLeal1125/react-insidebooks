import React from 'react'
import SearchBar from '../NavBar/SearchBar/index'
import '../NavBar/SearchBar/seachBar.styles'
import { Search } from './search.styles'


function Buscar () {
  return (
    <Search className='search'>

      <label >Buscar por título : </label>
      <SearchBar />

      <div className="row">
        <div className="col-12">
          <h2>Libros para la palabra: </h2>
        </div>
      </div>
      <div className="col-sm-6 col-md-3 my-4" key={1}>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800" style={{color: 'gray'}}>Electrónica</h5>
          </div>
          <div className="card-body">
            <div className="text-center">{2020}
              <img 
                className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                src=''
                alt='Book'
                style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
              />
            </div>
            <p style={{color: 'gray'}}>2020</p>
          </div>
        </div>
      </div>
    </Search>
  )
}

export default Buscar;