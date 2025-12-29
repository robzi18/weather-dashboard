import React from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import "./favoriteCities.css";

const FavoriteCities = ({
  favoriteWeather,
  isCel,
  isFar,
  handleCel,
  handleFar,
  forecast,
  showMoreCityWeather,
  resetFAV,
  addToFavorite,
}) => {
  const favCities = favoriteWeather?.map((city, index) => {
    const temp_C = Math.round(city?.data?.current?.temp_c);
    const temp_F = Math.round(city?.data?.current?.temp_f);
    const temp_C_MIN_FC = Math.round(
      city?.data?.forecast?.forecastday[0]?.day?.mintemp_c
    );
    const temp_C_Max_FC = Math.round(
      city?.data?.forecast?.forecastday[0]?.day?.maxtemp_c
    );
    const temp_F_MIN_FC = Math.round(
      city?.data?.forecast?.forecastday[0]?.day?.mintemp_f
    );
    const temp_F_Max_FC = Math.round(
      city?.data?.forecast?.forecastday[0]?.day?.maxtemp_f
    );

    return (
      <div className="place-card" key={index} onClick={showMoreCityWeather}>
        <div>
          <TiDelete onClick={addToFavorite} />
        </div>
        <div className="temp">
          {/* <h1>{`${ isCel ? city?.current?.temp_c +" °C" : city?.current?.temp_f + " °F"} `}</h1> */}
          <h1>{`${isCel ? temp_C + " °C" : temp_F + " °F"} `}</h1>
          <h1>{city?.data?.location?.name}</h1>
        </div>
        <div className="highLow">
          <p>
            {`H${isCel ? temp_C_Max_FC + "°C" : temp_F_Max_FC + "°F"} `}
            {`L${isCel ? temp_C_MIN_FC + "°C" : temp_F_MIN_FC + "°F"} `}
          </p>
        </div>
        <div className="condition-img">
          <img
            src={city?.data?.current?.condition?.icon}
            alt={city?.data?.current?.condition?.text}
          />
        </div>
      </div>
    );
  });
  return (
    <section className="favorite-container">
      <div className="title">
        <h1>Today favorite</h1>
        <div className="reset-icon">
          <RiResetLeftFill onClick={resetFAV} />
        </div>
      </div>

      <div className="cities-card-wrapper">{favCities}</div>
    </section>
  );
};

export { FavoriteCities };
