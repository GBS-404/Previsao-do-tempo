import React, { useState } from "react";
import "/src/App.css";
import axios from "axios";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "11b60786834ecc37a657fa78a705a63b";

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Cidade não encontrada");
      setWeatherData(null);
    }
  };
  return (
    <div className="App">
      <h1>Aplicativo de previsão do tempo!</h1>
      <SearchForm onSearch={fetchWeatherData} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
