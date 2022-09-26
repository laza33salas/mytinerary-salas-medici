
import React from 'react'
import './Itinerary.css'
import Activities from '../Activities/Activities'
import Comments from '../Comments/Comments'
import Likes from '../Likes/Likes'

const Itinerary = (props) => {

    const cardItinerary = (data) => (
        <div className='container-itineraries' key={data._id}>
            <h2 className='tittle-itinerary'>Itinerary</h2>
            <div className='itinerary-data'>
                <h4 className=''>{data.name}</h4>
                <p className=''>Price: ${data.price}</p>
                <Likes itinerary={data}/>
                <p className=''>{data.tags}</p>
                <p className=''>Duration: {data.duration}</p>
                <Activities dato={data._id} />
            </div>
        </div>
    )
    return (
        <div>
            <div className=''>
                {props.itinerarios?.map(cardItinerary)}
            </div>
            <Comments />
        </div>
    )
}

export default Itinerary