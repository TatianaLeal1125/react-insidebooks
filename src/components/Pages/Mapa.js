import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import keyMaps from './credentials'

const containerStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  lng: -38.523
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