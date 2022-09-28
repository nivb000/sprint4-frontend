import React from "react"
import GoogleMapReact from 'google-map-react'
import { useState } from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export function GoogleMap({pos ,stay }) {
    const [coordinates, setCoordinates] = useState({ lat: stay.loc.lat, lng: stay.loc.lan })
    const zoom = 11


    console.log('stay:' , stay)
    
    const onClick = ({ x, y, lat, lng, event }) => {
        setCoordinates({ lat, lng })
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%', paddingBlockStart: '48px'}}>
            <GoogleMapReact
                onClick={onClick}
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={zoom}
            >
             
            
            </GoogleMapReact>
        </div>
    )
}