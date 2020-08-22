import React, { Component } from "react";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Alert,
  Table,
} from "reactstrap";
import Collapsible from "react-collapsible";
import Axios from 'axios';
//import ReactSpeedometer from "react-d3-speedometer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";

import Navbar1 from "./Navbar1";
import studentdetails from "./studentdetails";
import JobFitment from "./JobFitment";
import CurrentJob from "./CurrentJob";
import ARI from "./ARI";
import Cocubes from "./Cocubes";
import Amcat from "./Amcat";
import ITA from "./ITA";
import Footer from "./Footer";
import { removeChildInstance } from "@syncfusion/ej2-base";

class Dashboard extends Component {
        constructor(props){
          super(props);
          this.state={
              student_id:"",
              SSC:0,
              inter:0,
              gpa:0,
              branch:"",
              pass_category:""
          }
      }
      /*change=async (e)=>{
          e.preventDefault();
          const obj={
              login_id:this.state.student_id
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
      }
  render(){
  return (
    <div>
        <studentdetails />
        <div className="container" style={{marginRight:'1rem'}}>
          <br></br>
          <Row>
            <Col md="4">
              <Card color="success" className="Rounded p-3">
                <CardTitle align="left">{this.state.SSC}{this.props.login}</CardTitle>
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
                <CardTitle align="left">{this.state.gpa*9.15}</CardTitle>
                <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Collapsible trigger="More Info">
            <br></br>
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
        </div>

        <br></br>
        <div className='container' style={{marginRight:'1rem'}}>
          <Row>
            <Col md="6" className="pr-2 pt-2">
              <JobFitment />
            </Col>
          
            <Col md="6" className="p-2">
              <CurrentJob />
            </Col>
          </Row>
          </div>
        <br></br>

        <ARI />
        <div className='container' style={{marginRight:'0.5rem'}}>
        <br></br>
        
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
      <div className='container' style={{marginRight:'1rem'}}>
        <br></br>
        <Table striped className="placements" bordered responsive>
          
            <tr>
              <th colspan="2">Placements Analysis</th>
            </tr>
         
         
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
         
        </Table>
        <br></br>
        <br></br>
        <h6>Placements Analysis</h6>
        <Table className="placements" responsive striped>
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
        <br></br>
        <br></br>
        </div>
      </div>
  );
}
}

export default Dashboard;
