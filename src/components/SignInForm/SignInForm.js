import React, { useEffect, useState } from 'react'
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'
import { useUserSignInMutation } from '../../features/actions/usersApi'
import {getUser} from '../../features/User/userSlice'
import { useDispatch } from 'react-redux'
 
export default function SignInForm() {

  const [userSignIn, { data, error }] = useUserSignInMutation() 

  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()

   function changeValue(event) {
    event.preventDefault();

    const dataUser = {
      mail: mail,
      password: pass,
      from: 'form'
    }
      userSignIn(dataUser)
  }

  useEffect(() => {
    if(data){  
      localStorage.setItem('token',JSON.stringify(data.response.token))
      dispatch(getUser(data.response.user))//guarda en el store del redux
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
