import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Logo'

const options = [
  {
    icon: 'fas fa-user-circle',
    name: 'Usuarios'
  },
  {
    icon: 'fas fa-book',
    name: 'Libros'
  },
  {
    icon: 'fas fa-map',
    name: 'Mapa'
  },
  {
    icon: 'fas fa-search',
    name: 'Buscar'
  }
]

function Option (props) {
  return (
    <div className= 'index' >
      <Logo inline={true} sizeOf={1} hover={true} className='logo'/>
      <hr className="sidebar-divider"/>
      <Link className='a' to= '/' >
        <i className= 'fas fa-fw fa-tachometer-alt' ></i>
        <span id= 'li' className= 'menu-label'>Dashboard-InsideBooks </span>
      </Link>
      <hr className="sidebar-divider"/>
      <h3>Acciones</h3>
        <ul> 
          {
            options.map((option,i) => {
              return <li key={option.name + i}>
                  <Link className='a' to= '/' >
                    <i className= {option.icon} ></i>
                    <span id= 'li' className= 'menu-label'> {option.name} </span>
                  </Link>
              </li>
            })
          }
        </ul>
        <hr className="sidebar-divider"/>
    </div>
  )
}

export default Option;