import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        
      <div className='footer-hero'>
     
      <div>
        <img src="" alt=".." />
        </div>
        
        <div className='footer-links-nav'>
          <a href="https://mytinerary-arguello.herokuapp.com/" >Home</a>
          <a href="https://mytinerary-arguello.herokuapp.com/">Cities</a>
        </div>

        <div className='footer-links-sociales'>
          <a href="https://github.com/laza33salas/mytinerary-salas-medici">GitHub</a>
          <a href="https://www.linkedin.com/in/lazarocode/">Linkedin</a>
          <a href="https://es-la.facebook.com/">Facebook</a>
          <a href="https://twitter.com/iniciarsesion?lang=es">Twitter</a>
        </div>
     
      </div>

      <div className='footer-down'>
        <h4>© 2022 Copyright - All rights reserved | Designed by Leonardo Medici - Lazaro Salas</h4>
      </div>

        
    </footer>
    

    
  )
}

export default Footer