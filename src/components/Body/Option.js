import React from "react";

function Option (props) {
  return (
    <div className= 'index' >
        <a href= '/login' >
            <i className= {props.icon} ></i>
            <span className= 'menu-label'> {props.name} </span>
        </a>
    </div>
  )
}

export default Option;