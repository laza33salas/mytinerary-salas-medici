import Carousel from "../Carousel/Carousel"
import "./CarouselCity.css"
import PopularCities from "./PopularCities"
import {useState} from "react"
import { useGetAllCitiesQuery } from "../../features/actions/citiesApi"


function CarouselCity() {
   const [value, setValue] = useState([])
   const {
    //informacion que necesito usar, es el body
    data: cities ,
    //
    error,
    //Una propiedad que me indica si se esta cargando ese dato
    isLoading,
    //Una propiedad que me indica si se completo la carga con exito
    isSuccess,
    //Una propiedad en caso de que haya fallado
    isFailed

  } = useGetAllCitiesQuery(value)


   /* useEffect(()=>{
        axios.get("http://localhost:4000/cities/%22)
          .then(response => setCities(response.data.response))

      },[]) */

  const citiesCarousel = cities?.slice(0, 12)

    return (
        <div className="container-carousel-city">
           <PopularCities/>
           <Carousel data={citiesCarousel} range={4}/>
        </div>
    )
}

export default CarouselCity