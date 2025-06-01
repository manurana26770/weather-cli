
# 🌦️ Weather CLI Tool

A simple Node.js command-line application to fetch real-time weather data for any city using the OpenWeatherMap API.

## ⚙️ Features

- Get current temperature, weather description, and wind info
- Fetches data by city name from OpenWeatherMap API
- Caches previous results in a local JSON file
- Built using core Node modules and `node-fetch`

## 🛠 Tech Stack

- Node.js (fs, path, process, http)
- `node-fetch`
- `dotenv`

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manurana26770/weather-cli.git

2. Install dependencies:
   
   npm install

3.Create a .env file:
  OPENWEATHER_API_KEY=your_openweathermap_api_key (inside a string)

Usage
  node app.js <City Name>  
  node app.js Delhi
  node app.js "New York"


