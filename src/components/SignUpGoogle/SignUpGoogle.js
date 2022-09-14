import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'

export default function SignUpGoogle() {

    const buttonDiv = useRef(null)
    console.log(buttonDiv.current)

    async function handleCredentialResponse(response) {

        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)

        let data = { 
            name: userObject.name,
            lastName: userObject.lastName,
            password :userObject.password,
            photo: userObject.photo,
            country: userObject.country,
            role: "user",
            from: "google"
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