import React from "react";
import {
  getByTimestamp,
  getTimestampWeekDay
} from "../../helpers/timestampUtils";

export const WeeklyWeather = ({ data }) => {
  const iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <div className="dailyweather">
      <React.Fragment>
        <div className="maincard">
          <h4>{getTimestampWeekDay(data?.dt)}</h4>
          <span className="weather-main">{getByTimestamp(data.dt)}</span>
          <img className="weather-icon" src={iconurl} alt="" />
          <span className="weather-description">
            {data?.weather[0]?.description}
          </span>
        </div>

        <div className="weatherdetails">
          <div className="section1">
            <table>
              <tr>
                <td>
                  <h4>Current Temperature</h4>
                </td>
                <td>
                  <span>
                    {Math.floor(data?.temp.day - 273.15)}
                    <sup> ºC</sup>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>High/Low</h4>
                </td>
                <td>
                  <span className="">
                    {Math.floor(data?.temp.max - 273.15)}
                    <sup> ºC</sup>/ {Math.round(data?.temp.min - 273.15)}{" "}
                    <sup>ºC</sup>{" "}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
