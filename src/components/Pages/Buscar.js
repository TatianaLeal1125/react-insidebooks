import React, { useState, useEffect, useRef } from 'react'
import Pagination from './Pagination'
import { Search } from '../NavBar/SearchBar/seachBar.styles'
import { SearchBook } from './search.styles'

function Buscar () {
  const [books, setBooks] = useState([])
  const [dataPagination, setDataPagination] = useState({})
  const [keyword, setKeyword] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const searchKeyWord = useRef()
  const pageNumber = useRef()
  const apiKey = 'cb48806a'
  const pageLimitPagination = 3

  const searchBooks = async (e) => {
    e.preventDefault()
    await setKeyword(searchKeyWord.current.value)
    searchKeyWord.current.value = ''
  }

  const nextPage = async () => {
    if (currentPage < dataPagination.totalPages) {
      await setCurrentPage(currentPage + 1)
    }
    console.log('Cambió la página')
  }

  const pageCero = async (e) => {
    e.preventDefault()
    await setCurrentPage(1)
  }

  const pageLimit = async (e) => {
    e.preventDefault()
    await setCurrentPage(dataPagination.totalPages)
  }


  const previousPage = async () => {
    if (currentPage > 0) {
      await setCurrentPage(currentPage - 1)
    }
    console.log('Cambió la página')
  }

  const getPaginationGroup = () => {
    if (dataPagination.totalPages > 2) {
      const start = Math.floor((currentPage - 1) / pageLimitPagination) * pageLimitPagination
      return new Array(pageLimitPagination).fill().map((_, id) => start + id + 1)
    } else {
      return []
    }
  }

  const changePage = async (e) => {
    await setCurrentPage(Number(e.target.textContent))
    console.log('Me están presionando', Number(e.target.textContent))
    console.log('Soy currentPage', currentPage)
  }

  useEffect(() => {
    console.log('%cse actualizó el componente books', 'color: blue')
  }, [books])

  useEffect(() => {
    console.log('%cse actualizó el componente keyword', 'color: red')
    //`http://www.omdbapi.com/?s=${keyword !== '' ? keyword : 'action'}&apikey=${apiKey}`
    fetch(`http://localhost:3000/api/products?page=${currentPage-1}&search=${keyword}`)
      .then(response => response.json())
      .then(data => {
        console.log('Los libos son: ', data)
        if (!data.Error) {
          setBooks(data.books)
          setDataPagination(data.pagination)
        } else {
          setBooks([])
          setDataPagination({})
        }
        console.log('La cantidad de películas es: ', books)
        console.log('Pagination is', dataPagination)
      })
      .catch(error => console.log(error))
  }, [keyword, currentPage])

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
          <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${dataPagination.previousPage === '' ? 'disabled' : ''}`} onClick={ dataPagination.previousPage !== '' ? previousPage : pageCero}>
          <button className="page-link" tabindex="-1">Previous</button>
        </li>

        { getPaginationGroup().map((numberPage, id) => {
          if (numberPage <= dataPagination.totalPages) {
            return <li className="page-item" key={numberPage + id} >
            <button className={`page-link ${currentPage === numberPage ? 'active': null}`} onClick={changePage} >
              <span>{numberPage}</span>
            </button>
          </li>
          }
        })}

        <li className={`page-item ${dataPagination.nextPage === '' ? 'disabled' : ''}`} onClick={ dataPagination.nextPage !== '' ? nextPage : pageLimit}>
          <a className="page-link" href="#">Next</a>
        </li>
    </ul>
    </nav>
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