import React, { useState } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { Button } from "react-bootstrap";

import IndividualStudent from "./IndividualStudent";

function IndividualStudentEntry() {
  return (
    <div className="IndividualStudentEntry">
      <Router>
        <div>
          <div
            className="Manage"
            style={{
              backgroundColor: "#C7CCDB",
              fontSize: "20px",
              fontFamily: "Segoe UI",
              fontWeight: "600",
            }}
          >
            Manage Individual Student
          </div>
        </div>
        <div
          className="Search container p-2"
          style={{
            backgroundColor: "#2A324B",
            color: "white",
            fontSize: "14px",
            fontFamily: "Segoe UI",
            fontWeight: "700",
          }}
        >
          Search Student
        </div>
        <form className="container p-4" style={{ backgroundColor: "white" }}>
          <br></br>
          <Row className="p-2">
            <Col
              lg="3"
              className="p-1"
              style={{
                color: "#999999",
                fontSize: "14px",
                fontFamily: "Segoe UI",
                fontWeight: "400",
              }}
            >
              Search By:
            </Col>
            <Col lg="3">
              <select
                className="container p-1"
                style={{
                  color: "#999999",
                  fontSize: "14px",
                  fontFamily: "Segoe UI",
                  fontWeight: "400",
                  borderColor: "#999999",
                }}
              >
                <option>Student roll no</option>
                <option>Student name</option>
              </select>
            </Col>
            <Col lg="3">
              <input
                type="text"
                name="user"
                className="container pt-1"
                style={{
                  color: "#999999",
                  fontSize: "14px",
                  fontFamily: "Segoe UI",
                  fontWeight: "400",
                  borderColor: "#999999",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="2"></Col>
            <Col lg="2"></Col>
            <div className=" offset-md-5">
              <Nav>
                <NavLink tag={Link} to="/IndividualStudent">
                  <br></br>
                  <Button>Submit</Button>
                </NavLink>
              </Nav>
            </div>
          </Row>
        </form>
        <Row>&nbsp;</Row>

        <Switch>
          <Route
            exact
            path="/IndividualStudent"
            component={IndividualStudent}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default IndividualStudentEntry;
