import React from 'react'
import { Avatar } from '@material-ui/core';
import "./Sidebaroption.css"
function Sidebaroption({src,Icon,text}) {
    return (
        <div className="sidebar__option">
         
          {src && <Avatar src={src}/>}
          {Icon && <Icon/>}
            <h4>{text}</h4>
        </div>
    )
}

export default Sidebaroption
