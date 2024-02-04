import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherProvider from './context/WeatherProvider.tsx'
import App from './App.tsx'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
)
