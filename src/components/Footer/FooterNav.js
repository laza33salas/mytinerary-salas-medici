import {Link as LinkRouter} from "react-router-dom"
import "./FooterNav.css"
import React from 'react'

     

const FooterNav = () => {
  
const navegacion = [
  {name: "Home", to:"/", alt:"homeFooter"},
  {name: "Cities", to:"/cities", alt:"citiesFooter"},
  {name: "New City", to:"/newcity", alt:"newCityFooter"},
  {name: "Edit City", to:"/edit-city", alt:"editCityFooter"}
]

const linkNav = (item) => 
      

          <LinkRouter className="links" to={item.to} key={item.alt}>
          {<p className="footer-link"> {item.name}</p>}
        </LinkRouter>
      
    
    
    return (
   <>
       {navegacion.map(linkNav)}
   </>
    
  )
}

export default FooterNav