import React from "react";
import Collapsible from "react-collapsible";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
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
import Cocubes from "../user-components/Cocubes";
import Amcat from "../user-components/Amcat";
import ARI from "../user-components/ARI";
import ITA from "../user-components/ITA";
import JobFitment from "../user-components/JobFitment";
import TenthMarks from "./component/TenthMarks";
import TwelveMarks from "./component/TwelveMarks";
import BtechMarks from "./component/BtechMarks";
import Branch from "./component/Branch";
import Pass from "./component/Pass";
import Section from "./component/Section";
import CurrentJob from "../user-components/CurrentJob";
import Placements from "../user-components/Placements";

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
              <JobFitment fitid={this.props.match.params.id}/>
            </Col>
            <Col md="6" className="p-2">
              <CurrentJob jobid={this.props.match.params.id}/>
            </Col>
          </Row>
        </div>
        <br></br>
        <Card>
          <CardTitle>ARI</CardTitle>
          <ARI arii={this.props.match.params.id}/>
        </Card>
        <br></br>
        <div class="container-fluid">
            <Row>
              <Col md="6" className="p-2">
                <Cocubes cid={this.props.match.params.id}/>
              </Col>
              <Col md="6" className="p-2">
                <Amcat aid={this.props.match.params.id} />
              </Col>
            </Row>
        </div>
        <br></br>
        <Card>
          <CardTitle>ITA</CardTitle>
          <ITA aid={this.props.match.params.id}/>
        </Card> 
        <br></br>
        <Card>
          <CardTitle><h4>Placements Analysis</h4></CardTitle>
            <br/>
              <Row>
              <Table striped className="placements" bordered responsive>
              <tbody>
              <tr>
                <td md="6">Total Number of Companies: {this.state.noc}</td>
                <td md="6">Number of written test cleared: {this.state.wtc}</td>
              </tr>
              <tr>
                <td md="6">Number of Companies Attended: {this.state.nca}</td>
                <td md="6">Number of GD's cleared: {this.state.gdc}</td>
              </tr>
              <tr>
                <td md="6">Number of Companies Eligible: {this.state.ce}</td>
                <td md="6">Number of technical test cleared: {this.state.ttc}</td>
              </tr>
              <tr>
                <td colSpan="2">Number of Offer Letters: {this.state.olf}</td>
              </tr>
              </tbody>
        </Table>
            </Row>
            <br></br>
            <br></br>
            <Placements login={this.props.match.params.id}/>
          </Card>
      </div>
    );
  }
}

export default IndividualStudent;
