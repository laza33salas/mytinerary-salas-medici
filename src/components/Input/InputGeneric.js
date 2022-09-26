import React from 'react'
import {useRef} from 'react'
import Alert from '../Alert/Alert'

const InputGeneric = (props) => {

    const readArray = props.inputData

    const inputForm = useRef()
    const sendValue = (e) => {
        e.preventDefault()
        props.event(Array.from(inputForm.current), e)

        inputForm.current.reset()
    }

    const createInputsForm = (item) =>{
        return (
          <div>
            <input className='generic-input' ref={props.ref} onChange={props.method} name={item.name} type={item.type} defaultValue={item.value} placeholder={item.placeholder}/>
          </div>
        )
      }

      return (
        <div className='generic-form-container'>
          <form ref={inputForm} onSubmit={sendValue} id="new-input">
            {props.children}       
            {readArray.map(createInputsForm)}
            <Alert classNamee="botonNC" message={props.message}></Alert>
          </form>
        
        </div>
      )
}


export default InputGeneric