import React from 'react'
import "./NewCity.css"
import Input from "../Input/Input"
import axios from 'axios'



const NewCity = () => {
  

  const inputNewCity = [
   {name: "City", 
    type: "text",
    value: "",
    placeholder: "New City"},

    {name: "Country", 
    type: "text",
    value: "",
    placeholder: "New Country"}, 

    {name: "Photo", 
    type: "text",
    value: "",
    placeholder: "New Photo"},

    {name: "Population", 
    type: "number",
    value: "",
    placeholder: "New Population"},

    {name: "Foundation", 
    type: "date",
    value: "",
    placeholder: "New Fundation"},

    {name: "Description",
    type: "text",
    value: "",
    placeholder: "New Details"

    }
  ]
   
  
  const createCity = (arrayData) =>{
    let formData = arrayData.filter(input => input.value)
   
   console.log("form data:" + formData)
    
    let data = formData.reduce((values,input) =>{
    values[input.name.toLowerCase()] = input.value
    return values
    },{})
    
    console.log("data:" + data)

    axios.post(`http://localhost:4000/cities`, data)
    .then(res => console.log(res))
    .catch(error => console.log(error))
    
  }


  return (
    <div className='inputContainer'>
      <h1 className="titleInputs">Create New City</h1>
      <Input className='inputs'inputData={inputNewCity} event={(arrayData) =>createCity(arrayData)} ></Input>
    </div>
  )
}

export default NewCity