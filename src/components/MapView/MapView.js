import './MapView.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Markers from './Markers/Markers'



const MapView = (props) => {
    const {city} = props
   
    return (
        <>
    <MapContainer center={city?.location} zoom={12}>
       <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markers location={city}/>
    </MapContainer>
        </>
   
  )
}

export default MapView