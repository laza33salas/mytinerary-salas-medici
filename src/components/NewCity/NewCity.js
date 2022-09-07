import React from 'react'
import "./NewCity.css"
import Input from "../Input/Input"
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

    {name: "foundation", 
    type: "date",
    value: "",
    placeholder: "New Fundation"},

    {name: "description",
    type: "text",
    value: "",
    placeholder: "New Details"

    }
  ]
   
  
  const createCity = (arrayData) =>{
    let formData = arrayData.filter(input => input.value)
   
   console.log(formData)
    
    let data = formData.reduce((values,input) =>{
    values[input.name.toLowerCase()] = input.value
    return values
    },{})
    
    console.log(data)

    axios.post(`http://localhost:4000/cities`, data)
    .then(res => console.log(res))
    .catch(error => console.log(error))
    
  }


  return (
    <div className='inputContainer'>
      <h1 className="titleInputs">Create New City</h1>
      <Input inputData={inputNewCity} event={(arrayData) =>createCity(arrayData)} ></Input>
    </div>
  )
}

export default NewCity