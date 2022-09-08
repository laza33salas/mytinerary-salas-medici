import React from 'react'
import './Itinerary.css'

const Itinerary = () => {

    const itinerarios = [
        {
            city: "Paris",
            photo: "https://cdn2.civitatis.com/francia/paris/galeria/paseo-barco-rio-sena.jpg",
            itinerario: "Boat trip on the Seine",
            description: "que te importa"
        },
        {
            city: "London",
            photo: "https://cdn2.civitatis.com/francia/paris/galeria/paseo-barco-rio-sena.jpg",
            itinerario: "Boat trip on the Seine",
            description: "que te importa"
        },

        {
            city: "New York",
            photo: "https://cdn2.civitatis.com/francia/paris/galeria/paseo-barco-rio-sena.jpg",
            itinerario: "Boat trip on the Seine",
            description: "que te importa"
        }
    ]

    const cardItinerary = (item) => (
        <div className="itinerary-card">

            <div className='face front'>
                <img className="itinerary-card-imagen-front" src={item.photo} alt="" />
                <h3 className='card-tittle-front'>{item.city} </h3>
            </div>

            <div className='face back'>
                <h3 className="itinerary-card-tittle-back">{item.city}</h3>
                <p className='itinerary-card-p-back'>{item.description}</p>
            </div>

        </div>
    )


    return (
        <div>
            <h2 className='tittle-itinerary'>Itinerary of {itinerarios[0].city}</h2>
            <div className='citiesCard-container'>

                {itinerarios.map(cardItinerary)}
            </div>
        </div>
    )






}

export default Itinerary