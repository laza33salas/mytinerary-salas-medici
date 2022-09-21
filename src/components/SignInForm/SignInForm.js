import React, { useEffect, useState } from 'react'
import Alert from '../Alert/Alert'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserSignInMutation } from '../../features/actions/usersApi'
 
export default function SignInForm() {

  const [userSignIn, { data, error }] = useUserSignInMutation() 

  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

   function changeValue(event) {
    event.preventDefault();

    const dataUser = {
      mail: mail,
      password: pass,
      from: 'form'
    }
    console.log(dataUser)
    //try {
      //let response = await axios.post('http://localhost:4000/users/signin',data)
     // console.log(response)
      userSignIn(dataUser)
     // localStorage.setItem('token',JSON.stringify(response.data.response.token))
     // navigate("/",{replace:true})
   // } catch (error) {
   //   console.log(error)
   // }
  }

  useEffect(() => {
    if(data){  
      localStorage.setItem('token',JSON.stringify(data.response.token))
      navigate("/",{replace:true})
    }
  }, [data])  


  return (
    <form onSubmit={changeValue} className="user-form">

      <div>
        <label htmlFor='mail'> </label>
        <input className='form-input' type='email' name='mail' id='mail' placeholder='Mail' value={mail} onChange={e => setMail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='pass'> </label>
        <input className='form-input' type='password' name='pass' id='pass' placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} required />
      </div>

      <Alert classNamee="botonNC" message="Form Send"></Alert>
    </form>
  )
}
