import React,{Component} from 'react';
import {Radar} from 'react-chartjs-2';
import Axios from 'axios';

export class RadarExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Aptitude:0, English:0, Quantitative:0, Analytical:0, Domain:0, ComputerFundamentals:0, Coding:0,WET:0,Personality:0,
            student_id:321710306006,
        }
    };
    componentDidMount(){
        Axios.get("http://localhost/login-backend/are_cocubes.php?id="+this.state.student_id)
        .then(response => {
            this.setState({
                Aptitude:response.data[0]['Overall_Aptitude'],
                English:response.data[0]['English'],
                Quantitative:response.data[0]['Quantitative'],
                Analytical:response.data[0]['Analytical'],
                Domain:response.data[0]['Domain'],
                ComputerFundamentals:response.data[0]['Computer_Fundamentals'],
                Coding:response.data[0]['Coding'],
                WET:response.data[0]['WET'],
                Personality:response.data[0]['Personality'],
            })
            console.log(this.state.Overall_Aptitude)
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render() {
        return (
          <div>
            <Radar 
            data = {{
                labels: ['Aptitude', 'English', 'Quantitative', 'Analytical', 'Domain', 'Computer Fundamentals', 
                'Coding','WET','Personality'],
                datasets: [
                  {
                    label: 'COCUBES1',
                    backgroundColor: 'rgba(30,144,255,0.2)',
                    borderColor: 'rgba(30,144,255,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [this.state.Aptitude,this.state.English,this.state.Quantitative,this.state.Analytical,this.state.Domain,
                        this.state.ComputerFundamentals,this.state.Coding,this.state.WET,this.state.Personality],
                  },
                  {
                    label: 'COCUBES2',
                    backgroundColor: 'rgba(50,205,50,0.2)',
                    borderColor: 'rgba(50,205,50,1)',
                    pointBackgroundColor: 'rgba(255,0,0,1)',
                    pointBorderColor: '#ff0000',
                    pointHoverBackgroundColor: '#ff0000',
                    pointHoverBorderColor: 'rgba(255,0,0,1)',
                    data: [0, 0, 0, 0, 0, 0, 0,0,0],
                  },
                ],
              }}
              />

          </div>
        )
      }
    }
