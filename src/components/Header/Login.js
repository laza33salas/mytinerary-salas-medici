import React from 'react'
import {Link as LinkRouter } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <div className='containerLogin'>
        <LinkRouter className='' to="/auth/signup">
        <img src='https://cdn-icons-png.flaticon.com/512/2609/2609282.png' alt='logo' className='logo'></img>
        </LinkRouter>
    </div>
  )
}

export default Login