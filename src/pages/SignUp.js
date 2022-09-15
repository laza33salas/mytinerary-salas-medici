import React from 'react'
import InputGeneric from '../components/Input/InputGeneric'
import SignUpGoogle from '../components/SignUpGoogle/SignUpGoogle'
import "./SignUp.css"

export default function SignUp() {

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
     
     {type: "text",
     value: "",
     placeholder: "Photo"},
     
     {type: "text",
     value: "",
     placeholder: "Country"},
     
     {type: "text",
     value: "",
     placeholder: "Role"},
     
     {type: "text",
     value: "",
     placeholder: "From"},
     
     {type: "boolean",
     value: "",
     placeholder: "Logged"},
     
     {type: "boolean",
     value: "",
     placeholder: "Verified"},
     
     {type: "text",
     value: "",
     placeholder: "Code"}
   ]



  return (
    <div className='sign-up-page'>
      <h1 className='sign-up-title'>Sign Up</h1>
        <p className='p-detail'>Sign Up with:</p>
        <InputGeneric inputData={inputEditCity}></InputGeneric>
        <p className='p-detail'>Or sign up with:</p>
        <SignUpGoogle/>
    </div>
  )
}
