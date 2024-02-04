import { useContext, useEffect, useState } from "react";
import L from 'leaflet';
import InteractiveMap from "./components/InteractiveMap";
import WeatherContext from "./context/WeatherContext";
import { ContextType } from "./context/interfaces";

function App() {
  const { weather, getWeather, location, getLocation } = useContext(
    WeatherContext,
  ) as ContextType;

  const [coords, setCoords] = useState<L.LatLng | null>(
    new L.LatLng(-34.579, -58.4775),
  );

  const handleMapClick = (event: L.LeafletMouseEvent) => {
    setCoords(event.latlng);
  };

  useEffect(() => {
    if (coords !== null) {
      getWeather(String(coords?.lat), String(coords?.lng));
      getLocation(String(coords?.lat), String(coords?.lng));
    }
  }, [coords]);

  console.log("weather", weather);
  console.log("location", location);

  return <InteractiveMap onMapClick={handleMapClick} />
}

export default App
