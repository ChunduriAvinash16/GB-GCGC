import React, { Component } from "react";
import "../App.css";
import {
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Alert,
  Table,
  CardBody,
} from "reactstrap";
import Collapsible from "react-collapsible";
import Axios from 'axios';
//import ReactSpeedometer from "react-d3-speedometer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import './login.css';
import JobFitment from "./JobFitment";
import CurrentJob from "./CurrentJob";
import ARI from "./ARI";
import Cocubes from "./Cocubes";
import Amcat from "./Amcat";
import ITA from "./ITA";
import Personaldetails from "./Personaldetails";
import Placements from "./Placements";
import Leaderboard from "./Leaderboard";
import { timers } from "jquery";


class Dashboard extends Component {
        constructor(props){
          super(props);
          this.state={
              student_id:"",
              SSC:0,
              inter:0,
              mname:"",
              images:"",
              gpa:0,
              fname:"",
              pass_category:"",
              branch:"",
              ce:0,
              noc:0,
              nca:0,
              olf:0,
              wtc:0,
              ttc:0,
              gdc:0,
          }
      }
      /*change=async (e)=>{
          e.preventDefault();
          login_id:this.state.student_id
          const obj={
          }
          const url="http://localhost:80/login-backend/studentdetails.php"
          Axios.post(url,obj)
          .then(res=>{
              this.setState({
                  SSC: 95
              })
          })
          .catch(err=>console.log(err));
      }*/

      componentDidMount(){
        Axios.get("http://localhost:80/login-backend/studentdetails.php?id="+this.props.login)
          .then(response => {
              this.setState({
                  SSC: response.data[0]['SSC_percent'],
                  inter:response.data[0]['inter_percent'],
                  gpa:response.data[0]['b_tech_gpa'],
                  branch:response.data[0]['Branch'],
                  pass_category:response.data[0]['pass_category']
              })  
          })
          .catch(function(err){
              console.log(err);
          })
          Axios.get("http://localhost:80/login-backend/names.php?id="+this.props.login)
          .then(response=>{
            console.log(response.data)
            this.setState({
              fname:response.data['first_name'],
              lname:response.data['last_name'],
              mname:response.data['middle_name']
            })
            })
            Axios.get("http://localhost:80/login-backend/placementdetails.php?id="+this.props.login)
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
              console.log(response.data);
            })
            Axios.get("http://localhost:80/login-backend/images.php?id="+this.props.login)
            .then(response => {
              console.log(response.data);
              this.setState({
                images:response.data
              })
            })
      }
  render(){
  return (
        <div className='container-fluid'>
           <br></br>
           <Card>
            <Row style={{textAlign:"initial"}}>
                <Col md="4"style={{"padding":"10px"}}>
                  <img src={this.state.images} style={{"height":"100px","width":"100px","border-radius": "50%"}}/>
                    Welcome {this.state.fname} {this.state.mname} {this.state.lname} 
                </Col>
                <Col>
                  <h1 style={{"font-size": "xx-large","text-align": "end","padding": "35px","font-family": "Brush Script MT"}}>Have a Nice Day</h1>
                </Col>
              </Row>
           </Card>
            
              <br/>
            <Card>
              <Collapsible trigger="PersonalDetails" triggerStyle={{"textAlign":"end"}} style={{"textAlign":"center"}}>
                <hr/>
                  <Personaldetails login={this.props.login}/>
              </Collapsible>
            </Card>
            <br/>
            <Card>
              <Collapsible trigger="Academic Details">
              <hr></hr>
              <CardBody>
                <br/>
                  <Row style={{"paddind-left":"25px"}}>
                    <Col md="4">
                      <Card color="success" className="Rounded p-3">
                        <CardTitle align="left">{this.state.SSC}</CardTitle>
                        <CardSubtitle align="left">Tenth Percentage</CardSubtitle>
                      </Card>
                    </Col>
                  <Col md="4">
                    <Card color="warning" className="Rounded p-3">
                      <CardTitle align="left">{this.state.inter}</CardTitle>
                      <CardSubtitle align="left">Inter Percentage</CardSubtitle>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card color="danger" className="Rounded p-3">
                      <CardTitle align="left">{(this.state.gpa*9.5).toFixed(2)}</CardTitle>
                      <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
                    </Card>
                  </Col>
                </Row><br></br>
              <Collapsible trigger="More Info"><br></br>
                  <Row>
                    <Col md="4">
                      <Alert color="success" className="Rounded p-3">
                        <CardTitle align="left">{this.state.branch.slice(0,3)}</CardTitle>
                        <CardSubtitle align="left">Branch</CardSubtitle>
                      </Alert>
                    </Col>
                    <Col md="4">
                      <Alert color="warning" className="Rounded p-3">
                        <CardTitle align="left">{this.state.pass_category}</CardTitle>
                        <CardSubtitle align="left">Pass Category</CardSubtitle>
                      </Alert>
                    </Col>
                    <Col md="4">
                      <Alert color="danger" className="Rounded p-3">
                        <CardTitle align="left">{this.state.branch.slice(3,5)}</CardTitle>
                        <CardSubtitle align="left">Section</CardSubtitle>
                      </Alert>
                    </Col>
                  </Row>
                </Collapsible>
                </CardBody>
            </Collapsible>
            </Card>
          &nbsp;
          <Card>
              <Collapsible trigger="Leader Board">
                <hr/>
                <CardBody>
                    <br/>
                     <Leaderboard login={this.props.login}/>
                 </CardBody>
              </Collapsible>
          </Card>
          <br/>
          <Card>
            <Collapsible trigger="Job Suitability">
              <hr></hr>
              <br></br>
                <Row>
                  <Col md="6" className="pr-2 pt-2">
                    <JobFitment fitid={this.props.login}/>
                  </Col>
                  <Col md="6" className="p-2">
                    <CurrentJob jobid={this.props.login}/>
                  </Col>
                </Row>
            </Collapsible>
          </Card>
          <br></br>
          <Card>
            <Collapsible trigger="ARI">
              <hr></hr>
                <br/>
                  <ARI arii={this.props.login}/>
            </Collapsible>
          </Card>
          <br/>
          <Card>
            <Collapsible trigger="ARE">
              <hr></hr>
              <br/>
              <Col  className="p-2">
                <Cocubes cid={this.props.login}/>
              </Col>
              <Col className="p-2">
                <Amcat aid={this.props.login}/>
              </Col>
            </Collapsible>
          </Card>
          <br></br>
          <Card>
            <Collapsible trigger="ITA">
              <hr></hr>
              <ITA aid={this.props.login}/>
            </Collapsible>
          </Card>
          <br></br>
          <Card>
              <Collapsible trigger="Placement Analysis">
                <br/>
                <hr></hr>
              <Row>
              <Table striped className="placements" bordered responsive>
              <tbody>
              <tr>
                <td md="6">Total Number of Companies: {this.state.noc}</td>
                <td md="6">Number of written test cleared: {this.state.wtc}</td>
              </tr>
              <tr>
                <td md="6">Number of Companies Eligible: {this.state.ce}</td>
                <td md="6">Number of GD's cleared: {this.state.gdc}</td>
              </tr>
              <tr>
              <td md="6">Number of Companies Attended: {this.state.nca}</td>
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
              <h6>Placements Analysis of {this.props.login}</h6>
              <Placements login={this.props.login}/>
            </Collapsible>
          </Card>
          <br/>
      </div>
  );
}
}

export default Dashboard;
