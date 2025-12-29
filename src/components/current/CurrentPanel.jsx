import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import "./currentPanel.css";
import { IoLocationOutline } from "react-icons/io5";

const CurrentPanel = ({
  date,
  location,
  current,
  forecast,
  addToFavorite,
  alert,
  isFav,
  isCel,
  isFar,
  handleCel,
  handleFar,
}) => {
  // console.log(forecast);
  const [isActive, setIsActive] = useState(false);
  const temp_C = Math.round(current?.temp_c);
  const temp_F = Math.round(current?.temp_f);
  const temp_C_MIN_FC = Math.round(forecast?.forecastday[0]?.day?.mintemp_c);
  const temp_C_Max_FC = Math.round(forecast?.forecastday[0]?.day?.maxtemp_c);
  const temp_F_MIN_FC = Math.round(forecast?.forecastday[0]?.day?.mintemp_f);
  const temp_F_Max_FC = Math.round(forecast?.forecastday[0]?.day?.maxtemp_f);
  return (
    <section className="current-panel-container">
      <div>
        <div className="top-wrapper">
          <div className="location">
            <IoLocationOutline />
            <span>{location?.name}</span>
            <IoIosStarOutline
              onClick={addToFavorite}
              className={`star ${isFav ? "active" : ""}`}
            />
          </div>
          <div className="scale-wrapper">
            <span
              className={` scale ${isCel ? "active" : ""}`}
              onClick={handleCel}
            >
              {" "}
              C{" "}
            </span>
            <span
              className={` scale ${isFar ? "active" : ""}`}
              onClick={handleFar}
            >
              {" "}
              F{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="main-info-wrapper">
        <div className="left-side">
          <div className="date-wrapper">
            <h1>{date?.weekday}</h1>
            <p>
              {date?.day} {date?.month}, {date?.year}
            </p>
          </div>
          <div className="temp-wrapper">
            {/* <h1>{`${ isCel ? current?.temp_c +" °C" : current?.temp_f + " °F"} `}</h1> */}
            <h1>{`${isCel ? temp_C + " °C" : temp_F + " °F"} `}</h1>
            <p>
              {/* {`High ${ isCel ? forecast?.forecastday[0]?.day?.maxtemp_c: forecast?.forecastday[0]?.day?.maxtemp_f }`}  */}
              {`Hign ${
                isCel ? temp_C_Max_FC + " °C " : temp_F_Max_FC + " °F "
              }`}
              {/* {"   "} */}
              {`Low ${isCel ? temp_C_MIN_FC + " °C " : temp_F_MIN_FC + " °F "}`}
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="condition-img">
            <img
              src={current?.condition?.icon}
              alt={current?.condition?.text}
              hh
            />
          </div>

          <div className="condition-wrapper">
            <h1>{current?.condition?.text}</h1>
          </div>
        </div>
      </div>
      {alert && (
        <div className="alert-wrapper">
          <p></p>
        </div>
      )}
    </section>
  );
};

export { CurrentPanel };
