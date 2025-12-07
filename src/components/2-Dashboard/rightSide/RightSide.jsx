import React, { useState } from 'react'
import { WiHumidity } from "react-icons/wi";
import { RiCloudWindyLine } from "react-icons/ri";
import { DatasetNormalizer } from '../Chart/DatasetNormalizer'
import { TbUvIndex } from "react-icons/tb";
import { Humidity } from './cards/Humidity';
import "./rightSide.css"


const RightSide = ({forecast,current,isCel,isTemp,isPerc,handlePerc,handleTemp}) => {

  return (
    <section className="rightSide-container">
        <div className="chart-container">
            <div className="button-wrapper">
                <button className="btn" onClick={handlePerc}>Percipitation</button>
                <button className="btn" onClick={handleTemp}>Temperature</button>
            </div>
            <div className="chart">
                <DatasetNormalizer
                    forecast={forecast}
                    isPerc = {isPerc}
                    isTemp = {isTemp}
                    isCel = {isCel}
                />
            </div>
        </div>
        <div className="bottom-info">
            <div>
                <p>More details of Today</p>
            </div>
            <div className="conditions-wrapper">
                <div className="humidity-container card">
                    <div className='card-name'>
                        <p>Humidity</p>
                        <WiHumidity className='icon'/>
                    </div>
                    <div>
                        <Humidity current = {current}/>
                    </div>

                </div>
                <div className="windy-container card">
                    <div className='card-name'>
                        <p>Windy</p>
                        <RiCloudWindyLine className='icon'/>
                    </div>
                    <div>
                        
                    </div>

                </div>
                <div className="UV-container card">
                    <div className='card-name'>
                        <p>Uv</p>
                        <TbUvIndex className='icon'/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export  {RightSide}