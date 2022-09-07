import React from 'react'
import "./NewCity.css"
import Input from "../Input/Input"
import {useState} from 'react'
import axios from 'axios'



const NewCity = (props) => {
  

  const inputNewCity = [
   {name: "city", 
    type: "text",
    value: "",
    placeholder: "New City"},

    {name: "country", 
    type: "text",
    value: "",
    placeholder: "New Country"}, 

    {name: "photo", 
    type: "text",
    value: "",
    placeholder: "New Photo"},

    {name: "Population", 
    type: "number",
    value: "",
    placeholder: "New Population"},

    {name: "fundation", 
    type: "number",
    value: "",
    placeholder: "New Fundation"}
  ]
   
  const [inputValue, setinputValue] = useState(null) 
  
  const changeValue = (e) =>{
    setinputValue(e.current.value)
  }

  const createCity = (arrayData) =>{
    let formData = arrayData
   
    
    let data = formData.reduce((values,input) =>{
    values[input.name.toLowerCase()] = input.value
    return values
    },{})
  
    axios.post(`http://localhost:4000/cities`, data)
    .then(res => console.log(res) 
    .catch(error => console.log(error))
    )
  }

  return (
    <div className='inputContainer'>
      <h1 className="titleInputs">Create New City</h1>
      <Input inputData={inputNewCity} event={(arrayData) =>createCity(arrayData)} onChange={changeValue}></Input>
  
    </div>
  )
}

export default NewCity