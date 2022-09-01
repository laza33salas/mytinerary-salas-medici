import {useState,useRef, useEffect} from 'react'
import "./Input.css"


const Input = (props) => {
//Setear los hooks useState

const [inputValue, setinputValue] = useState("")  
const previousinputValue = useRef("")

//Capturar input
useEffect(() => {
previousinputValue.current = inputValue;
}, [inputValue])

  return (
    <div className='form-container'>
      <form >
        <legend className="legendInput">{props.dato}</legend>
        <input className='input-style' type="text" placeholder={props.placeholder} value={inputValue} onChange={(e) => setinputValue(e.target.value)}/>    
      {console.log(inputValue)}
      </form>
    
    </div>
  )
}

export default Input