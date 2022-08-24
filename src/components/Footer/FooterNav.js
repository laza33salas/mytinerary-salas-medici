import {Link as LinkRouter} from "react-router-dom"
import "./FooterNav.css"
import React from 'react'

     

const FooterNav = () => {
  
const navegacion = [
  {name: "Home", to:"/"},
  {name: "Cities", to:"/cities"}
]

const linkNav = (item) => 
      

          <LinkRouter className="links" to={item.to}>
          {<p> {item.name}</p>}
        </LinkRouter>
      
    
    
    return (
   <div className="footer-links-nav">
       {navegacion.map(linkNav)}
   </div>
    
  )
}

export default FooterNav