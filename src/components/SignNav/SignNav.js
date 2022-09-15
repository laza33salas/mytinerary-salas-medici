import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './SignNav.css'

const SignNav = () => {
    return (
        <div className='sign-nav'>
            <LinkRouter className='sign-p top-sign' to="/auth/signup">
                <p>SignUp</p>
            </LinkRouter>
            <LinkRouter className='sign-p middle-sign' to="/auth/signin">
                <p>SignIn</p>
            </LinkRouter>
            <div className='sign-p bot-sign'>
                <p>LogOut</p>
            </div>
        </div>
    )
}

export default SignNav