
import { useGetUsersItinerariesQuery} from "../features/actions/ItinerariosApi";
import Itinerary from "../components/Itinerary/Itinerary"

import { useSelector } from "react-redux";
const MyTinerary = () => {
    
  const datosUsers = useSelector(state=> state.user.user)
  console.log(datosUsers)
    
    const {
        data: itineraries
    } = useGetUsersItinerariesQuery(datosUsers.id)

    
    return (
      <div>
         <Itinerary itinerarios={itineraries}/>
        </div>
    )
}
export default MyTinerary