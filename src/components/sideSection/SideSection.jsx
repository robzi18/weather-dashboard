import React from "react";
import "./sideSection.css";
const SideSection = ({ resetFAV, showMore }) => {
  return (
    <section className="sideSection-container">
      <div className="button-wrapper">
        <button onClick={resetFAV} className="btn">
          Reset favorites
        </button>
        <button className="btn" onClick={showMore}>
          Hourly Forecast
        </button>
      </div>
    </section>
  );
};

export { SideSection };
