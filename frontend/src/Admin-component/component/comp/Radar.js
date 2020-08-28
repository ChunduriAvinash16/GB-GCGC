import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "Aptitude",
    "English",
    "Quantitative",
    "Analytical",
    "Domain",
    "Computer Fundamentals",
    "Coding",
    "WET",
    "Personality",
  ],
  datasets: [
    {
      label: "COCUBES1",
      backgroundColor: "rgba(30,144,255,0.2)",
      borderColor: "rgba(30,144,255,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40, 50, 80],
    },
    {
      label: "COCUBES2",
      backgroundColor: "rgba(50,205,50,0.2)",
      borderColor: "rgba(50,205,50,1)",
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "#ff0000",
      pointHoverBackgroundColor: "#ff0000",
      pointHoverBorderColor: "rgba(255,0,0,1)",
      data: [28, 48, 40, 19, 86, 27, 100, 30, 50],
    },
  ],
};

export class RadarExample extends React.Component {
  render() {
    return (
      <div>
        <Radar data={data} />
      </div>
    );
  }
}
