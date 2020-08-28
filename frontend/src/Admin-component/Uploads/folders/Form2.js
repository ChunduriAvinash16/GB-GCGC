import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function Form2() {
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
            <Form.Group as={Row} controlId="AT1 Score" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 Score:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="AT1 Date" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 Date:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="AT1 rank" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 rank:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="AT1 Score" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 Score:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="AT1 Date" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 Date:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="AT1 rank" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                AT1 rank:
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
