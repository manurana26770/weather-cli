const { getWeather } = require('./api');
const { readCache, writeCache } = require('./cache');
const city = process.argv[2];

if (!city) {
  console.log("Please provide a city name. Example: node app.js London");
  process.exit(1);
}

(async () => {
  const cache = readCache();
  const now = Date.now();

  if (cache[city] && now - cache[city].timestamp < 10 * 60 * 1000) {
    console.log("Using cached data:\n", cache[city].data);
  } else {
    const data = await getWeather(city);
    console.log("Fetched from API:\n", data);
    cache[city] = { data, timestamp: now };
    writeCache(cache);
  }
})();
