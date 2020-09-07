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


class JobFitment extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Job Fitment</CardSubtitle>
          <hr></hr>
          <br></br>
          <ReactSpeedometer responsive 
         maxValue={100}
         value={85}
         segments={6}
        />
          <CardText>
            Description : You are 75 % suitable to the industry with your
            current performance in all the tests conducted by T&P
          </CardText>
        </Card>
      </div>
    );
  }
}

export default JobFitment;
