import React from "react";
import { Body } from './body.styles'
import Option from './Option'
import Section from './Section'

const options = [
  {
    icon: 'fas fa-user-circle',
    name: 'Usuarios'
  },
  {
    icon: 'fas fa-book',
    name: 'Libros'
  }
]
function Main () {
  return (
    <Body>
        <div className='sectionChange'>
            <div className='sideBarVer' id='sideBarVer'>
                <aside>
                    {options.map((option, i) => {
                      return <Option {...option} key={option.name + i}/>
                    })}
                </aside>
            </div>
            <Section />
        </div>
    </Body>
  )
}

export default Main;