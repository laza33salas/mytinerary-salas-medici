import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import "./CardDetails.css"
import { Link as LinkRouter } from "react-router-dom"
import axios from "axios"

const CardDetails = () => {

    const [city, setCity] = useState([])
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:4000/cities/${id}`)
            .then(response => setCity(response.data.response))

    }, [])


    return (

        <div className='CardDetails-container'>

            <h2 className='h2-details'>More Info {city.city}</h2>

                <LinkRouter to={`/Cities/${city._id}`}>
                    <div className='image-detail-container'>
                        <img className="detail-image" src={city.photo} alt="" />
                    </div>
                </LinkRouter>
                <h3 className="carousel-card-tittle">{city.city} </h3>
                <p className='p-detail'> Population: {city.population}</p>
                <p className='p-detail'> foundation: {city.foundation}</p>
                <p className='p-detail city-description'>{city.description}</p>
                <div className='botonNC'>
                    <LinkRouter className="back" to="/Cities">Back</LinkRouter>
                </div>
        </div>

    )
}

export default CardDetails