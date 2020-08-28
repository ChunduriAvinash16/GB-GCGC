import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Sdm(props) {
  const style = {
    input: {
      width: "auto",
    },
    div: {
      textAlign: "center",
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
            <Form.Group as={Row} controlId="Password" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Password:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Campus ID" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Campus ID:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Type
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Admin"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Student"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <div style={style.div}>
              <input
                type="submit"
                onClick={props.submit}
                style={style.input}
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
