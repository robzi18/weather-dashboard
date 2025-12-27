import React from "react";
import "./humidity.css";

function Humidity({ current }) {
  const humidity = current?.humidity;

  let level = "good";
  if (humidity >= 30 && humidity < 60) level = "normal";
  if (humidity >= 60) level = "bad";

  return (
    <div className="humidity-card">
      <div className="humidity-value-row">
        <span className="humidity-percent">{humidity}%</span>
        <span className={`humidity-level humidity-level--${level}`}>
          {level}
        </span>
      </div>

      <div className="humidity-labels">
        <span>good</span>
        <span>normal</span>
        <span>bad</span>
      </div>

      <div className="humidity-scale">
        <div className="humidity-segment humidity-segment--good" />
        <div className="humidity-segment humidity-segment--normal" />
        <div className="humidity-segment humidity-segment--bad" />

        <div className="humidity-thumb" style={{ left: `${humidity}%` }} />
      </div>
    </div>
  );
}
export { Humidity };
