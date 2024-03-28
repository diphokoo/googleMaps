import React from "react";
import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from "@vis.gl/react-google-maps";

function Intro() {
    const apiKey = 'AIzaSyC_OnpNyPWTbi1UjNrQ8bCg5nXF9Nxo0Z4';
    const Map_Id = '3116ef0509cad263'
    const position = { lat: -25.774040, lng: 28.335020 }
    const [open, setOpen] = useState(false)
    return (
        <APIProvider apiKey={apiKey}>
            <div style={{ height: '100vh' }}>
                <Map zoom={20} center={position} mapId={Map_Id}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin 
                           background={'grey'}
                           borderColor={'green'}
                           glyphColor={'purple'}
                        />
                    </AdvancedMarker>
                    {open && (
                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                            <p>
                                I'm in datasaint
                            </p>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    )
}

export default Intro;