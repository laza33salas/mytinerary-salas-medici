import {useState,useRef} from 'react'
import "./Input.css"


const Input = (props) => {

const readArray = props.inputData


const inputForm = useRef()
  const sendValue = (e) =>{
    e.preventDefault()
    props.event((Array.from(inputForm.current), e))

    inputForm.current.reset()
  }


  const createInputsForm = (item) =>{
    return (
      <>
        <p>{item.name}</p>
        <input name={item.name} type={item.type} defaultValue={item.value} placeholder={item.placeholder}/>
      </>
    )
  }

  return (

    <div className='form-container'>
      <form ref={inputForm} onSubmit={sendValue} id="form-new-city">
        <legend className="legendInput">{props.dato}</legend>
        {props.children}       
        {readArray.map(createInputsForm)}
        <button className="botonNC" type='submit'>Pulpo</button>
      </form>
    
    </div>
  )
}

export default Input