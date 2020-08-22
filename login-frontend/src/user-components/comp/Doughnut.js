import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#4169E1", "#EEEEEE"],
      hoverBackgroundColor: ["#4169E1", "#EEEEEE"],
    },
  ],
};
export class DoughnutExample extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
}
