import React, { Component } from "react";
import Axios from 'axios';
import {
  Card,
  CardSubtitle,
  CardText,

} from "reactstrap";
import ReactSpeedometer from "react-d3-speedometer";
class JobFitment extends Component {
        constructor(props){
          super(props);
          this.state={
                  jfc:[],
                  result:0,
                  student_id:"321710306006",
          }

      };
      componentDidMount(){
          Axios.get("http://localhost/login-backend/job_fit_curve.php?id="+this.state.student_id)
          .then(response => {
              console.log(response)
              this.setState({
              result:response.data
              })  
          })
          .catch(function(err){
          console.log(err);
          }) 
      }
  render(){
  return (
    <div className="JobFitment">
      <Card className="Rounded p-3">
        <CardSubtitle align="left">Job Fitment</CardSubtitle>
        <hr></hr>
        <br></br>
        <ReactSpeedometer responsive 
         maxValue={100}
         value={this.state.result}
         segments={6}
        />
        <CardText align='center'>
          Description : You are {(this.state.result)} % suitable to the industry with your current
          performance in all the tests conducted by T&P
        </CardText>
      </Card>
    </div>
  );
}
}
export default JobFitment;
