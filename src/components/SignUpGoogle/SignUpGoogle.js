import { useEffect, useRef } from 'react'
import * as jose from 'jose'

function  signUpGoogle  () {

    let [newUser, response] = useSignUpUserMutation();

    console.log(buttonDiv.current)
    
    async function handleCredentialResponse(response) {
        const buttonDiv = useRef(null)
    }

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
        //newUser(data)
    

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

export default signUpGoogle
