import React, { useState, useEffect } from 'react'
import SignNav from "../SignNav/SignNav"
import { useSelector } from "react-redux";
import "./Login.css"

const Login = () => {

  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
      handleShowLogs()
    } else {
      setOpen(true)
      handleShowLogs()
    }
  }
   const datosUsers = useSelector(state=> state.user.user)

   const log = null == JSON.parse(localStorage.getItem("token"))
   const [userImage, setImage] = useState(log)
    const handleShowLogs = () => { 
        if (log) {
          setImage(false)
        } else {
          setImage(true)
        }
    }

    const [intervalId, setintervalId] = useState()
    useEffect(() => {
      setintervalId(() => {
        handleShowLogs()
      }, 1000);
    });


    return (
      <div className='containerLogin'>
        
        <img onClick={handleOpenMenu} src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt='logo' className='logo'></img>

        {userImage
          ? <img onClick={handleOpenMenu} src={datosUsers.photo} alt='UserPic' className='logo'></img>
          : <img onClick={handleOpenMenu} src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt='logo' className='logo'></img>
        }
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