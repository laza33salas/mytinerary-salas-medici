import React from 'react'
import "./CitiesCards.css"
import {Link as LinkRouter} from "react-router-dom"


const CitiesCards = () => {
  const dataCiudad = [
    { url: "https://images.pexels.com/photos/3132304/pexels-photo-3132304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nombre: "Hong Kong", pais:"China",
  descripcion:"Hong Kong is a country in southern China and the Pearl River Delta. The small state has a total area of ​​1,110 km² and a total coastline of 733 km. This area is approximately 0.7 the size of Mexico City. This makes Hong Kong one of the smallest countries in Asia and 187th in the world." },
    { url: "https://images.pexels.com/photos/2607918/pexels-photo-2607918.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Bangkok", pais:"Thailand",
  descripcion:'Bangkok means "village of the wild plum" and is the name of a part of the Thon Buri river side. Thus, Bangkok is known as Krung Thep Mahanakhon. It was a small trading post at the mouth of the Chao Phraya River during the Ayutthaya kingdom.'},
    { url: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Singapore", pais:"Singapore",
  descripcion:"Boundaries: Singapore is made up of a main island and 64 smaller islands. It is bordered to the north by the Strait of Johor, which separates it from Malaysia. To the southwest it borders the Malacca Strait, which separates it from Indonesia. The closest coasts to the south are those of Sumatra (Indonesia)."},
    { url: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "London", pais:"England",
  descripcion:"London, located in the south-west of England, is the most important city from the political, economic and demographic point of view in the United Kingdom." },
    { url: "https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Paris", pais:"France",
  descripcion:"Paris, one of the most beautiful cities in the world, seduces first of all by its exceptional architectural and cultural heritage. A living heritage, which continues to modernize and enrich itself. Paris is also the capital of gastronomy, fashion and shopping; a city where something always happens." },
    { url: "https://images.pexels.com/photos/7062250/pexels-photo-7062250.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Macau", pais:"China",
  descripcion:"Macau is a small port city on the southern coast of China, close to Guangzhou and only about 65 km from Hong Kong. It was leased to Portugal in 1557 and officially became a colony of the Portuguese Empire in 1887." },
    { url: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "New York", pais:"EEUU",
  descripcion:"It is the most populous city in the State of New York, in the United States of America, and the second largest urban agglomeration on the continent. It is the center of the New York metropolitan area, which is among the five largest urban agglomerations in the world." },
    { url: "https://images.pexels.com/photos/6640207/pexels-photo-6640207.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Rome", pais:"Italy",
  descripcion:"Rome is an Italian city, capital of the Lazio region and of Italy. With a population of 2,815,951 inhabitants, it is the most populous municipality in Italy and the third most populous city in the European Union. Par excellence, it has been known since ancient times as the Urbe (Urbs)." },
    { url: "https://images.pexels.com/photos/9577175/pexels-photo-9577175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nombre: "Kuala Lumpur", pais:"Malaysia",
  descripcion:"En general, Kuala Lumpur es abreviada como KL en Malasia, y es mundialmente conocida por ser el lugar donde se encuentran las torres Petronas, actualmente los edificios gemelos más altos del mundo y anteriormente edificios más altos del mundo de forma absoluta." },
    { url: "https://images.pexels.com/photos/13059585/pexels-photo-13059585.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Antalya", pais:"Turkey",
  descripcion:"Antalya (formerly known as Adalia, from the Greek pamphylian: Αττάλεια Attália) is a city located on the Mediterranean coast of southwestern Turkey. It is the capital of the province of Antalya and gives its name to one of the largest gulfs on the Turkish coast, the Gulf of Antalya." },
    { url: "https://images.pexels.com/photos/11077078/pexels-photo-11077078.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Istanbul", pais:"Turkey",
  descripcion:"Istanbul, in Turkish İstanbul, is the largest city in Turkey and one of the largest cities in Europe. It is also the administrative capital of the Province of Istanbul, one of the 81 into which Turkey is divided. It is divided by the Bosphorus Strait into two parts, one in Asia and the other in Europe." },
    { url: "https://images.pexels.com/photos/3727262/pexels-photo-3727262.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre: "Dubai", pais:"United Arab Emirates",
  descripcion:"Dubai is the largest and most famous city in the United Arab Emirates, followed by Abu Dhabi, the capital of the Emirates. It is located in the Persian Gulf, between Sharjah and Abu Dhabi. * Also known as the city of Dubai, it is divided by Dubai Creek, a saltwater gap that bisects the city." },
  ]

  const cards = (item) => (
   
      <div className="card">
        <div className='face front'>
          <img className="card-imagen-front" src={item.url} alt="" />
          <h3 className='card-tittle-front'>{item.nombre} </h3>
        </div>

        <div className='face back'>
          <h3 className="card-tittle-back">{item.nombre}</h3>
          <p className='card-p-back'>{item.descripcion}</p>
          <div className='link'>
            <LinkRouter className='card-a-front' to={"/Cities/"+item.nombre}>Details</LinkRouter>
          </div>
        </div>



      </div>
    
  )


  return (
    <div className='citiesCard-container'>
      {dataCiudad.map(cards)}
    </div>
  )
}

export default CitiesCards