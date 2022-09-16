import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import axios from 'axios'


export default function SignUpGoogle() {

    const buttonDiv = useRef(null)
   

    async function handleCredentialResponse(response) {

        let userObject = jose.decodeJwt(response.credential)
      console.log(userObject)
        let data = { 
            name: userObject.given_name,
            lastName: userObject.family_name,
            password :userObject.sub,
            mail: userObject.email,
            country: "arg",
            photo: userObject.picture,
            role: "user",
            from: "google"
        }
        console.log(data)
        try{
          await axios.post('http://localhost:4000/users/signup', data)
        }catch(error){
          console.log(error)
        }
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1062611731509-vvbj662ou1mppvj3pffkt4gomoj1fs9n.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signup'
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signup_with' }  
          );
    }, [])

  return (
    <div>
        <div ref={buttonDiv}></div>
    </div>
  )
}