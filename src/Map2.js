import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css';


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 55.7503,
    lng: 37.61925,
    zoom: 14
  };

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
      <MapContainer zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>Геопозиция</Popup>
        </Marker>
      </MapContainer>
    );
  }
};

export default MapComponent;
