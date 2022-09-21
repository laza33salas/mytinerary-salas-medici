import React from 'react'
import { useParams } from 'react-router-dom'

import CardDetails from '../components/CardDetails/CardDetails'
import Itinerary from '../components/Itinerary/Itinerary'
import {useGetUsersItinerariesQuery} from '../features/actions/ItinerariosApi'
const MyItinerary = () => {
  
  const {id}= useParams()
  
  const {
    data : itinerarios
} = useGetUsersItinerariesQuery(id)

  
  return (
    <>
      <CardDetails/>
      <Itinerary itinerarios={itinerarios}/>
    </>
  )
}

export default MyItinerary