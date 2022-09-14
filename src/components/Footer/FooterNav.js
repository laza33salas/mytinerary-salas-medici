import {Link as LinkRouter} from "react-router-dom"
import "./FooterNav.css"
import React from 'react'

     

const FooterNav = () => {
  
const navegacion = [
  {name: "Home", to:"/"},
  {name: "Cities", to:"/cities"},
  {name: "New City", to:"/newcity"},
  {name: "Edit City", to:"/edit-city"}
]

const linkNav = (item) => 
      

          <LinkRouter className="links" to={item.to}>
          {<p className="footer-link"> {item.name}</p>}
        </LinkRouter>
      
    
    
    return (
   <>
       {navegacion.map(linkNav)}
   </>
    
  )
}

export default FooterNav