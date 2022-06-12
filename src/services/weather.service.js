import axios from "axios";

const API_URL = process.env.REACT_APP_WEATHER_API_URL;

const searchWeather = (apiString) => {
  return axios.get(API_URL + apiString).then((response) => {
    return response.data;
  });
};

const WeatherService = {
  searchWeather
};
export default WeatherService;
