import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';


const data = {
  labels: ['CSE', 'ECE', 'EEE', 'Mech', 'Civil'],
  datasets: [
    {
      label: 'percentage',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56]
    }
  ]
  
};
class Donutchart extends Component{
  render() {
    return (
      <div>
        <h2>2021</h2>
        <HorizontalBar data={data} />
      </div>
      );
    }
}
export default Donutchart;

