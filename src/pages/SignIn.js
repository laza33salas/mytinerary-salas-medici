import React from 'react'
import SignUpGoogle from '../components/SignUpGoogle/SignUpGoogle'
import "./SignUp.css"

export default function SignIn() {
  return (
    <div className='sign-up-page'>
        <h1 className='sign-up-title'>Sign Ip</h1>
        <p className='p-detail'>Sign In with:</p>
        <form action="">
            <input type="text" />
        </form>
        <p className='p-detail'>Or sign In with:</p>
        <SignUpGoogle/>
    </div>
  )
}
