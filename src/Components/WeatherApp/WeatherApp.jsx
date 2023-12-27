import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

const WeatherApp = () => {

  let API_key = 'dd94f859a0e52d6e4767fddf735f04a7';

  const [weatherIcon, SetweatherIcon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    // console.log(element[0].value);
    if (element[0]==='') return 0;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_key}`;

    let response = await fetch(URL);  //fetch the reponse data from the URL
    let data = await response.json(); //converts response into json
    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp)+"°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') SetweatherIcon(clear_icon);
    else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') SetweatherIcon(cloud_icon);
    else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') SetweatherIcon(drizzle_icon);
    else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') SetweatherIcon(drizzle_icon);
    else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') SetweatherIcon(rain_icon);
    else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') SetweatherIcon(rain_icon);
    else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') SetweatherIcon(snow_icon);
    else SetweatherIcon(clear_icon);



  }



  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Enter city name' />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} alt="" />
      </div>
      <div className="weather-temp">24 c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
          <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;