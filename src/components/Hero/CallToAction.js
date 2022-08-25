import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import "./CallToAction.css"

export default function CallToAction() {
  let linkTo = "/cities"
  
  return (
    <div>
    <LinkRouter to={linkTo} className="cta">
     <span>CITIES </span>
    <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
    </LinkRouter>
    </div>
  )
}

