import React from "react";
import { Body } from './body.styles'
import Option from './Option'
import Section from './Section'

function Main () {
  return (
    <Body>
        <div className='sectionChange'>
            <div className='sideBarVer' id='sideBarVer'>
                <aside>
                  <Option />
                </aside>
            </div>
            <Section />
        </div>
    </Body>
  )
}

export default Main;