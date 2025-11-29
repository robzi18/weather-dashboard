import React from 'react'
import './hourlyForecast.css'

const HourlyForecast = () => {
  return (
    <section className='hourly-container'>
      <div className="title">
        <h1>Today/Week</h1>
      </div>
      <div className="main-weather-info">
        <div className="left-side">
          <div className="hours-summary">
            <div>
              <p>1PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>2PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>3PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>4PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>5PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>6PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>
            <div>
              <p>7PM</p>
              <img src="./images/cloudy.jpg" alt="" />
              <p>26°C</p>
            </div>

          </div>
          <div className="next-day-forecast">
            <div className='next-day-wrapper'>
              <div>
                <h2>Tomorrow</h2>
                <p>Thunder storm</p>
              </div>
              <h1>14°C</h1>
              <img src="./images/cloudy.jpg" alt=""/>

            </div>
          </div>
      
        </div>
        <div className="right-side">
          <div className="current-feature">
            <p>Sunrise</p>
            <h1 className="hour">06:45 <span className='am'>AM</span></h1>
          </div>
          <div className="current-feature">
            <p>Sunset</p>
            <h1 className="hour">05:45 <span className='pm'>PM</span></h1>
          </div>
          <div className="current-feature">
            <p>Length of day</p>
            <h1 className="length"> 10
              <span className='h'>h</span> 23
              <span className='m'>m</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export  {HourlyForecast}