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

class JobFitment extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Job Fitment</CardSubtitle>
          <hr></hr>
          <br></br>

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
