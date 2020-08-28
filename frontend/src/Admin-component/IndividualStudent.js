import React from "react";
import Collapsible from "react-collapsible";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import './dist/react-sidenav.css';
import { Navbar, NavbarBrand } from "reactstrap";
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
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';
import { Button, Modal } from "react-bootstrap";

import Cocubes from "./component/Cocubes";
import Amcat from "./component/Amcat";
import ARI from "./component/ARI";
import ITA from "./component/ITA";
import CurrentJobS from "./component/CurrentJobS";
import JobFitment from "./component/JobFitment";

import TenthMarks from "./component/TenthMarks";
import TwelveMarks from "./component/TwelveMarks";
import BtechMarks from "./component/BtechMarks";
import Branch from "./component/Branch";
import Pass from "./component/Pass";
import Section from "./component/Section";

class IndividualStudent extends React.Component {
  render() {
    return (
      <div className="IndividualStudent">
        <div class="container">
          <br></br>
          <Row>
            <Col md="4">
              <TenthMarks />
            </Col>
            <Col md="4">
              <TwelveMarks />
            </Col>
            <Col md="4">
              <BtechMarks />
            </Col>
          </Row>
          <br></br>
          <Collapsible trigger="More Info">
            <br></br>
            <Row>
              <Col md="4">
                <Branch />
              </Col>
              <Col md="4">
                <Pass />
              </Col>
              <Col md="4">
                <Section />
              </Col>
            </Row>
          </Collapsible>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <JobFitment />
            </Col>
            <Col md="6" className="p-2">
              <CurrentJobS />
            </Col>
          </Row>
        </div>
        <br></br>
        <ARI />
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <Cocubes />
            </Col>
            <Col md="6" className="p-2">
              <Amcat />
            </Col>
          </Row>
        </div>
        <br></br>

        <ITA />

        <br></br>
        <h6>Placements Analysis</h6>
        <Table className="placements" striped bordered responsive>
          <tbody>
            <tr>
              <td md="6">Total Number of Companies:50</td>
              <td md="6">Number of written test cleared:0</td>
            </tr>
            <tr>
              <td md="6">Number of Companies Attended:0</td>
              <td md="6">Number of GD's cleared:0</td>
            </tr>
            <tr>
              <td md="6">Number of Companies Eligible:50</td>
              <td md="6">Number of technical test cleared:0</td>
            </tr>
            <tr>
              <td colspan="2">Number of Offer Letters:0</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h6>Placements Analysis</h6>
        <Table className="placementanalysis" responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Company Logo</th>
              <th>Company Name</th>
              <th>Attendance</th>
              <th>Written Test</th>
              <th>GroupDiscussion</th>
              <th>Technical Test</th>
              <th>Personal Interview</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default IndividualStudent;
