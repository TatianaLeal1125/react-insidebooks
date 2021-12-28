import React from "react";
import Logo from '../Logo'

const options = [
  {
    icon: 'fas fa-tv',
    name: 'Dashboard'
  },
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
  }
]

function Option (props) {
  return (
    <div className= 'index' >
      <Logo inline={true} sizeOf={1.3} hover={true} className='logo'/>
      <br />
        <ul>
          {
            options.map((option,i) => {
              return <li key={option.name + i}>
                  <a href= '/login' >
                    <i className= {option.icon} ></i>
                    <span id= 'li' className= 'menu-label'> {option.name} </span>
                  </a>
              </li>
            })
          }
        </ul>
    </div>
  )
}

export default Option;