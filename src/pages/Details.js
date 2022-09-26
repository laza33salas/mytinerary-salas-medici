import React from 'react'
import { useParams } from 'react-router-dom'

import CardDetails from '../components/CardDetails/CardDetails'
import Itinerary from '../components/Itinerary/Itinerary'
import {useGetItinerariesQuery} from '../features/actions/ItinerariosApi'
const Details = () => {
  
  const {id}= useParams()
  
  const {
    data : itinerarios
} = useGetItinerariesQuery(id)

  
  return (
    <>
      <CardDetails/>
      <Itinerary itinerarios={itinerarios}/>
    </>
  )
}

export default Details