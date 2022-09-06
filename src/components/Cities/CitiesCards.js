import React, { useEffect, useState,  } from 'react'
import "./CitiesCards.css"
import { Link as LinkRouter } from "react-router-dom"
import Input from "../Input/Input"
import axios from "axios"
import apiurl from '../api'


const CitiesCards = () => {
 
const [cities, setCities] = useState([])



useEffect(()=>{
  axios.get( apiurl + '/cities/')
    .then(response => setCities(response.data.response))
    
},[])

  const cards = (item) => (
    <div className="card">
      <div className='face front'>
        <img className="card-imagen-front" src={item.photo} alt="" />
        <h3 className='card-tittle-front'>{item.city} </h3>
      </div>

      <div className='face back'>
        <h3 className="card-tittle-back">{item.city}</h3>
        <p className='card-p-back'>{item.description}</p>
        <div className='link'>
          <LinkRouter className='card-a-front' to={`/Cities/${item._id}`}>Details</LinkRouter>
        </div>
      </div>

    </div>

  )
  return (
    <div>
      <div className="searchContainer">
      <Input placeholder={"Search"}/>
      </div>

      <div className='citiesCard-container'>
    
        {cities.map(cards)}
      </div>
    </div>
  )
}

export default CitiesCards