import axios from 'axios'
import React from 'react'

import {useState,useEffect} from "react"

const Activities = (props) => {


const [activities, setActivities]= useState([])




useEffect(() => {
    axios.get(`http://localhost:4000/activities?itinerary=${props.dato}`)
        .then(response => setActivities(response.data.response))

}, [])
    
    const cardsActivities = (item) => (
        <div className="">
            <div className=''>
                <h3 className=''>{item.name} </h3>
                <img className="" src={item.photo} alt="" />
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