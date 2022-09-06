import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import "./CardDetails.css"
import { Link as LinkRouter } from "react-router-dom"
import axios from "axios"
import apiurl from '../api'

const CardDetails = () => {

    const [city, setCity] = useState([])
    const { id } = useParams()


    useEffect(() => {
        axios.get(apiurl + `/cities/${id}`)
            .then(response => setCity(response.data.response))

    }, [])


    return (
        
        <div className='CardDetails-container'>
            <h2 className='h2-details'>More Info {city.city}</h2>
            <div className="carousel-container">
                <div className="carousel-card">
                    <LinkRouter to={`/Cities/${city._id}`}>
                        <img className="carousel-imagen" src={city.photo} alt="" />
                    </LinkRouter>
                    <h3 className="carousel-card-tittle">{city.city} </h3>
                </div>
            </div>

<div className='descripcion-details'>
            <p> Population: {city.population}</p>
            <p> foundation: {city.foundation}</p>
            <p>{city.description}</p>
            <LinkRouter className='botonNC' to="/Cities">Back</LinkRouter>
</div>

         
         



        </div>

    )
}

export default CardDetails