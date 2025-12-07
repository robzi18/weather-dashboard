import React from 'react'
import { RightSide } from '../rightSide/RightSide.jsx'
import {LeftSide} from "../leftSide/LeftSide.jsx"
import "./main.css"

const Main = ({location,forecast,current,isCel,isFar,handleCel,handleFar,isPerc,isTemp,handlePerc,handleTemp}) => {
// function to normalise a date
  let localtime = location?.localtime
  if (!localtime) return null;
  // TO NORMALISE THE DATE FROM THE API
  const dateObj = new Date(localtime.replace(" ", "T"));
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).formatToParts(dateObj);

  const weekday = parts.find(p => p.type === "weekday").value;
  const month   = parts.find(p => p.type === "month").value;
  const day     = parts.find(p => p.type === "day").value;
  const year    = parts.find(p => p.type === "year").value;
  
  const date = {
    weekday:weekday,
    month:month,
    day:day,
    year:year
  }

  return (
    <section className='main-container'>
        <LeftSide 
            location = {location}
            date = {date}
            forecast={forecast}
            handleCel = {handleCel}
            handleFar = {handleFar}
            isCel= {isCel}
            isFar = {isFar} 
        />
        <RightSide 
            date = {date}
            forecast= {forecast}
            current = {current}
            handleCel = {handleCel}
            handleFar = {handleFar}
            isCel= {isCel}
            isFar = {isFar}
            isPerc = {isPerc}
            isTemp = {isTemp}
            handleTemp = {handleTemp}
            handlePerc = {handlePerc}

        
        />
    </section>
  )
}

export  {Main}