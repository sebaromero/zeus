import { useState } from "react";
import WeatherContext from "./WeatherContext";
import { IContext, IWeather, ILocation } from "./interfaces";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const WeatherProvider = ({ children }: IContext) => {
  const [weather, setWeather] = useState<IWeather[]>();
  const [location, setLocation] = useState<ILocation[]>();

  const getWeather = async (lat: string, lng: string) => {
    try {
      const request = await fetch(
        `${apiUrl}data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
      );
      const response = await request.json();
      setWeather(response);
    } catch {
      console.error("error");
    }
  };

  const getLocation = async (lat: string, lng: string) => {
    try {
      const request = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const response = await request.json();
      setLocation(response);
    } catch {
      console.error("error");
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, getWeather, location, getLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
