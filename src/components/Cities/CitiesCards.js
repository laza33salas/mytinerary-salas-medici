import "./CitiesCards.css"
import { Link as LinkRouter } from "react-router-dom"
import Input from "../Input/Input"
import { useGetAllCitiesQuery } from "../../features/citiesApi"
import { useEffect } from "react"


const CitiesCards = () => {
 
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
    
  } = useGetAllCitiesQuery()

  const cards = (item) => (
    <div className="card">
      <div className='face front'>
        <img className="card-imagen-front" src={item.photo} alt="" />
        <h3 className='card-tittle-front'>{item.city} </h3>
      </div>

      <div className='face back'>
        <h3 className="card-tittle-back">{item.city}</h3>
        <p className='card-p-back'>{item.description}</p>
        <div className='link'>
          <LinkRouter className='card-a-front' to={`/Cities/${item._id}`}>Details</LinkRouter>
        </div>
      </div>

    </div>
  )

   

  return (
    <div>
      <div className="searchContainer">
      <Input placeholder={"Search"}/>
      </div>

      <div className='citiesCard-container'>
    
        {cities?.response.map(cards)}
      </div>
    </div>
  )
}

export default CitiesCards