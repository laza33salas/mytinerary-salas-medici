import React from 'react'
import SignInGoogle from '../components/SignInGoogle/SignInGoogle'
import "./SignUp.css"

export default function SignIn() {
  return (
    <div className='sign-up-page'>
        <h1 className='sign-up-title'>Sign In</h1>
        <p className='p-detail'>Sign In with:</p>
        <form action="">
            <input type="text" />
        </form>
        <p className='p-detail'>Or sign In with:</p>
       <SignInGoogle/>
    </div>
  )
}
