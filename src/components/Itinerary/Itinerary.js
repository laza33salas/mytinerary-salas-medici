
import React from 'react'
import './Itinerary.css'
import Activities from '../Activities/Activities'
import Comments from '../Comments/Comments'

const Itinerary = (props) => {


// useEffect(() => {
//     axios.get(`http://localhost:4000/itineraries/?city=${id}`)
//         .then(response => setItinerarios(response.data.response))

// }, [])

    const cardItinerary = (data) => (
        <div className='container-itineraries'>
            <h2 className='tittle-itinerary'>Itinerary</h2>
            <div className='itinerary-data'>
                <h4 className=''>{data.name}</h4>
                <p className=''>Price: ${data.price}</p>
                <p className=''>❤{data.likes}</p>
                <p className=''>{data.tags}</p>
                <p className=''>Duration: {data.duration}</p>
                <Activities dato={data._id}/>
            </div>
        </div>
    )

    

    return (
    <div>
                <div className=''>
                    {props.itinerarios?.map(cardItinerary)}  

                </div>  

            <Comments/>
    </div>
    )
}

export default Itinerary