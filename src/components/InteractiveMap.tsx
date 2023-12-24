import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import MapMarker from "./MapMarker";

interface IInteractiveMap {
  onMapClick: (event: LeafletMouseEvent) => void;
}

const InteractiveMap: React.FC<IInteractiveMap> = ({ onMapClick }) => {
  return (
    <MapContainer
      center={[-34.61315, -58.37723]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker onMapClick={onMapClick} />
    </MapContainer>
  );
};

export default InteractiveMap;