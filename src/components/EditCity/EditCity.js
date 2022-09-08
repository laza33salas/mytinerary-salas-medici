import React from 'react'
import "./EditCity.css"
import Input from "../Input/Input"
import {useRef, useState} from 'react'
import axios from 'axios'
import {useGetAllCitiesQuery} from "../../features/citiesApi"

const EditCity = () => {

    const va
    = useRef() 
  
        const {
         
          data: cities ,
 
          error,
      
          isLoading,
     
          isSuccess,
        
          isFailed
          
        } = useGetAllCitiesQuery("")


        const [value, setValue] = useState(cities?.response[0]._id)

  const inputEditCity = [
   {name: "City", 
    type: "text",
    value: "",
    placeholder: "Edit City"},

    {name: "Country", 
    type: "text",
    value: "",
    placeholder: "Edit Country"}, 

    {name: "Photo", 
    type: "text",
    value: "",
    placeholder: "Edit Photo"},

    {name: "Population", 
    type: "number",
    value: "",
    placeholder: "Edit Population"},

    {name: "Foundation", 
    type: "date",
    value: "",
    placeholder: "Edit Fundation"},

    {name: "Description",
    type: "text",
    value: "",
    placeholder: "Edit Details"

    }
  ]
   
  
  const modifyCity = (arrayData) =>{
    let formData = arrayData.filter(input => input.value && input.name)
   
   console.log(formData)
    
    let data = formData.reduce((values,input) =>{
    values[input.name.toLowerCase()] = input.value
    return values
    },{})
    
    console.log(data)

    axios.put(`http://localhost:4000/cities/${value}`, data)
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  function viewOptions(city){
    return <option value= {city._id}>{city.city}
    </option>
  }

  
  function changeValue(){
        setValue(valueCity.current.value)
  }

  return (
    <div className='inputContainer'>
      <h1 className="titleInputs">Edit City</h1>
      <select className='select-edit-city' onChange={changeValue} ref={valueCity}>{cities?.response.map(viewOptions)}</select>
      <Input inputData={inputEditCity} event={(arrayData) =>modifyCity(arrayData)} ></Input>
    </div>
  )
}

export default EditCity