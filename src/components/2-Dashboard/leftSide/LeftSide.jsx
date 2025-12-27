import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./leftSide.css";
import pic from "../../../assets/cloudy.png";

const LeftSide = ({
  location,
  date,
  forecast,
  isCel,
  isFar,
  handleCel,
  handleFar,
}) => {
  const [isToday, setIsToday] = useState(false);
  const allDays = forecast?.forecastday; //array for the forecasted days
  //   MAPPING ALL THE DAYS DATA IN THE FORECAST
  const days = allDays?.map((day, index) => {
    const dayNumber = day?.date.split("-")[2];
    const isToday = dayNumber === date.day;
    const temp_C = Math.round(day?.day?.avgtemp_c);
    const temp_F = Math.round(day?.day?.avgtemp_f);
    return (
      <div className="day" key={index}>
        <p className={` date ${isToday ? "today" : ""}`}>{dayNumber}</p>
        <img src={day?.day?.condition?.icon} alt="day?day?.condition?.text" />
        <p>{`${isCel ? temp_C + "°C" : temp_F + "°F"}`}</p>
      </div>
    );
  });
  return (
    <section className="leftSide-container">
      <div className="current-location">
        <div>
          <IoLocationOutline className="icon" />
          <h1>{location?.name}</h1>
        </div>
        <div>
          <p>
            {date?.weekday} {date?.day} {date?.year}
          </p>
        </div>
      </div>
      <div className="days-container">
        {/* TODO
            BE SURE ABOUT THE DATA COMING
            AND GET THE CSS FROM THE HOURLY.JSX
            I HAVE THE DAY ITERATE THEM FROM AND GET DATE WITH SPLIT()[2]
            */}
        <div className="days-wrapper">{days}</div>
      </div>
      <div className="radar-container">
        <div>
          <h1>Weather radar card of today</h1>
        </div>
        <div className="picture-wrapper">
          {/* <img src="" alt="Radar" /> */}
        </div>
      </div>
    </section>
  );
};

export { LeftSide };
