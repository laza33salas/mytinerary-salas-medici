import React, { useState } from 'react'
import Alert from '../Alert/Alert'
import axios from 'axios'

export default function SignInForm() {

  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")

  async function changeValue(event) {
    event.preventDefault();
    const data = {
      mail: mail,
      password: pass,
      from: 'form'
    }
    console.log(data)
    try {
      await axios?.post('http://localhost:4000/users/signin', data)
    } catch (error) {
      console.log(error)
    }
  }


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
