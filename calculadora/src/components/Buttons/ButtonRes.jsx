import React from 'react'
import './buttons.css'

export default (props)=>{
    return(
        <button
         onClick={e=>props.click && props.click(props.label)}
         className="buttonRes">{props.label}</button>
    )
}