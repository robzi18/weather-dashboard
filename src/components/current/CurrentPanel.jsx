import React, { useState } from 'react'
import './currentPanel.css'
import { IoLocationOutline } from "react-icons/io5";

const CurrentPanel = () => {
  const [isCel,setIsCel] = useState(false)
  const [isFar,setIsFar] = useState(false)
  const [isActive,setIsActive] = useState(false)
  function handleCel(){
    setIsFar(false)
    setIsCel(!isCel)
  }
  function handleFar(){
    setIsCel(false)
    setIsFar(!isFar)
  }
  return (
    <section className='current-panel-container'>
      <div>
        <div className="top-wrapper">
         <div className='location'>
          <IoLocationOutline />
          <span>Ethiopia</span>
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
            <h1>Monday</h1>
            <p>24 Dec, 2025</p>
          </div>
          <div className="temp-wrapper">
            <h1>26°C</h1>
            <p>High 27 Low 10 </p>
          </div>

         </div>
         <div className='right-side'>
          <div className="condition-img">
            <img src="./images/cloudy.jpg" alt="cloudy" />
          </div>
          
          <div className="condition-wrapper">
            <h1>Cloudy</h1>
            <p>Feels Like 28</p>
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