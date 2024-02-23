const API_KEY = "d5352947f035584d38f7b9acfb85c8b1";

const iconImg=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getData = async (city, units = "metrics") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  
    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country, sunrise, sunset },
      name,
      visibility,
    } = data;



  const {description ,icon}=weather[0];
  console.log(data);
  return {
    description,
    iconURL: iconImg(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    sunrise,
    sunset,
    visibility,
  };
};

export {getData};