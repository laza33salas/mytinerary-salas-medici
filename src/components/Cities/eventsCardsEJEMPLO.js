import Cards from './Card'
import {useSelector, useDispatch} from 'react-redux'
import {fetchFromServer} from '../features/eventsSlice'
import '../stules/Cards.css'
import { useEffect } from 'react'

export default function EventsCards(){
    let events = useSelector(state => state.events.events)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFromServer())
    }, [])

    return (
        <div className='Events-container'>
            {events.map(event => <Card event={event} key={event.name}/>)}
        </div>
    )
}
