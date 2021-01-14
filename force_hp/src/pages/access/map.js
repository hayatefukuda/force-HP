import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Maping extends Component {
  render() {
    const position = [35.6930823, 139.760481];
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}
