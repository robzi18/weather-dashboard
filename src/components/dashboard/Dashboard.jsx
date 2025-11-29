import React from 'react'
import './dashboard.css'
import { SearchBar } from '../searchBar/SearchBar.jsx'
import { CurrentPanel } from '../current/CurrentPanel.jsx'
import { FavoriteCities } from '../favoriteCities/FavoriteCities.jsx'
import { HourlyForecast } from '../hourlyForecast/HourlyForecast.jsx'
import { Highlights } from '../highlights/Highlights.jsx'

const Dashboard = () => {
  return (
    <section className="dashboard">
        
      <div className="current-Panel">
        <CurrentPanel />
      </div>
      <div className="highlights">
        <Highlights />
      </div>
      <div className="hourly-Forecast">
        <HourlyForecast />
      </div>
      <div className="favorite-Cities">
        <FavoriteCities />
      </div>
    </section>
    // TODO TMRW
    // MAKE THE  CONTENT FIT IN ONE PAGE
    // MAKE IT RESPONSIVE
    // REMOVE UNNECCERY GAPS COMING FROM GRID CSS
    // MAKE C AND F INTERACTIVE
  )
}

export  {Dashboard}