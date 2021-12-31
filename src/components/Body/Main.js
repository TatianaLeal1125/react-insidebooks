import React from 'react'
import { Route } from 'react-router-dom'
import { Body } from './body.styles'
import Home from '../Pages/Home'
import Usuarios from '../Pages/Usuarios'
import Libros from '../Pages/Libros'
import Mapa from '../Pages/Mapa'
import Buscar from '../Pages/Buscar'
import SideBar from './SideBar'

function Main () {
  return (
    <Body>
      <div className='sectionChange'>
          <div className='sideBarVer accordionSidebar sidebar' id='sideBarVer'>
              <aside >
                <SideBar />
              </aside>
          </div>
          <section className='books'>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Usuarios' exact={true} component={Usuarios}/>
            <Route path='/Libros' exact={true} component={Libros}/>
            <Route path='/Mapa' exact={true} component={Mapa}/>
            <Route path='/Buscar' exact={true} component={Buscar}/>
          </section>
      </div>
    </Body>
  )
}

export default Main;