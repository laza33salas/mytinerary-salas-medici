import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from '../../IconLocation/IconLocation'


const Markers = (props) => {
    const { location} = props
    return (
                <Marker
                    key={location._id}
                    position={location.location}
                    icon={IconLocation} />
    )
}

export default Markers