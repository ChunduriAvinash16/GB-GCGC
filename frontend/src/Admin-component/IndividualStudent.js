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
import RecordsListPlaceAnalysis from "./component/RecordsListPlaceAnalysis";

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
              Records:[]
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
    Axios.get("http://localhost/login-backend/placements.php?id="+this.props.match.params.id)
    .then(responses => {
        this.setState({Records: responses.data});
        console.log(this.state.Records);
    })
    .catch(function (error){
        console.log(error);
    })
  }
  RecordsList(){
    return this.state.Records.map(function (object,i){
        return <RecordsListPlaceAnalysis obj={object} key={i} login={321710303054}/>;
    });
}

  render() {
    return (
      <div className="IndividualStudent">
      <div class="container">
      <Collapsible trigger="Academic Details">
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
        </Collapsible>
      </div>
        <br></br>
        <div class="container">
          <Collapsible trigger="Job Fitment Curve">
          <Row>
            <Col md="6" className="p-2">
              <JobFitment jf={this.props.match.params.id} />
            </Col>
            <Col md="6" className="p-2">
              <CurrentJobS cs={this.props.match.params.id}/>
            </Col>
          </Row>
          </Collapsible>
        </div>
        <br></br>
        <div className="container">
          <Collapsible trigger="ARI">
          <ARI ari={this.props.match.params.id}/>
          </Collapsible>
        </div>
        <br></br>
        <div class="container">
          <Collapsible trigger="ARE">
          <Row>
            <Col md="6" className="p-2">
            <Cocubes cid={this.props.match.params.id}/>
            </Col>
            <Col md="6" className="p-2">
            <Amcat aid={this.props.match.params.id}/>
            </Col>
          </Row>
          </Collapsible>
        </div>
        <br></br>
        <div className="container">
            <Collapsible trigger="TAR">
            <ITA aid={this.props.match.params.id}/>
            </Collapsible>
        </div>
        
        <br></br>
        <div className="container">
          <Collapsible trigger="Placement Analysis">
          <Table className="placements" striped bordered responsive>
            <tbody>
              <tr>
                <td md="6">Total Number of Companies: {this.state.noc}</td>
                <td md="6">Number of written test cleared:{this.state.wtc}</td>
                        </tr>
                        <tr>
                <td md="6">Number of Companies Attended:{this.state.ce}</td>
                <td md="6">Number of GD's cleared:{this.state.gdc}</td>
                        </tr>
                        <tr>
                <td md="6">Number of Companies Eligible:{this.state.nca}</td>
                <td md="6">Number of technical test cleared:{this.state.ttc}</td>
              </tr>
              <tr>
                <td colspan="2">Number of Offer Letters:{this.state.olf}</td>
              </tr>
            </tbody>
          </Table>
          <br></br>
          <h6>Placements Analysis</h6>
          <Table className="placementanalysis" responsive>
            <thead>
              <tr>
                <th>Company Logo</th>
                <th>Company Name</th>
                <th>Attendance</th>
                <th>Written Test</th>
                <th>GroupDiscussion</th>
                <th>Technical Test</th>
                <th>Personal Interview</th>
              </tr>
            </thead>
            <tbody>
              {this.RecordsList()}
            </tbody>
          </Table>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default IndividualStudent;