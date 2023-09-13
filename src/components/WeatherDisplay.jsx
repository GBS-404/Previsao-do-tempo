import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="bg"></div>
      <div className="blob"></div>
      <h2>Previsão de tempo para {weatherData.name}</h2>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Umidade: {weatherData.main.humidity}%</p>
      <p>Condição: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
