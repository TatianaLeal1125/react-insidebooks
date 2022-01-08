import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'


const containerStyle = {
  width: '100%',
  height: '100%'
}

const center = {
  lat: 19.42847,
  lng: -99.12766
}

function Mapa () {
  return (
    <LoadScript googleMapsApiKey='AIzaSyCf38zjlzEzWkwk8qxrTW0rmVW_ClTLS34'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/*Child components, such as markers, info windowss*/}
      </GoogleMap>
    </LoadScript>
  )
}

export default Mapa;