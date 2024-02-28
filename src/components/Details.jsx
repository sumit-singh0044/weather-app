import React from "react";
import "./Details.css";

const Details = ({ weather }) => {
  const sunRise = new Date(weather.sunrise * 1000);
  const sunSet = new Date(weather.sunset * 1000);

  const sunriseHour = sunRise.getHours();
  const sunriseMinute = sunRise.getMinutes();

  const sunsetHour = sunSet.getHours();
  const sunsetMinute = sunSet.getMinutes();

  return (
    <div className="sec sec-desc">
      <div className="card">
        <div className="card-content">
          
          <div className="card-icon">
            <i className="fa-solid fa-arrow-down"></i>
            <small>min</small>
          </div>
          <h4>{`${(weather.temp_min - 273).toFixed()}°C`}</h4>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          
          <div className="card-icon">
            <i className="fa-solid fa-arrow-up"></i>
            <small>max</small>
          </div>
          <h4>{`${(weather.temp_max - 273).toFixed()}°C`}</h4>
        </div>
      </div>
      
      <div className="card">
        <div className="card-content">
          
          <div className="card-icon">
            <i className="fa-regular fa-face-smile"></i>
            <small>feels like</small>
          </div>
          <h4>{`${(weather.feels_like - 273).toFixed()}°C`}</h4>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="pressure"></div>
          <div className="card-icon">
            <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
            <small>pressure</small>
          </div>
          <h4>{`${weather.pressure.toFixed()}hPa`}</h4>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
        
          <div className="card-icon">
            <i className="fa-solid fa-droplet"></i>
            <small>humidity</small>
          </div>
          <h4>{`${weather.humidity.toFixed()}%`}</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="card-icon">
            <i className="fa-solid fa-wind"></i>
            <small>wind speed</small>
          </div>
          <h4>{`${weather.speed.toFixed()}m/s`}</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="sun"></div>
          <div className="card-icon">
            <i className="fa-solid fa-sun"></i>
            <small>sun rise</small>
          </div>
          <h4>{`${sunriseHour}:${sunriseMinute}`}</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="sunset"></div>
          <div className="card-icon">
            <i className="fa-solid fa-cloud-sun"></i>
            <small>sun set</small>
          </div>
          <h4>{`${sunsetHour}:${sunsetMinute}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
