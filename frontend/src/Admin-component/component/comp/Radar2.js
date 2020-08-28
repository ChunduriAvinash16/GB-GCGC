import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "Logical Ability",
    "English Comprehension",
    "Quantitative Ability",
    "Automata",
    "Automata Fix",
    "Domain_1",
    "Domain_2",
  ],
  datasets: [
    {
      label: "AMCAT1",
      backgroundColor: "rgba(30,144,255,0.2)",
      borderColor: "rgba(30,144,255,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: "AMCAT2",
      backgroundColor: "rgba(50,205,50,0.2)",
      borderColor: "rgba(50,205,50,1)",
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "#ff0000",
      pointHoverBackgroundColor: "#ff0000",
      pointHoverBorderColor: "rgba(255,0,0,1)",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};

export class RadarExample2 extends React.Component {
  render() {
    return (
      <div>
        <Radar data={data} responsive striped />
      </div>
    );
  }
}
