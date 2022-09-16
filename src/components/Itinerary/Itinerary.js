import axios from 'axios'
import React from 'react'
import './Itinerary.css'
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom'
import Activities from '../Activities/Activities'
import Comments from '../Comments/Comments'

const Itinerary = () => {


const [itinerarios, setItinerarios]= useState([])

const { id } = useParams()


useEffect(() => {
    axios.get(`http://localhost:4000/itineraries/?city=${id}`)
        .then(response => setItinerarios(response.data.response))

}, [])

    const cardItinerary = (item) => (
        <div className='container-itineraries'>
            <h2 className='tittle-itinerary'>Itinerary</h2>
            <div className='itinerary-data'>
                <h4 className=''>{item.name}</h4>
                <p className=''>Price: ${item.price}</p>
                <p className=''>❤{item.likes}</p>
                <p className=''>{item.tags}</p>
                <p className=''>Duration: {item.duration}</p>
                <Activities dato={item._id}/>
            </div>
        </div>
    )


    return (
    <div>
                <div className=''>
                    {itinerarios?.map(cardItinerary)}  
                </div>  

            <Comments/>
    </div>
    )
}

export default Itinerary