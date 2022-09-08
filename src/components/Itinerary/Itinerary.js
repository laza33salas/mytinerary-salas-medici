import axios from 'axios'
import React from 'react'
import './Itinerary.css'
import {useState,useEffect} from "react"
import { useParams } from 'react-router-dom'
import Activities from '../Activities/Activities'
const Itinerary = () => {


const [itinerarios, setItinerarios]= useState([])

const { id } = useParams()


useEffect(() => {
    axios.get(`http://localhost:4000/itineraries/?city=${id}`)
        .then(response => setItinerarios(response.data.response))

}, [])
    const cardItinerary = (item) => (
        <div className="itinerary-card">

            <div className='face front'>
                <img className="itinerary-card-imagen-front" src={item.photo} alt="" />
                <h3 className='card-tittle-front'> {item.name}</h3>
            </div>

            <div className='face back'>
                <h3 className="itinerary-card-tittle-back"></h3>
                <p className='itinerary-card-p-back'>{item.description}</p>
            </div>

        </div>
    )


    return (
        <div>
            <h2 className='tittle-itinerary'>Itinerary of </h2>
            <div className='citiesCard-container'>
                {itinerarios?.map(cardItinerary)}
            </div>
        <Activities/>
            
        </div>
    )






}

export default Itinerary