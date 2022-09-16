import axios from 'axios'
import React from 'react'
import './Activities.css'
import {useState,useEffect} from "react"

const Activities = (props) => {


const [activities, setActivities]= useState([])




useEffect(() => {
    axios.get(`http://localhost:4000/activities?itinerary=${props.dato}`)
        .then(response => setActivities(response.data.response))

}, [])
    
    const cardsActivities = (item) => (
        <div className="">
            <div className='container-activity'>
                <h3 className='tittle-activity'>{item.name} </h3>
                <div className='image-detail-container-activity'>
                <img className="img-activity" src={item.photo} alt="" />
            </div>
            </div>

        </div>
    )
           
    return (
        <div>
            <h2 className='tittle-itinerary'>Activities</h2>
          
            <div className='citiesCard-container'>
                {activities?.map(cardsActivities)}
            
            </div>
        </div>
    )


}

export default Activities