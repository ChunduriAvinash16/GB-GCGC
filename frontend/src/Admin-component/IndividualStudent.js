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
import Axios from 'axios';
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
  constructor(props){
    super(props);
    this.state={
              ce:0,
              noc:0,
              nca:0,
              olf:0,
              wtc:0,
              ttc:0,
              gdc:0,
    }
  }
  componentDidMount(){
    Axios.get("http://localhost:80/login-backend/placementdetails.php?id="+this.props.match.params.id)
    .then(response=>{
      this.setState({
        ce:response.data.count,
        wtc:response.data.count1,
        nca:response.data.count2,
        gdc:response.data.count3,
        ttc:response.data.count4,
        olf:response.data.count5,
        noc:response.data.count6
      })
    })
    .catch(err=>console.log(err));
  }

  render() {
    return (
      <div className="IndividualStudent">
      <div class="container-fluid">
        <br></br>
        {console.log(this.props.match.params.id)}
        <Row>
          <Col md="4">
            <TenthMarks tenth={this.props.match.params.id}/>
          </Col>
          <Col md="4">
            <TwelveMarks twe={this.props.match.params.id}/>
          </Col>
          <Col md="4">
            <BtechMarks btech={this.props.match.params.id}/>
          </Col>
        </Row>
        <br></br>
        <Collapsible trigger="More Info">
          <br></br>
          <Row>
            <Col md="4">
              <Branch brn={this.props.match.params.id}/>
            </Col>
            <Col md="4">
              <Pass pas={this.props.match.params.id}/>
            </Col>
            <Col md="4">
              <Section sec={this.props.match.params.id}/>
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
              <Cocubes cid={this.props.match.params.id}/>
            </Col>
            <Col md="6" className="p-2">
              <Amcat aid={this.props.match.params.id}/>
            </Col>
          </Row>
        </div>
        <br></br>

        <ITA aid={this.props.match.params.id} />

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