import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FilesUploadComponent from "./FilesUploadComponent"; //import React from 'react';
import "../App.css";
import {
  Card,
  Row,
  Col,

} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
class personaldetails extends Component {
  render() {
    return (
      <div class="container" style={{marginRight:'1rem'}} style={{marginLeft:'8rem'}}>
        <h1 align="center">Personal Details</h1>
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Form>
          <Row>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="RollNo">
                <Form.Label>
                  <h6>Roll No</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Campus">
                <Form.Label>
                  <h6>Campus</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="College">
                <Form.Label>
                  <h6>College</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Batch">
                <Form.Label>
                  <h6>Batch</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Degree">
                <Form.Label>
                  <h6>Degree</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Program">
                <Form.Label>
                  <h6>Program</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Branch">
                <Form.Label>
                  <h6>Branch</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Semester">
                <Form.Label>
                  <h6>Semester</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Section">
                <Form.Label>
                  <h6>Section</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="First Name">
                <Form.Label>
                  <h6>First Name</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Middle Name">
                <Form.Label>
                  <h6>Middle Name</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Last Name">
                <Form.Label>
                  <h6>Last Name</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="DOB">
                <Form.Label>
                  <h6>DOB</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Gender">
                <Form.Label>
                  <h6>Gender</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Blood Group">
                <Form.Label>
                  <h6>Blood Group</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="FatherName">
                <Form.Label>
                  <h6>Father's Name</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="MotherName">
                <Form.Label>
                  <h6>Mother's Name</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
              </Form.Group>
            </Col>
            <Col lg="4" md="6" xs="12">
              <Form.Group controlId="Reservation Category">
                <Form.Label>
                  <h6>Reservation Category</h6>
                </Form.Label>
                <Form.Control type="text" placeholder="xxx" />
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

export default personaldetails;
