// components/LineChart.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the pieces of Chart.js we use
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ chartTempDataF,chartPrecipData,chartTempDataC,isCel,isTemp,isPerc }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: isPerc ? "Rainfall over time" : "Temperature over time",
        font: {
          size: 20,
        },
        color: "white", // color of the title text
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white", // legend text color
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          color: "#abc0ebff",
          font: {
            size: 16,//size 
          },
        },
        ticks: {
          color: "#676B73",
        },
      },
      y: {
        title: {
          display: true,
          text: isPerc ? "Rainfall (mm)" : "Temperature",
          color: "#abc0ebff",
          font: {
            size: 18,
          },
        },
        ticks: {
          color: "#676B73",
        },
      },
    },
  };

const y = isCel ? chartTempDataC : chartTempDataF;
  return (
    <div className="chart-container" style={{ height: 500, width:420} }>
      <Line
        data={isPerc ? chartPrecipData : y}
        options={options}
      />
    
    </div>
  );
}

export { LineChart };
