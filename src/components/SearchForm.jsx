import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inputa"
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={handleInputChange}
        />
        <button className="Pesquisa" type="submit">
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
