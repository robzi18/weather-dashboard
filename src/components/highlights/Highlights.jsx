import React from 'react'
import "./highlights.css"
// import Lottie from "lottie-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Highlights = ({current}) => {

  return (
    <section className='highlight-container'>
      <div className="title">
        <h1>Today Highlight</h1>
      </div>
      <div className="card-wrapper">
          <div className="highlight-card">
            <p>Chance of Rain</p>
            <div className="gif-wrapper">
              <DotLottieReact
                src="/images/animations/rainy.json"
                loop
                autoplay
                // renderConfig={{ autoResize: false }}
                className='animations'
              />
               
            </div>
            <p>{current?.temp_c}</p>
          </div>
          <div className="highlight-card">
            <p>UV Index</p>
            <div className="gif-wrapper">
                <DotLottieReact
                  src="/images/animations/uvindex.json"
                  loop
                  autoplay
                  className='animations'
                />
            </div>
            <p>{current?.is_day}</p>
          </div>
          <div className="highlight-card">
            <p>Wind Status</p>
            <div className="gif-wrapper">
                <DotLottieReact
                  src="/images/animations/windy.json"
                  loop
                  autoplay 
                  className='animations'
                />
            </div>
            <p>{current?.wind_mph}</p>
          </div>
          <div className="highlight-card">
            <p>Humidity</p>
            <div className="gif-wrapper">
                <DotLottieReact
                  src="/images/animations/humidity.json"
                  loop
                  autoplay 
                  className='animations'
                />
            </div>
            <p>{current?.humidity}</p>
          </div>
      </div>
    </section>
  )
}

export  {Highlights}