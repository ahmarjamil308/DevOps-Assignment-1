import React, { useEffect } from 'react';
import './App.css';
import './MediaQuery.css';
import './Icon.png';
import { startTime, GetWeather } from './App.js';

const WeatherApp = () => {
  useEffect(() => {
    startTime();
    GetWeather(DefaultPlace);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <header>
        <p id="App_Name">Weather<span>Forecast</span></p>
        <img src="./Icon.png" alt="App-icon" className="App_Icon" />
      </header>
      <form onSubmit={handleSubmit}>
        <div className="Search_Field">
          <input type="text" id="Search_Place" name="location" placeholder="Enter Place Name" />
          <p id="ErrorMsg"></p>
        </div>
        <button id="SearchButton">Search</button>
      </form>

      <div className="Weather_Container">
        <div className="CurrentWeather_Container">
          <div className="CurrentWeather">
            <div className="DateTime_Container">
              <p id="Date">Date</p>
              <p id="Time">Time</p>
            </div>

            <h3 id="Place_Name">Place Name</h3>
            <div className="Weather_Details">
              <div className="Weather_Item" id="WeatherConditionBox">
                <h5>Condition <i className="fa-solid fa-cloud"></i></h5>
                <p id="Condition"></p>
                <div id="ConditionIcon"></div>
              </div>

              <div className="Weather_Item">
                <h5>Temperature <i className="fa-solid fa-temperature-full"></i></h5>
                <p><span id="Temperature"></span>&deg;C</p>
              </div>

              <div className="Weather_Item">
                <h5>Humidity <i className="fa-solid fa-fire-flame-simple"></i></h5>
                <p><span id="Humidity"></span>&percnt;</p>
              </div>

              <div className="Weather_Item">
                <h5>Wind Speed <i className="fa-solid fa-wind"></i></h5>
                <p><span id="WindSpeed"></span> Km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="WeatherForecast_Container">
          <div className="WeatherForeCast">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="ForeCastItem" key={index}>
                <h5 id={`Day${index + 1}`}></h5>
                <div className="ForeCastItem-Details">
                  <div id={`Day${index + 1}ConditionBox`} className="ConditionBox"></div>
                  <p>Temperature<span id={`Day${index + 1}Temperature`}></span></p>
                  <p>Humidity<span id={`Day${index + 1}Humidity`}></span></p>
                  <p>Wind Speed<span id={`Day${index + 1}Wind`}></span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherApp;