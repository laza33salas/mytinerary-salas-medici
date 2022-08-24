import React from 'react'
import FooterSocial from './FooterSocial'
import FooterNav from "./FooterNav"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-hero'>
  
      <div>
        <img src="https://i.imgur.com/FYFdiTb.png" alt="logo" />
        </div>
        
        <div className='container-footerNav'>
          <FooterNav/>
        </div>
        

          <div className='container-sociales'>
        <FooterSocial/>
          </div>
  
      </div>

      <div className='footer-down'>
        <h4>© 2022 Copyright - All rights reserved | Designed by Leonardo Medici - Lazaro Salas</h4>
      </div>

        
    </footer>
    

    
  )
}

export default Footer