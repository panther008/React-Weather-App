import React, { useEffect, useState } from "react";
import { WeatherController } from "../Controller/WeatherController";
import DailyWeather from "./Weather/DailyWeather";
import { WeeklyWeather } from "./Weather/WeeklyWeather";

import "./Weather/dailyweather.css";

import Slider from "react-slick";
import { TemperatureConvertor } from "./TemperatureConvertor";

const Home = () => {
  const [timer, setTimer] = useState(null);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  //// Slick slider Settings/////
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    handleSearch("rawalpindi"); //// Hard Coded location for first load
  }, []);

  const handleSearch = async (e) => {
    //// api will be hit when user stop typing
    const val = e?.target?.value?.toLowerCase() ?? e;
    clearTimeout(timer);
    if (val) {
      const newTimer = setTimeout(async () => {
        let data = await WeatherController.searchWeather(val);
        if (data?.zip) {
          data = await WeatherController.searchWeatherByLatLon(
            data?.lat,
            data?.lon
          );
          if (data) {
            searchWeekly_DailyWeather(data);
          }
        } else if (data) {
          searchWeekly_DailyWeather(data);
        }
      }, 500);
      setTimer(newTimer);
    }
  };
  const searchWeekly_DailyWeather = async (data) => {
    setDailyWeather({ data: data });
    data = await WeatherController.SearchWeatherWeekly(
      data?.lat ?? data?.coord?.lat,
      data?.lon ?? data?.coord?.lon
    );
    if (data) setWeeklyWeather({ data: data });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1>The Weather App</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div class="form-group">
            <label className="d-none">Search</label>
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {dailyWeather.data !== undefined ? (
        <div className="row">
          <WeatherHeading data={dailyWeather.data} isToday={true} />
          <DailyWeather data={dailyWeather.data} />
        </div>
      ) : null}
      {weeklyWeather.data !== undefined ? (
        <div className="row">
          <div className="col-md-6">
            <WeatherHeading data={dailyWeather.data} isToday={false} />
            <Slider {...settings}>
              {weeklyWeather.data.daily.map((item, i) => {
                return <WeeklyWeather data={item} />;
              })}
            </Slider>
          </div>
          <div className="col-md-6">
            <div className="row">
              <TemperatureConvertor />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;

export const WeatherHeading = ({ data, isToday }) => {
  return (
    <div className="col-md-12">
      <h2>
        {isToday ? "Today's" : "Weekly"} forecast for {data.name} ,{" "}
        {data.sys.country}. Weather
      </h2>
      <h3 className="cardsubtitle">As of {new Date().toLocaleTimeString()}</h3>
    </div>
  );
};
