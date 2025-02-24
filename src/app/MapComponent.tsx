"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [55.857671413317064, 9.851414821036256];

const MapComponent = () => {
  return (
    <MapContainer 
      center={position} 
      zoom={10} 
      className="w-full h-full rounded-2xl"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=j6h8gi3X9cNNp1wDLdsa4zrGbJXdiEIMV5QwuSQfpO5J3MzoyYqSjMXvJqp55WOD"
        attribution='&copy; <a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank"><b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
