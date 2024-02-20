import React, { useState } from 'react'
import './weather.css'
import searchIcon from '../Assets/search.png';
import clearIcon from '../Assets/clear.png';
import cloudIcon from '../Assets/cloud.png';
import drizzleIcon from '../Assets/drizzle.png';
import rainIcon from '../Assets/rain.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/wind.png';
import humidityIcon from '../Assets/humidity.png';

function Weather() {

  const apiKey = "5e13516d0c020a942e0b2e4f059e43e0";

  const [wicon, setwicon] = useState(cloudIcon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temperature[0].innerHTML = data.main.temp + "℃";
    location[0].innerHTML = data.name;

    const weatherIconCode = data.weather[0].icon;

    if (weatherIconCode === "01d" || weatherIconCode === "01n") {
      setwicon(clearIcon);
    } else if (weatherIconCode === "02d" || weatherIconCode === "02n") {
      setwicon(cloudIcon);
    } else if (weatherIconCode === "03d" || weatherIconCode === "03n") {
      setwicon(drizzleIcon);
    } else if (weatherIconCode === "04d" || weatherIconCode === "04n") {
      setwicon(drizzleIcon);
    } else if (weatherIconCode === "09d" || weatherIconCode === "09n") {
      setwicon(rainIcon);
    } else if (weatherIconCode === "10d" || weatherIconCode === "10n") {
      setwicon(rainIcon);
    } else if (weatherIconCode === "13d" || weatherIconCode === "13n") {
      setwicon(snowIcon);
    } else {
      setwicon(clearIcon);
    }
  };

  return (
    <div className='containe'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" onClick={() => { search() }}>
          <img src={searchIcon} alt="" srcset="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={wicon} alt="" srcset="" />
      </div>
      <div className="weather-temp">24℃</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={windIcon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather