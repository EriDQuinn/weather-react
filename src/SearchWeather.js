import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setSearch] = useState("");

  const [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState("");
  let [description, setDesc] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  //--------------------------
  function showResponse(response) {
    setLoaded(true);

    setTemperature(response.data.main.temp);
    setDesc(response.data.weather["0"].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    console.log(response.data.weather["0"].icon);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather["0"].icon}@2x.png`
    );
  }
  //---------------------------------
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "e36512df4df508262b473b23a2ee8768";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
  }
  //---------------------------------
  function updateSearch(event) {
    setSearch(event.target.value);
  }

  //--------------------------------  //<City name={city}></City>
  if (loaded) {
    return (
      <div className="SearchWeather">
        <form onSubmit={handleSearch}>
          <input type="search" placeholder="Search" onChange={updateSearch} />
          <button type="Submit">Search</button>
        </form>
        <div className="Weather">
          <h3>{city}</h3>
          <div className="row">
            <div className="col">
              <p>Sunday 11, 18:20</p>
              <p>Temperature: {Math.round(temperature)} °C</p>
              <p>Description: {description} </p>
            </div>
            <div className="col">
              <h4 className="icon">
                <img src={icon} alt={description}></img>
              </h4>
            </div>
            <div className="col">
              <p>Humidity: {humidity} %</p>
              <p>Wind: {wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="SearchWeather">
        <form onSubmit={handleSearch}>
          <input type="search" placeholder="Search" onChange={updateSearch} />
          <button type="Submit">Search</button>
          <button type="Submit">Current</button>
        </form>
      </div>
    );
  }
}
