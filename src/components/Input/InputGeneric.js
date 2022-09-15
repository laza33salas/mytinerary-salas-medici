import React from 'react'
import {useRef} from 'react'

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
          <div >
            <input className='generic-input' name={item.name} type={item.type} defaultValue={item.value} placeholder={item.placeholder}/>
          </div>
        )
      }

      return (
        <div className='generic-form-container'>
          <form ref={inputForm} onSubmit={sendValue} id="new-input">
            {props.children}       
            {readArray.map(createInputsForm)}
            <button className="botonNC" type='submit'>Send</button>
          </form>
        
        </div>
      )
}


export default InputGeneric