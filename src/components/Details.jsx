import React from "react";
import "./Details.css";

const Details = ({ weather }) => {
  const items = [
    {
      id: 1,
      icon: <i className="fa-solid fa-arrow-down"></i>,
      title: "min",
      data: (weather.temp_min - 273).toFixed(),
      units: "°C",
    },
    {
      id: 2,
      icon: <i className="fa-solid fa-arrow-up"></i>,
      title: "max",
      data: (weather.temp_max - 273).toFixed(),
      units: "°C",
    },
    {
      id: 3,
      icon: <i className="fa-regular fa-face-smile"></i>,
      title: "feels like",
      data: (weather.feels_like - 273).toFixed(),
      units: "°C",
    },
    {
      id: 4,
      icon: <i className="fa-solid fa-down-left-and-up-right-to-center"></i>,
      title: "pressure",
      data: weather.pressure.toFixed(),
      units: "hPa",
    },
    {
      id: 5,
      icon: <i className="fa-solid fa-droplet"></i>,
      title: "humidity",
      data: weather.humidity.toFixed(),
      units: "%",
    },
    {
      id: 6,
      icon: <i className="fa-solid fa-wind"></i>,
      title: "wind speed",
      data: weather.speed.toFixed(),
      units: "m/s",
    },
  ];

  return (
    <div className="sec sec-desc">
      {items.map(({ id, icon, title, data, units }) => (
        <div key={id} className="card">
          <div className="card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data}${units}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Details;
