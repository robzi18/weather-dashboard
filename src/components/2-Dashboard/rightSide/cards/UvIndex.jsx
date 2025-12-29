import React from "react";
import "./aeroMetrics.css";

function UvIndex({ current }) {
  const uv = current?.uv;

  let level = "good";
  if (uv >= 3 && uv < 6) level = "normal";
  if (uv >= 6) level = "bad";
  return (
    <div className="aeroMetric-card">
      <div className="aeroMetric-value-row">
        <span className="aeroMetric-percent">{uv}</span>
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

        <div className="aeroMetric-thumb" style={{ left: `${uv}` }} />
      </div>
    </div>
  );
}
export { UvIndex };
