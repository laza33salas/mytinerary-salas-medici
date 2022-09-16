import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUserSignOutMutation } from '../../features/usersApi'
import './SignNav.css'

const SignNav = () => {
    const [userSignOut] = useUserSignOutMutation()
    let logged;
    const disconnect = () => { 
        logged = JSON.parse(localStorage.getItem("user"))
        userSignOut(logged)
        localStorage.removeItem("user")
        
    }


    return (
        <div className='sign-nav'>
            <LinkRouter className='sign-p top-sign' to="/auth/signup">
                <p>SignUp</p>
            </LinkRouter>
            <LinkRouter className='sign-p middle-sign' to="/auth/signin">
                <p>SignIn</p>
            </LinkRouter>

            <button className='sign-p bot-sign' onClick={disconnect}>
                <p>LogOut</p>
            </button>

        </div>
    )
}

export default SignNav