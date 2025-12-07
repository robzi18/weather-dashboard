import React from 'react'
import './favoriteCities.css'

const FavoriteCities = ({favoriteWeather , isCel,isFar,handleCel,handleFar,forecast,showMoreCityWeather}) => {
  
  const favCities = favoriteWeather.map((city,index)=>{
    return(
        <div className="place-card" key={index} onClick={showMoreCityWeather}>
          <div className="temp">
            <h1>{`${ isCel ? city?.current?.temp_c +" °C" : city?.current?.temp_f + " °F"} `}</h1>
            <h1>{city?.location?.name}</h1>
          </div>
          <div className="highLow">
            <p>
              {`H${ isCel ? city?.forecast?.forecastday[0]?.day?.maxtemp_c  + "°C" : city?.forecast?.forecastday[0]?.day?.maxtemp_f + "°F"} `}
              {`L${ isCel ? city?.forecast?.forecastday[0]?.day?.mintemp_c  + "°C" : city?.forecast?.forecastday[0]?.day?.mintemp_f + "°F"} `}
            </p>
          </div>
          <div className="condition-img">
            <img src={city?.current?.condition?.icon} alt={city?.current?.condition?.text} />
          </div>
        </div>
    )

  }) 
  return (
    <section className='favorite-container'>
      <div className="title">
        <h1>Today favorite</h1>
      </div>
      <div className="cities-card-wrapper">
          {favCities}
      </div>
    </section>
  )
}

export {FavoriteCities}