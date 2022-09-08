import axios from 'axios'
import React from 'react'

import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom'
const Activities = (props) => {


const [activities, setActivities]= useState([])




useEffect(() => {
    axios.get(`http://localhost:4000/activities/?itinerary=${props.dato}`)
        .then(response => setActivities(response.data.response))

}, [])
    
    const cardsActivities = (item) => (
        <div className="itinerary-card">

            <div className='face front'>
                <img className="itinerary-card-imagen-front" src={item.photo} alt="" />
                <h3 className='card-tittle-front'>{item.name} </h3>
            </div>

            <div className='face back'>
                <h3 className="itinerary-card-tittle-back">{item.name}</h3>
                <p className='itinerary-card-p-back'>{item.description}</p>
            </div>

        </div>
    )


    return (
        <div>
            <h2 className='tittle-itinerary'>Activities of </h2>
            <div className='citiesCard-container'>
                {activities?.map(cardsActivities)}
            </div>
        </div>
    )


}

export default Activities