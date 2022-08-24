import React from 'react'
import Nav from "./Nav"
import Login from "./Login"
import BurgerBotton from './BurgerBotton'
const Header = () => {
  return (
    
    <div>
       <BurgerBotton/>
      <Login/>
      <Nav/>
    </div>
  )
}

export default Header