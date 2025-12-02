import React, { useState } from 'react'
import { IoIosStarOutline } from "react-icons/io";
import './currentPanel.css'
import { IoLocationOutline } from "react-icons/io5";

const CurrentPanel = ({date,location,current,forecast,addToFavorite,isFav,isCel,isFar,handleCel,handleFar}) => {
  // console.log(forecast);
  const [isActive,setIsActive] = useState(false)

  return (
    <section className='current-panel-container'>
      <div>
        <div className="top-wrapper">
         <div className='location'>
          <IoLocationOutline />
          <span>{location?.name}</span>
          <IoIosStarOutline  
            onClick={addToFavorite}
            className={`star ${isFav ? "active" : ""}`}
          />
         </div>
        <div className='scale-wrapper'>
          <span className={` scale ${isCel ? "active" : ""}`} onClick={handleCel}> C </span>
          <span className={` scale ${isFar ? "active" : ""}`} onClick={handleFar}> F </span>
        </div>
      </div>
      </div>
      <div className="main-info-wrapper">
        <div className='left-side'>
          <div className="date-wrapper">
            <h1>{date?.weekday}</h1>
            <p>{date?.day} {date?.month}, {date?.year}</p>
          </div>
          <div className="temp-wrapper">
            <h1>{`${ isCel ? current?.temp_c +" °C" : current?.temp_f + " °F"} `}</h1>
            <p>
                {`High ${ isCel ? forecast?.forecastday[0]?.day?.maxtemp_c: forecast?.forecastday[0]?.day?.maxtemp_f }`} 
                {` Low  ${ isCel ? forecast?.forecastday[0]?.day?.mintemp_c: forecast?.forecastday[0]?.day?.mintemp_f }`} 
            </p>
          </div>

         </div>
         <div className='right-side'>
          <div className="condition-img">
            <img src={current?.condition?.icon} alt={current?.condition?.text} />
          </div>
          
          <div className="condition-wrapper">
            <h1>{current?.condition?.text}</h1>
            <p>{`${ isCel ? current?.feelslike_c+" °C" : current?.feelslike_f + " °F"} `}</p>
          </div>
         </div>
      </div>
      <div className="alert-wrapper">
        <p></p> 
      </div>
      

    </section>
  )
}

export {CurrentPanel}