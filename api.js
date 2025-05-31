require('dotenv').config();

const getWeather = async (city) => {
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    console.log("Using API Key:", API_KEY); // debug
    const res = await fetch(url);
    console.log("🔗 URL:", url);  // debug
    if (!res.ok) throw new Error("City not found");
    
    const data = await res.json();
    return {
      city: data.name,
      temp: data.main.temp + '°C',
      condition: data.weather[0].description,
      wind: data.wind.speed + ' m/s',
    };
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
};

module.exports = { getWeather };
