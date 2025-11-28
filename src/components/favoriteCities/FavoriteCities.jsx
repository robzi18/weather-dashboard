import React from 'react'
import './favoriteCities.css'

const FavoriteCities = () => {
  return (
    <section className='favorite-container'>
      <div className="title">
        <h1>Today favorite</h1>
      </div>
      <div className="cities-card-wrapper">
          <div className="place-card">
            <div className="temp">
              <h1>26°C</h1>
              <h1>USA</h1>
            </div>
            <div className="highLow">
              <p><span>H</span>26°C <span>L</span>10°C</p>
            </div>
            <div className="condition-img">
              <img src="./images/cloudy.jpg" alt="" />
            </div>

          </div>
          <div className="place-card">
            <div className="temp">
              <h1>26°C</h1>
              <h1>Paris</h1>
            </div>
            <div className="highLow">
              <p><span>H</span>26°C <span>L</span>10°C</p>
            </div>
            <div className="condition-img">
              <img src="./images/cloudy.jpg" alt="" />
            </div>

          </div>
          <div className="place-card">
            <div className="temp">
              <h1>26°C</h1>
              <h1>Amsterdam</h1>
            </div>
            <div className="highLow">
              <p><span>H</span>26°C <span>L</span>10°C</p>
            </div>
            <div className="condition-img">
              <img src="./images/cloudy.jpg" alt="" />
            </div>

          </div>
          <div className="place-card">
            <div className="temp">
              <h1>26°C</h1>
              <h1>Ethiopia</h1>
            </div>
            <div className="highLow">
              <p><span>H</span>26°C <span>L</span>10°C</p>
            </div>
            <div className="condition-img">
              <img src="./images/cloudy.jpg" alt="" />
            </div>

          </div>

      </div>
    </section>
  )
}

export {FavoriteCities}