import React from "react";
import "./aeroMetrics.css";

function Wind({ current }) {
  const wind = current?.wind_kph;

  let level = "good";
  if (wind >= 20 && wind < 38) level = "normal";
  if (wind >= 39) level = "bad";

  return (
    <div className="aeroMetric-card">
      <div className="aeroMetric-value-row">
        <span className="aeroMetric-percent">{wind}kph</span>
        <span className={`aeroMetric-level aeroMetric-level--${level}`}>
          {level}
        </span>
      </div>

      <div className="aeroMetric-labels">
        <span>good</span>
        <span>normal</span>
        <span>bad</span>
      </div>

      <div className="aeroMetric-scale">
        <div className="aeroMetric-segment aeroMetric-segment--good" />
        <div className="aeroMetric-segment aeroMetric-segment--normal" />
        <div className="aeroMetric-segment aeroMetric-segment--bad" />

        <div className="aeroMetric-thumb" style={{ left: `${wind}%` }} />
      </div>
    </div>
  );
}
export { Wind };
