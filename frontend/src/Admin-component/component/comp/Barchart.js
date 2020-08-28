import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const data = {
  labels: [
    "AT1",
    "AT2",
    "AT3",
    "AT4",
    "AT5",
    "AT6",
    "TT1",
    "TT2",
    "TT3",
    "TT4",
    "TT5",
    "TT6",
    "TT7",
    "TT8",
    "DT1",
    "DT2",
    "DT3",
    "DT4",
  ],
  datasets: [
    {
      label: ["marks"],
      backgroundColor: [
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
      borderColor: [
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightblue",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "lightgreen",
        "pink",
        "pink",
        "pink",
        "pink",
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
        "red",
      ],
      hoverBorderColor: [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
        "red",
      ],
      data: [
        -20,
        59,
        80,
        81,
        56,
        55,
        -20,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
      ],
    },
  ],
};

export class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={data}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
