import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FilesUploadComponent from "./FilesUploadComponent"; //import React from 'react';
import Axios from "axios";
import "../App.css";
import {
  Card,
  Row,
  Col,

} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
class Personaldetails extends Component {
  constructor(props){
          super(props);
          this.state={
              login:"",
              RollNo:"",
              Campus:"Bengaluru",
              College:"GITAM University",
              Batch:"",
              Degree:"UG",
              Program:"",
              Branch:"",
              Semester:"UG",
              Section:"",
              First_Name:"",
              Middle_Name:"",
              Last_Name:"",
              DOB:"",
              Gender:"",
              Blood_Group:"",
              FatherName:"",
              MotherName:"",
              Reservation_Category:""
          }
      }

      componentDidMount(props){
          Axios.get("http://localhost:80/login-backend/personaldetail.php?id="+this.props.login)
          .then(response => {
              this.setState({
                  RollNo:response.data['user_id'],
                  Batch:response.data['YOP'],
                  Degree:response.data[''],
                  Program:response.data['Program'],
                  Branch:response.data['Branch'],
                  Semester:response.data[''],
                  Section:response.data['section'],
                  First_Name:response.data['first_name'],
                  Middle_Name:response.data['middle_name'],
                  Last_Name:response.data['last_name'],
                  DOB:response.data['DOB'],
                  Gender:response.data['gender'],
                  Blood_Group:response.data['blood_group'],
                  FatherName:response.data['father_name'],
                  MotherName:response.data['mother_name'],
                  Reservation_Category:response.data['reservation_on_category']
              })
              console.log(this.state);  
          })
          .catch(function(err){
              console.log(err);
          })
      }

  render() {
    return (
      <div className="container-fluid">
        <h1 align="center">Personal Details</h1>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        {console.log(this.props.login)}
        <Form>
          <Row>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="RollNo">
                <Form.Label>
                  <h6>Roll No</h6>
                </Form.Label>
                <Form.Control type="text" name="id" value={this.state.RollNo}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Campus">
                <Form.Label>
                  <h6>Campus</h6>
                </Form.Label>
                <Form.Control type="text" name="Campus" value={this.state.Campus} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="College">
                <Form.Label>
                  <h6>College</h6>
                </Form.Label>
                <Form.Control type="text" name="College" value={this.state.College} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Batch">
                <Form.Label>
                  <h6>Batch</h6>
                </Form.Label>
                <Form.Control type="text"  name="batch" value={this.state.Batch} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Degree">
                <Form.Label>
                  <h6>Degree</h6>
                </Form.Label>
                <Form.Control type="text"  name="Degree" value={this.state.Degree}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Program">
                <Form.Label>
                  <h6>Program</h6>
                </Form.Label>
                <Form.Control type="text"  name="Program" value={this.state.Program}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Branch">
                <Form.Label>
                  <h6>Branch</h6>
                </Form.Label>
                <Form.Control type="text"  name="Branch" value={this.state.Branch} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Semester">
                <Form.Label>
                  <h6>Semester</h6>
                </Form.Label>
                <Form.Control type="text"   name="Semester" value={this.state.Semester}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Section">
                <Form.Label>
                  <h6>Section</h6>
                </Form.Label>
                <Form.Control type="text" name="Section" value={this.state.Section}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="First_Name">
                <Form.Label>
                  <h6>First_Name</h6>
                </Form.Label>
                <Form.Control type="text" name="First_Name" value={this.state.First_Name}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Middle_Name">
                <Form.Label>
                  <h6>Middle_Name</h6>
                </Form.Label>
                <Form.Control type="text" name="Middle_Name" value={this.state.Middle_Name} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Last_Name">
                <Form.Label>
                  <h6>Last_Name</h6>
                </Form.Label>
                <Form.Control type="text" name="Last_Name" value={this.state.Last_Name} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="DOB">
                <Form.Label>
                  <h6>DOB</h6>
                </Form.Label>
                <Form.Control type="text" name="DOB" value={this.state.DOB}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Gender">
                <Form.Label>
                  <h6>Gender</h6>
                </Form.Label>
                <Form.Control type="text" name="Gender" value={this.state.Gender}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Blood_Group">
                <Form.Label>
                  <h6>Blood_Group</h6>
                </Form.Label>
                <Form.Control type="text" name="Blood_Group" value={this.state.Blood_Group}/>
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="FatherName">
                <Form.Label>
                  <h6>Father's Name</h6>
                </Form.Label>
                <Form.Control type="text" name="FatherName" value={this.state.FatherName} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="MotherName">
                <Form.Label>
                  <h6>Mother's Name</h6>
                </Form.Label>
                <Form.Control type="text" name="MotherName" value={this.state.MotherName} />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Reservation_Category">
                <Form.Label>
                  <h6>Reservation_Category</h6>
                </Form.Label>
                <Form.Control type="text" name="Reservation_Category" value={this.state.Reservation_Category} />
              </Form.Group>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col lg="1" md="6" xs="12">
              <h6>Photo</h6>
            </Col>
            <Col lg="5" md="6" xs="12">
              <Card className="p-2">
                <Row>
                  <Col>
                    <input type="file" multiple />
                  </Col>
                  <Col>
                    <button className="btn btn-primary p-1" type="submit">
                      Upload
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="1" md="6" xs="12">
              <h6>Resume</h6>
            </Col>
            <Col lg="5" md="6" xs="12">
              <Card className="p-2">
                <Row>
                  <Col>
                    <input type="file" multiple />
                  </Col>
                  <Col>
                    <button className="btn btn-primary p-1" type="submit">
                      Upload
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
        </Form>
      </div>
    );
  }
}

export default Personaldetails;
