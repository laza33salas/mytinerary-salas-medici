import {useState} from 'react'
import "./Input.css"


const Input = (props) => {
//Setear los hooks useState

const [search, setSearch] = useState("")  

//Capturar input
const searcher = e =>{
  setSearch(e.target.value)
  console.log(e.target.value)
}

  return (
    <div className='form-container'>
      <form >
        <label>{props.dato}</label>
        <input className='search' type="text" placeholder='Search' value={search} onChange={searcher}/>    
      </form>
    
    </div>
  )
}

export default Input