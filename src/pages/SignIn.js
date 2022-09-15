import React from 'react'
import InputGeneric from '../components/Input/InputGeneric'
import SignInGoogle from '../components/SignInGoogle/SignInGoogle'
import "./SignUp.css"

export default function SignIn() {

  const inputEditCity = [
    {type: "text",
    value: "",
    placeholder: "Name"},

    {type: "text",
     value: "",
     placeholder: "LastName"},
     
     {type: "text",
     value: "",
     placeholder: "Email"},
     
     {type: "text",
     value: "",
     placeholder: "Password"},
     
   ]
  
  return (
    <div className='sign-up-page'>
        <h1 className='sign-up-title'>Sign In</h1>
        <p className='p-detail'>Sign In with:</p>
        <InputGeneric inputData={inputEditCity}></InputGeneric>
        <p className='p-detail'>Or sign In with:</p>
       <SignInGoogle/>
    </div>
  )
}
