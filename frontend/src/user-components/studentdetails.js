import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Alert,
} from "reactstrap";
import Collapsible from "react-collapsible";

function studentdetails() {
  return (
    <div>
        <div className='container'>
        <Row>
          <Col md="4" style={{marginRight:'2rem'}}>
            <Card color="success" className="Rounded p-3">
              <CardTitle align="left">90%</CardTitle>
              <CardSubtitle align="left">Tenth Percentage</CardSubtitle>
            </Card>
          </Col>
          <Col md="4" style={{marginRight:'2rem'}}>
            <Card color="warning" className="Rounded p-3">
              <CardTitle align="left">90%</CardTitle>
              <CardSubtitle align="left">Inter Percentage</CardSubtitle>
            </Card>
          </Col>
          <Col md="4" style={{marginRight:'2rem'}}>
            <Card color="danger" className="Rounded p-3">
              <CardTitle align="left">90%</CardTitle>
              <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
            </Card>
          </Col>
        </Row>
      </div>
        <br></br>
        <Collapsible trigger="More Info">
          <br></br>
          <Row>
            <Col md="4">
              <Alert color="success" className="Rounded p-3">
                <CardTitle align="left">CSE</CardTitle>
                <CardSubtitle align="left">Branch</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="warning" className="Rounded p-3">
                <CardTitle align="left">A</CardTitle>
                <CardSubtitle align="left">Pass Category</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="danger" className="Rounded p-3">
                <CardTitle align="left">B</CardTitle>
                <CardSubtitle align="left">Section</CardSubtitle>
              </Alert>
            </Col>
          </Row>
        </Collapsible>
    </div>
  );
}
export default studentdetails;
