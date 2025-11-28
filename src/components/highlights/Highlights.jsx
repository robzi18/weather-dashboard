import React from 'react'
import './highlights.css'

const Highlights = () => {
  return (
    <section className='highlight-container'>
      <div className="title">
        <h1>Today Highlight</h1>
      </div>
      <div className="card-wrapper">
          <div className="highlight-card">
            <p>Chance of Rain</p>
          </div>
          <div className="highlight-card">
            <p>UV Index</p>
          </div>
          <div className="highlight-card">
            <p>Wind Status</p>
          </div>
          <div className="highlight-card">
            <p>Humidity</p>
          </div>
      </div>
    </section>
  )
}

export  {Highlights}