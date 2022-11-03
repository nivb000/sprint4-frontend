import React from "react"
import GoogleMapReact from 'google-map-react'
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import Fab from '@mui/material/Fab';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const AnyReactComponent = () => <ThemeProvider theme={theme}>
        <Fab size='large' sx={{ transform: 'scale(0.8)' }}>
            <HomeIcon fontSize='large' sx={{ color: 'white' }} />
        </Fab>
    </ThemeProvider>

const theme = createTheme({
    components: {
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ff385c',
                    boxShadow: '0 0 0 0',
                    "&:hover": {
                        backgroundColor: '#ff385c'
                    }
                }
            },
        },
    },
});


export function GoogleMap({ pos }) {
    const [coordinates, setCoordinates] = useState({ lat: pos.lat, lng: pos.lan })
    const zoom = 11



    const onClick = ({ x, y, lat, lng, event }) => {
        setCoordinates({ lat, lng })
    }

    return (
        <div style={{ height: '50vh', width: '100%', paddingBlockStart: '27px' }}>
            <div style={{ color: '#494949', fontSize: '1.5rem', fontFamily: 'cereal-medium', marginBottom: '27px' }}> Where you’ll be</div>
            <GoogleMapReact
                onClick={onClick}
                bootstrapURLKeys={{ key: ""}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={zoom}>
                <AnyReactComponent key={pos.lat} lat={pos.lat} lng={pos.lan} />
            </GoogleMapReact>
        </div>
    )
}