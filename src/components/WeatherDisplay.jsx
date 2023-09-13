import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <h2>Previsão de tempo para {weatherData.name}</h2>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Umidade: {weatherData.main.humidity}%</p>
      <p>Condição: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
