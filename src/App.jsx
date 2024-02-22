import React, { useEffect, useState } from "react";
import "./App.css";
import image1 from "./images/sunny.jpg";
import image2 from "./images/d-snowy.jpg";
import image3 from "./images/d-cloudy.jpg";
import image4 from "./images/cloudsss.jpg";
import image5 from "./images/d-rainy.jpg";
import image6 from "./images/thunder.jpg";
import image7 from "./images/hazees.jpg";

import Details from "./components/Details";
import { getData } from "./WeatherService";
import Footer from "./components/Footer";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [cityName, setCity] = useState("search city");
  const [cities, setCities] = useState("begusarai");
  const [bgi, setBgi] = useState(image1);

  const handleChange = (e) => {
    setCity(e.target.value);
    // console.log(cityName);
  };
  const handleClick = (e) => {
    setCities(cityName);
    setCity("search city");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) setCities(cityName);
    setCity("search city");

    //  console.log(e);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getData(cities);
      // console.log(data);
      setWeather(data);

      const des = data.description.toLowerCase();
      const temp = data.temp - 273;
      // if (temp <= 30) setBgi(image2);
      // else setBgi(image1);

      if (temp < 13) setBgi(image2);
      else if (temp > 33) setBgi(image1);
      else if (des.includes("clear sky")) setBgi(image1);
      else if (des.includes("few clouds") || des.includes("scattered clouds"))
        setBgi(image3);
      else if (des.includes("broken clouds") || des.includes("overcast clouds"))
        setBgi(image4);
      else if (des.includes("rain") || des.includes("drizzle")) setBgi(image5);
      else if (des.includes("thunder")) setBgi(image6);
      else if (des.includes("haze")) setBgi(image7);
      else if (des.includes("snow")) setBgi(image2);
    };

    fetchdata();
  }, [cities]);
  const getCountryName = (countryCode) => {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
  };

  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${bgi})` }}>
        <div className="overlay">
          {weather && (
            <div className="container">
              <div className="sec sec-input">
                <input
                  type="text"
                  placeholder={cityName}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                />
                <button className="button" onClick={handleClick}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div className="sec1 sec-temp">
                <div className="icon">
                  <h3>{`${weather.name}, ${getCountryName(
                    weather.country
                  )}`}</h3>
                  <img src={weather.iconURL} alt="img" />
                  <h3>{weather.description}</h3>
                </div>

                <div className="temperature">
                  <h1>{`${(weather.temp - 273).toFixed()}°C`}</h1>
                </div>
              </div>

              <Details weather={weather} />
              <Footer/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;