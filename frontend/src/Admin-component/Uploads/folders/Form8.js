import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Form8() {
  const style = {
    input: {
      width: "auto",
    },
    div: {
      textAlign: "left",
    },
    label: {
      margin: " 0 0.5rem",
      width: "10rem",
    },
    input: {
      width: "auto",
    },
  };
  return (
    <div class="Container-fluid">
      <div class='Row style={{backgroundColor:"blue",color:"white"}}'>
        <div class='Row style={{backgroundColor:"white"}}'>
          <form>
            <Form.Group as={Row} controlId="Company ID" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Company ID:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Company Name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Company Name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Company Logo" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Company Logo:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Company official website"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Company official website:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Employee strength"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Employee strength:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Annual turnover" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Annual turnover:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="About the company"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                About the company:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Analytical" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Analytical:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="HR Name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                HR Name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Techinical interviewer name"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Techinical interviewer name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Recruitment Date" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Recruitment Date:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <div style={style.div}>
              <input
                style={{ marginLeft: "8rem" }}
                type="submit"
                value="Submit"
              />
            </div>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
