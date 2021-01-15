import Leaflet from 'leaflet'
import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import Mapping from './map';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class MapView extends Component {
  render() {
    return (
            <Mapping />
    );
  }
}

export default MapView;