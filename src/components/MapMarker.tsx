import React from 'react';
import { useMapEvents } from 'react-leaflet';

interface MarkerProps {
  onMapClick: (event: L.LeafletMouseEvent) => void;
}

const MapMarker: React.FC<MarkerProps> = ({ onMapClick }) => {
  useMapEvents({
    click: onMapClick,
  });

  return null;
};

export default MapMarker;