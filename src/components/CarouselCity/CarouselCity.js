import Carousel from "../Carousel/Carousel"
import "./CarouselCity.css"
import PopularCities from "./PopularCities"
import axios from "axios"
import {useEffect, useState} from "react"




function CarouselCity() {
    const [cities, setCities] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:4000/cities/")
          .then(response => setCities(response.data.response))
          
      },[])
    return (
        <div className="container-carousel-city">
            <PopularCities/>
            <Carousel data={cities} range={4}/>
        </div>
    )
}

export default CarouselCity