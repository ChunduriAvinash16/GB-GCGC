import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Alert,
  Collapse,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import ReactSpeedometer from "react-d3-speedometer";

import Axios from 'axios';
class JobFitment extends React.Component {
  constructor(props){
    super(props);
    this.state={
            jfc:[],
            result:0,
            student_id:"",
    }

};
componentDidMount(){
  console.log(this.props.jf)
    Axios.get("http://localhost/login-backend/job_fit_curve.php?id="+this.props.jf)
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
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Job Fitment</CardSubtitle>
          <hr></hr>
          <br></br>
          <ReactSpeedometer responsive 
         maxValue={100}
         value={this.state.result}
         segments={6}
        />
          <CardText>
            Description : You are {this.state.result} % suitable to the industry with your
            current performance in all the tests conducted by T&P
          </CardText>
        </Card>
      </div>
    );
  }
}

export default JobFitment;
