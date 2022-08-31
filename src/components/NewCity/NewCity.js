import React from 'react'
import "./NewCity.css"
import Input from "../Input/Input"

const NewCity = () => {
  return (
    <div className='inputContainer'>
      <h1 className="titleInputs">Create New City</h1>
      <div className='inputs'>
         <Input dato={"Add new city"} placeholder={"City"}/>
         <Input dato={"Add country"} placeholder={"Country"}/>
         <Input dato={"Add photo URL"}placeholder={"Photo"}/>
         <Input dato={"Add population"}placeholder={"Population"}/> 
         <Input dato={"Add fundation"} placeholder={"Fundation"}/> 
      </div>
      <button className="botonNC">Create</button>
    </div>
  )
}

export default NewCity