import React, {Component } from "react";
import {  Row, Col} from "reactstrap";
import {
  Redirect,
  NavLink,
} from "react-router-dom";
import { Button } from "react-bootstrap";


class IndividualStudentEntry extends Component {
constructor(props){
  super(props)
  this.state={
    id:""
  }
  this.onChangeid=this.onChangeid.bind(this);
}
onChangeid(e){
  this.setState({
    id:e.target.value
  })
}

render(){
  return (
    <div className="container">
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
          &nbsp;
          <hr></hr>
          &nbsp;
        <div
          className="Search container-fluid p-2"
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
        <form className="container-fluid p-4" style={{ backgroundColor: "white" }}>
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
                className="container p-1 form-control"
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
                className="container p-1 form-control"
                type="text"
                name="user"
                className="container pt-1"
                value={this.state.id}
                onChange={this.onChangeid}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="2"></Col>
            <Col lg="2"></Col>
            <div className="offset-md-5">
              <NavLink tag={Redirect} to={"/IndividualStudent/"+this.state.id}>
                <br></br>
              <Button>Submit </Button>
              </NavLink>
              {console.log(this.state.id)}
            </div>
          </Row>
        </form>
        <Row>&nbsp;</Row>
    </div>
  );
}
}

export default IndividualStudentEntry;
