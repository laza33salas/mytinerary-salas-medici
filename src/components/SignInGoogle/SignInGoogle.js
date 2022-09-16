import React from 'react'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignInGoogle() {

    const buttonDiv = useRef(null)
    const navigate = useNavigate()

    async function handleCredentialResponse(response) {

        let userObject = jose.decodeJwt(response.credential)
        

        let data = { 
           
            mail: userObject.email,
            password: userObject.sub,
            from: "google"
        }

        try {
            let response = await axios.post('http://localhost:4000/users/signin',data)
            console.log(response)
            localStorage.setItem('user',JSON.stringify(response.data.response.user))
            navigate("/",{replace:true}) //redirigí al index
          } catch(error) {
            console.log(error)
          }        
    
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1062611731509-vvbj662ou1mppvj3pffkt4gomoj1fs9n.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signin'
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signin_with' }  
          );
    }, [])

    return (
        <div>
            <div ref={buttonDiv}></div>
        </div>
      )
}