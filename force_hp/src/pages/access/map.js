import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



export default class Mapping extends Component {
  render() {
    const position = [35.6930823, 139.7613345];
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: '350px',margin:'5%'}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              フォース株式会社 <br />〒101-0054<br /> 千代田区神田錦町三丁目18番地 寿ビル7階
            </Popup>
          </Marker>
        </MapContainer>
    )
  }
}
