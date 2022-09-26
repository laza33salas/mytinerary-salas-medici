
import "./CardDetails.css"
import { Link as LinkRouter, useParams} from "react-router-dom"
import MapView from '../MapView/MapView'
import {useGetOneCityQuery} from '../../features/actions/citiesApi'

const CardDetails = () => {
    
    const {id} = useParams()
    const {
       data: cities,
       isSuccess

    } = useGetOneCityQuery(id)
    
    return (

        <div className='CardDetails-container'>

            <h2 className='h2-details'>More Info {cities?.city}</h2>

                <LinkRouter to={`/Cities/${cities?._id}`}>
                    <div className='image-detail-container'>
                        <img className="detail-image" src={cities?.photo} alt="" />
                    </div>
                </LinkRouter>
                <h3 className="carousel-card-tittle">{cities?.city} </h3>
                <p className='p-detail'> Population: {cities?.population}</p>
                <p className='p-detail'> foundation: {cities?.foundation}</p>
                <p className='p-detail city-description'>{cities?.description}</p>
                <div className='botonNC'>
                    <LinkRouter className="back" to="/Cities">Back</LinkRouter>
                </div>
                <div>
                    {isSuccess?
                    <MapView 
                    city={cities}/>
                    :null}
                </div>
        </div>

    )
}

export default CardDetails