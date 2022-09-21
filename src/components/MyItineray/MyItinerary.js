import React, { useEffect, useState } from "react";

import { useGetUsersItinerariesQuery, useDeleteItineraryMutation } from "../../features/actions/ItinerariosApi";
import Itinerary from "../../components/Itinerary/Itinerary"
import { Link as LinkRouter } from 'react-router-dom'
const MyTinerary = () => {
    const [userId,setUserId] = useState("")
    
    const {
        data: itineraries
    } = useGetUsersItinerariesQuery(userId)
    
    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem("user"))?.id)
    },[])
    
    const [deleteItinerary] = useDeleteItineraryMutation()
    
    function delelteThisItinerary(id, itinerary) {
        deleteItinerary(id)
        itinerary.remove()
    }
    return (
        <div className="myTineraries-container">
            {itineraries?.length ? <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
            :<h1>Not Itineraries</h1>}
            {itineraries?.map((itinerary) => {
                return (
                    <div className="myTineraries-item" key={itinerary._id}>
                        
                        <Itinerary data={itinerary}>
                        <button type="button" className="delete-itinerary-btn" onClick={(e) => { delelteThisItinerary(itinerary._id,e.target.parentElement) }} >
                        Delete
                        </button>
                        </Itinerary>
                    </div>
                )
            })}
        <LinkRouter to={`/`} className="myTineraries-btn">Back to Home</LinkRouter>
        </div>
    )
}
export default MyTinerary