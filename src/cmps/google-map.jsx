import React from "react"
import GoogleMapReact from 'google-map-react'
import { useState } from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export function GoogleMap({pos ,stay }) {
    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
    const zoom = 11

    const onClick = ({ x, y, lat, lng, event }) => {
        console.log(x, y, lat, lng, event)
        setCoordinates({ lat, lng })
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                onClick={onClick}
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={32.0748}
                    lng={34.8946}
                    text="📍"
                />
                <AnyReactComponent
                    lat={32.0853}
                    lng={34.7818}
                    text="📍"
                />
            </GoogleMapReact>
        </div>
    )
}