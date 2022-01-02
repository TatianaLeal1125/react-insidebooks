import React, { useState, useEffect, useRef } from 'react'
import { Search } from '../NavBar/SearchBar/seachBar.styles'
import { SearchBook } from './search.styles'

function Buscar () {
  const [books, setBooks] = useState([])
  const [keyword, setKeyword] = useState('')
  const searchKeyWord = useRef()
  const apiKey = 'cb48806a'

  const searchBooks = async (e) => {
    e.preventDefault()
    await setKeyword(searchKeyWord.current.value)
    searchKeyWord.current.value = ''
  }

  useEffect(() => {
    console.log('%cse actualizó el componente books', 'color: blue')
  }, [books])

  useEffect(() => {
    console.log('%cse actualizó el componente keyword', 'color: red')
    //`http://www.omdbapi.com/?s=${keyword !== '' ? keyword : 'action'}&apikey=${apiKey}`
    fetch(`http://localhost:3000/api/products?page=0&search=${keyword}`)
      .then(response => response.json())
      .then(data => {
        console.log('Los libos son: ', data)
        if (!data.Error) {
          setBooks(data.books)
        } else {
          setBooks([])
        }
        console.log('La cantidad de películas es: ', books)
      })
      .catch(error => console.log(error))
  }, [keyword])

  return (
    <div>
    <SearchBook className='search'>
      <label >Buscar por título:  </label>
      <Search onSubmit={searchBooks} className='searchBar' method='GET'>
        <input ref={searchKeyWord} className='btn' type='text' placeholder=' ' name='search' />
        <button type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </Search>
    <div className="row">
        <div className="col-12">
          <h2 style={{}}>{keyword === '' ? 'Todos los libros' : `Resultados para la palabra: ${keyword}`}</h2>
        </div>
      </div>

      <div className="container-fluid">
      { apiKey !== '' ?
        <>
          <div className="row">
            {/* Listado de películas */}
            {
              books.length > 0 && books.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3" style={{height: '75px', backgroundColor: 'var(--rojo)'}}>
                        <h5 className="m-0 font-weight-bold text-gray-800" style={{ color:'white' }}>{movie.name}</h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.imageBook}
                            alt={movie.name}
                            style={{ width: '90%', height: '200px', objectFit: 'cover' }}
                          />
                        </div>
                        <p style={{ color: 'gray'}}>{movie.category[0]}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          { books.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
        </>
        :
        <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
        }
        </div>
      </SearchBook>
    </div>
  )
}

export default Buscar