import React from "react";
import { useState } from "react";
import "./dashboard.css";
import { SearchBar } from "../searchBar/SearchBar.jsx";
import { CurrentPanel } from "../current/CurrentPanel.jsx";
import { FavoriteCities } from "../favoriteCities/FavoriteCities.jsx";
import { HourlyForecast } from "../hourlyForecast/HourlyForecast.jsx";
import { Highlights } from "../highlights/Highlights.jsx";

const Dashboard = ({
  location,
  forecast,
  current,
  addToFavorite,
  isFav,
  favoriteWeather,
  isCel,
  isFar,
  handleCel,
  handleFar,
  showMore,
  showMoreCityWeather,
}) => {
  // const [isExtraInfo,setIsExtraInfo] = useState(false)
  // function handleFurtherInfo(){
  //   setIsExtraInfo(!isExtraInfo)
  //   TODO
  //   TRIGGERS THE SECOND DASHBOARD
  // }
  // function to normalise a date
  let localtime = location?.localtime;
  if (!localtime) return null;
  // TO NORMALISE THE DATE FROM THE API
  const dateObj = new Date(localtime.replace(" ", "T"));
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).formatToParts(dateObj);

  const weekday = parts.find((p) => p.type === "weekday").value;
  const month = parts.find((p) => p.type === "month").value;
  const day = parts.find((p) => p.type === "day").value;
  const year = parts.find((p) => p.type === "year").value;

  const date = {
    weekday: weekday,
    month: month,
    day: day,
    year: year,
  };

  return (
    <section className="dashboard">
      <div className="current-Panel">
        <CurrentPanel
          location={location}
          current={current}
          date={date}
          addToFavorite={addToFavorite}
          isFav={isFav}
          handleCel={handleCel}
          handleFar={handleFar}
          isCel={isCel}
          isFar={isFar}
          forecast={forecast}
        />
      </div>

      <div className="highlights">
        <Highlights current={current} showMore={showMore} />
      </div>

      <div className="hourly-Forecast">
        <HourlyForecast
          forecast={forecast}
          handleCel={handleCel}
          handleFar={handleFar}
          isCel={isCel}
          isFar={isFar}
          showMore={showMore}
          // handleFurtherInfo = {handleFurtherInfo}
        />
      </div>

      <div className="favorite-Cities">
        <FavoriteCities
          favoriteWeather={favoriteWeather}
          handleCel={handleCel}
          handleFar={handleFar}
          isCel={isCel}
          isFar={isFar}
          showMoreCityWeather={showMoreCityWeather}
        />
      </div>
    </section>
  );
};

export { Dashboard };
