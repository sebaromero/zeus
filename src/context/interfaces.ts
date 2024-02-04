import { ReactNode } from "react";

export interface IContext {
  children?: ReactNode;
}

export interface IWeather {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    visibility: number;
    weather: [{ description: string }];
    wind_speed: number;
  };
}

export interface IGetWeatherProps {
  lat: string;
  lon: string;
}

export interface ILocation {
  address: {
    city: string;
    country: string;
    state: string;
    town: string;
  };
}

export interface ContextType {
  weather: IWeather;
  getWeather: (lat: string, lon: string) => void;
  location: ILocation;
  getLocation: (lat: string, lon: string) => void;
}
