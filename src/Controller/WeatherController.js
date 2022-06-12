import WeatherService from "../services/weather.service";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const searchWeather = (value) => {
  if (value?.includes(",")) value = `/geo/1.0/zip?zip=${value}&APPID=${apiKey}`;
  else value = `/data/2.5/weather?q=${value}&APPID=${apiKey}`;
  return WeatherService.searchWeather(value)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return null;
    });
};
const SearchWeatherWeekly = (latitude, longitude) => {
  let apiString = `/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,hourly,minutely,current&APPID=${apiKey}`;
  return WeatherService.searchWeather(apiString)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return null;
    });
};
const searchWeatherByLatLon = (latitude, longitude) => {
  let apiString = `/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}`;
  return WeatherService.searchWeather(apiString)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return null;
    });
};
export const WeatherController = {
  searchWeather,
  searchWeatherByLatLon,
  SearchWeatherWeekly
};
