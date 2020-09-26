import React, { Component } from "react";
import {
  Card,
  CardSubtitle,
} from "reactstrap";
import {Radar} from 'react-chartjs-2';

import Axios from 'axios';
class Cocubes extends Component {
  constructor(props){
    super();
    this.state={
      id:0, Remarks:"", Aptitude:0, English:0, Quantitative:0, Analytical:0, Domain:0, ComputerFundamentals:0, Coding:0,WET:0,Personality:0,
        student_id:321710306006,
    }
};
      componentDidMount(){
          Axios.get("http://localhost/login-backend/are_cocubes.php?id="+this.props.cid)
          .then(response => {
              this.setState({
                  id:response.data[0]['Assessment_ID'],
                  Aptitude:response.data[0]['Overall_Aptitude'],
                  English:response.data[0]['English'],
                  Quantitative:response.data[0]['Quantitative'],
                  Analytical:response.data[0]['Analytical'],
                  Domain:response.data[0]['Domain'],
                  ComputerFundamentals:response.data[0]['Computer_Fundamentals'],
                  Coding:response.data[0]['Coding'],
                  WET:response.data[0]['WET'],
                  Personality:response.data[0]['Personality'],
                  Remarks:response.data[0]["Remarks"]
              })
              console.log(this.state.Personality)
          })
          .catch(function(err){
              console.log(err);
          })
      }


  render(){
    if (this.state.id==0){
      return(  <div>
        </div>);
    }
    else{
  return (
    <div className="Cocubes">
      <Card className="Rounded p-3">
        <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
        <hr></hr>
        <Radar 
            data = {{
                labels: ['Aptitude', 'English', 'Quantitative', 'Analytical', 'Domain', 'Computer Fundamentals', 
                'Coding','WET'],
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
                        this.state.ComputerFundamentals,this.state.Coding,this.state.WET],
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
      </Card>
    </div>
  );
}
  }
}
export default Cocubes;
