import React, { useState } from 'react'
import Alert from '../Alert/Alert'
import axios from 'axios'
import './SignUpForm.css'

export default function SignUpForm() {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const [userPhoto, setUserPhoto] = useState("")
  const [country, setCountry] = useState("")


  async function changeValue(event) {
    event.preventDefault();
    const data = {
      name: name,
      lastName: lastName,
      mail: mail,
      password: pass,
      photo: userPhoto,
      country: country,
      from: 'form',
      role: "user"
    }
    console.log(data)
    try {
      await axios?.post('http://localhost:4000/users/signup', data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={changeValue} className="user-form">

      <div>
        <label htmlFor='name'> </label>
        <input className='form-input' type='text' name='name' id='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='lastName'> </label>
        <input className='form-input' type='text' name='lastName' id='lastName' placeholder='LastName' value={lastName} onChange={e => setLastName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='mail'> </label>
        <input className='form-input' type='email' name='mail' id='mail' placeholder='Mail' value={mail} onChange={e => setMail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='pass'> </label>
        <input className='form-input' type='password' name='pass' id='pass' placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='userPhoto'> </label>
        <input className='form-input' type='text' name='userPhoto' id='userPhoto' placeholder='Photo' value={userPhoto} onChange={e => setUserPhoto(e.target.value)} required />
      </div>
      <div>
        <label htmlFor='country'> </label>
        <input className='form-input' type='text' name='country' id='country' placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} required />
      </div>
      <Alert classNamee="botonNC" message="Form Send"></Alert>
    </form>
  )
}
