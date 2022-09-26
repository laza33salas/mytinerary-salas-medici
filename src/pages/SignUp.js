import React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import SignUpGoogle from '../components/SignUpGoogle/SignUpGoogle'
import "./SignUp.css"

export default function SignUp() {

  return (
    <div className='sign-up-page'>
      <h1 className='sign-up-title'>Sign Up</h1>
        <p className='p-detail'>Sign Up with:</p>
        <SignUpForm/>
        <p className='p-detail'>Or sign up with:</p>
        <SignUpGoogle/>
    </div>
  )
}
