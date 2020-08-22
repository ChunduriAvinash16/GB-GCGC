import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2'; 
import 'chartjs-plugin-datalabels';
import Axios from 'axios';
//import { BarChart } from 'recharts';

export class BarChart extends Component {
    constructor(props){
        super(props);
        this.state={
            AT1:0,AT2:0,AT3:0,AT4:0,AT5:0,AT6:0,TT1:0,TT2:0,TT3:0,TT4:0,TT5:0,TT6:0,TT7:0,TT8:0,DT1:0,DT2:0,DT3:0,DT4:0,
            student_id:321710307034,
        }
    };
    componentDidMount(){
        Axios.get("http://localhost/login-backend/ari.php?id="+this.state.student_id)
        .then(response => {
            this.setState({
                AT1:response.data[0]['AT1_score'],
                AT2:response.data[0]['AT2_score'],
                AT3:response.data[0]['AT3_score'],
                AT4:response.data[0]['AT4_score'],
                AT5:response.data[0]['AT5_score'],
                AT6:response.data[0]['AT6_score'],
                TT1:response.data[0]['TT1_percentage'],
                TT2:response.data[0]['TT2_percentage'],
                TT3:response.data[0]['TT3_percentage'],
                TT4:response.data[0]['TT4_percentage'],
                TT5:response.data[0]['TT5_percentage'],
                TT6:response.data[0]['TT6_percentage'],
                TT7:response.data[0]['TT7_percentage'],
                TT8:response.data[0]['TT8_percentage'],
                DT1:response.data[0]['DT1_score'],
                DT2:response.data[0]['DT2_score'],
                DT3:response.data[0]['DT3_score'],
                DT4:response.data[0]['DT4_score'],
            })
            console.log(this.state.AT1)
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <Bar
                data={{
                    labels: ['AT1','AT2','AT3','AT4','AT5','AT6','TT1','TT2','TT3','TT4','TT5','TT6','TT7','TT8','DT1','DT2','DT3','DT4'],
  datasets: [
    {
      label: ['marks'],
      backgroundColor: [
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'pink',
        'pink',
        'pink',
        'pink'
      ],
      borderColor: [
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightblue',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'lightgreen',
        'pink',
        'pink',
        'pink',
        'pink'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'red',
        'red',
        'red',
        'red'
      ],
      hoverBorderColor: [
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'green',
        'red',
        'red',
        'red',
        'red'
      ],
      data: [this.state.AT1,this.state.AT2,this.state.AT3,this.state.AT4,this.state.AT5,this.state.AT6,this.state.TT1,this.state.TT2,this.state.TT3,this.state.TT4,
        this.state.TT5,this.state.TT6,this.state.TT7,this.state.TT8,this.state.DT1,this.state.DT2,this.state.DT3,this.state.DT4], 
      },
    ],
                }}
                options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          max: 100,
                          stepSize: 20  
                        }
                      }]
                    },
                  }}
                  />
            </div>
        )
    }
  }