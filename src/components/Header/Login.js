import React, { useState } from 'react'
import SignNav from "../SignNav/SignNav"
import "./Login.css"

const Login = () => {

  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  
  
  return (
    <div className='containerLogin'>
  
        <img onClick={handleOpenMenu} src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt='logo' className='logo'></img>

        <div className='commentOn'>
        {open
          ? <div onClick={handleOpenMenu} className='sig-nav-container'><SignNav/></div> 
          : null
        }
      </div>
        
    </div>
    
  )
}

export default Login