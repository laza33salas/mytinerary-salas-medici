import React from 'react'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useUserSignOutMutation } from '../../features/actions/usersApi'
import './SignNav.css'

const SignNav = () => {
    const [userSignOut] = useUserSignOutMutation()
    let logged;

    const disconnect = () => {
        logged = JSON.parse(localStorage.getItem("token"))
        userSignOut(logged)
        localStorage.removeItem("token")
    }


    const log = null == JSON.parse(localStorage.getItem("token")) //Pregunta si hay un usuario logueado/local storage
    const [open, setOpen] = useState(log)
    const handleShowLogs = () => { 
        if (log) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const SignUpIn = [
        {
            className: 'sign-p top-sign',
            to: '/auth/signup',
            content: 'SignUp'
        },
        {
            className: 'sign-p middle-sign',
            to: '/auth/signin',
            content: 'SignIn'
        }
    ]

    const logs = (item) => (
        <LinkRouter onClick={handleShowLogs} className={item.className} to={item.to}><p>{item.content}</p></LinkRouter>
    )
    const LogOut = <button className='sign-p bot-sign' onClick={disconnect}><h3>LogOut</h3></button>

    return (
        <div className='sign-nav'>
            {console.log(log)}
            {open
                ?  SignUpIn.map(logs)
                :  LogOut
            }
        </div>
    )
}

export default SignNav