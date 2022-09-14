import React from 'react'
import SignUpGoogle from '../components/SignUpGoogle/SignUpGoogle'
import "./SignUp.css"

export default function SignUp() {
  return (
    <div className='sign-up-page'>
        <p className='p-detail'>Sign Up with:</p>
        <form action="">
            <input type="text" />
        </form>
        <p className='p-detail'>Or sign up with:</p>
        <SignUpGoogle/>
    </div>
  )
}
