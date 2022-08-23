import React from 'react'
import {Link as LinkRouter } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='nav'>

    <LinkRouter  to="/">
     { <img alt="casita"  className="logos" src="https://cdn-icons-png.flaticon.com/512/2413/2413074.png"/>}
    <p className='parrafos'>Home</p>
     
    </LinkRouter>
    
    <LinkRouter  to="/cities">
    { <img alt="casita"  className="logos" src="https://cdn-icons-png.flaticon.com/512/2222/2222208.png"/>}
    <p className='parrafos'>Cities</p>
    </LinkRouter>

    <LinkRouter  to="/newcity">
    { <img alt="casita"  className="logos" src="https://cdn-icons-png.flaticon.com/512/2451/2451548.png"/>}
    <p className='parrafos'>New City</p>
    </LinkRouter>
    </div>
  )
}

export default Nav