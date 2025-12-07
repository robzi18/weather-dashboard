import React, { useEffect } from 'react'
import { useState } from 'react';
import {Chart,  Filler } from "chart.js";

import { LineChart} from './LineChart'
Chart.register(Filler)

const DatasetNormalizer = ({forecast,isPerc ,isTemp,isCel}) => {
// get the current time and date 
// filter and slice of all the returned hours
  const now = new Date();
  const currentEpoch = Math.floor(now.getTime()/1000)
  const allHours = forecast?.forecastday?.flatMap((day) => day?.hour) || [] //nothing but to make sure it is safe
  // console.log("all hours" , allHours);
  const nextHours = allHours?.filter(h => h?.time_epoch > currentEpoch).slice(0, 8);
  // console.log(forecast);

  const [chartPrecipData, setChartPrecipData] = useState({
      labels: nextHours?.map(nextH => nextH?.time?.split(" ")[1]),
      // WONDER WHY IT IS NOT WORKING DYNAMICALLY
      datasets: [
        {
          label: "Rainfall",
          data: nextHours?.map(nextH => nextH?.precip_mm), //I wanted to show dynamically but not working
          fill: true,
          // backgroundColor: "rgba(0, 102, 255, 0.4)",
          // borderColor: "#2a6fdb",
          backgroundColor: "rgba(30, 144, 255, 0.8)",
          borderColor: "#2a6fdb",
          borderWidth: 1,
        }
    ]
  })
  const [chartTempDataC, setChartTempDataC] = useState({
      labels: nextHours?.map(nextH => nextH?.time?.split(" ")[1]),
      // WONDER WHY IT IS NOT WORKING DYNAMICALLY
      datasets: [
        {
          label:"Temperature",
          data: nextHours?.map(nextH => nextH?.temp_c), //I wanted to show dynamically but not working
          fill: true,
          backgroundColor: "rgba(255,99,71,0.8)",
          borderColor: "#dbdb2aff",
          borderWidth: 1,
        }
    ]
  })
  const [chartTempDataF, setChartTempDataF] = useState({
      labels: nextHours?.map(nextH => nextH?.time?.split(" ")[1]),
      
      datasets: [
        {
          label: "Temperature",
          data: nextHours?.map(nextH => nextH?.temp_f), //I wanted to show dynamically but not working
          fill: true,
          backgroundColor: "#a97007c2",
          borderColor: "rgba(255,99,71,0.8)",
          borderWidth: 1,
        }
    ]
  })

  return (
    <> 
      <LineChart
          chartPrecipData = {chartPrecipData || { labels: [], datasets: [] }}
          chartTempDataF = {chartTempDataF || { labels: [], datasets: [] }}
          chartTempDataC = {chartTempDataC || { labels: [], datasets: [] }}
          isPerc={isPerc}
          isTemp={isTemp}
      />

    </>

  )
}

export  {DatasetNormalizer}