import React from 'react'
 import "./CitiesCards.css"
import Cities from "./Cities"

 const CitiesCards = () => {
    const dataCiudad =[
        {url: "https://images.pexels.com/photos/3132304/pexels-photo-3132304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nombre:"Hong Kong - China"},
        {url: "https://images.pexels.com/photos/2607918/pexels-photo-2607918.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Bangkok - Thailand"},
        {url: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Singapore"},
        {url: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"London - England"},
        {url: "https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Paris - France"},
        {url: "https://images.pexels.com/photos/7062250/pexels-photo-7062250.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Macau - China"},
        {url: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"New York - EEUU"},
        {url: "https://images.pexels.com/photos/6640207/pexels-photo-6640207.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Rome - Italy"},
        {url: "https://images.pexels.com/photos/9577175/pexels-photo-9577175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nombre:"Kuala Lumpur - Malaysia"},
        {url: "https://images.pexels.com/photos/13059585/pexels-photo-13059585.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Antalya - Turkey"},
        {url: "https://images.pexels.com/photos/11077078/pexels-photo-11077078.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Istanbul - Turkey"},
        {url: "https://images.pexels.com/photos/3727262/pexels-photo-3727262.jpeg?auto=compress&cs=tinysrgb&w=1600", nombre:"Dubai - United Arab Emirates"},
       ]
  
    return  (
    <div className='citiesCard-container'>
        <Cities data={dataCiudad}/>
    </div>
  )
}
 
export default CitiesCards