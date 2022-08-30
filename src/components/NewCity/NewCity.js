import React from 'react'
import "./NewCity.css"
import Input from "../Input/Input"

const NewCity = () => {
  return (
    <div className='inputContainer'>
      <div className='inputs'>
         <Input dato={"Add new city"} placeholder={"City"}/>
         <Input dato={"Add country"} placeholder={"Country"}/>
         <Input dato={"Add photo URL"}placeholder={"Photo"}/>
         <Input dato={"Add population"}placeholder={"Population"}/> 
         <Input dato={"Add fundation"} placeholder={"Fundation"}/> 
      </div>
    </div>
  )
}

export default NewCity