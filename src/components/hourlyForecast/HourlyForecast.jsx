import React from "react";
import { useState } from "react";
import pic from "../../assets/cloudy.png";
import "./hourlyForecast.css";

const HourlyForecast = ({
  forecast,
  isCel,
  isFar,
  handleCel,
  handleFar,
  showMore,
}) => {
  // get the current time and date
  // filter and slice of all the returned hours

  const now = new Date();
  const currentEpoch = Math.floor(now.getTime() / 1000);
  const allHours =
    forecast?.forecastday?.flatMap((day) => {
      return day?.hour;
    }) || []; //nothing but to make sure it is safe
  // console.log("allhours" , allHours);
  const nextHours = allHours
    ?.filter((h) => h?.time_epoch > currentEpoch)
    .slice(0, 8);
  // console.log(nextTenHours);

  const hourlySummary = nextHours?.map((hourly, index) => {
    const temp_C = Math.round(hourly?.temp_c);
    const temp_F = Math.round(hourly?.temp_f);
    return (
      <div key={index} onClick={showMore}>
        <p>{`${hourly?.time?.split(" ")[1]}`}</p>
        <img src={hourly?.condition?.icon} alt={hourly?.condition?.text} />
        <p>{`${isCel ? temp_C + "°C" : temp_F + "°F"}`}</p>
      </div>
    );
  });

  return (
    <section className="hourly-container">
      <div className="title">
        <h1>Today/Week</h1>
      </div>
      <div className="main-weather-info">
        <div className="left-side">
          <div className="hours-summary">{hourlySummary}</div>
          <div className="next-day-forecast">
            <div className="next-day-wrapper">
              <div>
                <h3>Tomorrow</h3>
                <p>{forecast?.forecastday[1]?.day?.condition?.text}</p>
              </div>
              <h2>{`${
                isCel
                  ? forecast?.forecastday[1]?.day?.avgtemp_c + " °C"
                  : forecast?.forecastday[1]?.day?.avgtemp_f + " °F"
              }`}</h2>
              <img
                src={forecast?.forecastday[1]?.day?.condition?.icon}
                alt={forecast?.forecastday[1]?.day?.condition?.text}
              />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="current-feature">
            <p>Sunrise</p>
            <h1 className="hour">
              {" "}
              {forecast?.forecastday[1]?.astro?.sunrise}
            </h1>
          </div>
          <div className="current-feature">
            <p>Sunset</p>
            <h1 className="hour">{forecast?.forecastday[1]?.astro?.sunset}</h1>
          </div>
          <div className="current-feature">
            <p>Length of day</p>
            <h1 className="length">
              {" "}
              {(forecast?.forecastday[1]?.astro?.sunrise).split(":")[0]}
              <span className="h">h</span> 23
              <span className="m">m</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HourlyForecast };
