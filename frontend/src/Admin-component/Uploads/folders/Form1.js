import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Form1() {
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
            <Form.Group as={Row} controlId="User ID" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                User ID:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="First Name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                First Name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Middle name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Middle name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Last name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Last name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Gender
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="DOB" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                DOB:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Blood group" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Blood group:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Permanent address"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Permanent address:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Phone Number" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Phone Number:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Email id" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Email id:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Father name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Father name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Father Occupation"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Father Occupation:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Father Contact Number"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Father Contact Number:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Father Mail id" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Father Mail id:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Mother name" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                First Name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Mother Occupation"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Middle name:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Reservation Category"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Reservation Category:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
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
