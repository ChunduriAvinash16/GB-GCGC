import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Form7() {
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
            <Form.Group
              as={Row}
              controlId="Name of The Trg Programme"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Name of The Trg Programme:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Date" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Date:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Session:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Morning"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Afternoon"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Attendence
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Present"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Absent"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
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
