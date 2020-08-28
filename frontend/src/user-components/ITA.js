import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import  Axios from 'axios';

class ARI extends Component {
    constructor(props){
        super(props);
        this.state={
                SST1:0,SST2:0,
                TT1:0,TT2:0,TT3:0,TT4:0,TT5:0,
                CRT1:0,CRT2:0,CRT3:0,
                student_id:"321710306006",
        }

    };
    componentDidMount(){
        Axios.get("http://localhost:80/login-backend/ita.php?id="+this.props.aid)
        .then(response => {
            console.log(response)
            this.setState({
                SST1:response.data[3]['att'],
                SST2:response.data[4]['att'],
                TT1:response.data[5]['att'],
                TT2:response.data[6]['att'],
                TT3:response.data[7]['att'],
                TT4:response.data[8]['att'],
                TT5:response.data[9]['att'],
                CRT1:response.data[0]['att'],
                CRT2:response.data[1]['att'],
                CRT3:response.data[2]['att']
            })  
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render(){
    return (
        <div>
        <Bar
          data={{
                    labels: ["SST1","SST2","TT1","TT2","TT3","TT4","TT5","CRT1","CRT2","CRT3",],
                    datasets: [
                    {
                        label: "Attendance",
                        backgroundColor: "lightblue",
                        borderColor: "lightblue",
                        borderWidth: 1,
                        hoverBackgroundColor: "lightblue",
                        hoverBorderColor: "lightblue",
                        data: [this.state.SST1,this.state.SST2,this.state.TT1,this.state.TT2,this.state.TT3,this.state.TT4,
                        this.state.TT5,this.state.CRT1,this.state.CRT2,this.state.CRT3],
                    },
                    {
                        label: "Average Attendance",
                        backgroundColor: "pink",
                        borderColor: "pink",
                        borderWidth: 1,
                        hoverBackgroundColor: "pink",
                        hoverBorderColor: "pink",
                        data: [40, 65, 59, 80, 81, 56, 55],
                    },
                    ],
                }
            }
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20,
                  },
                },
              ],
            },
          }}
        />
      </div>

        )
    }
}
export default ARI;
