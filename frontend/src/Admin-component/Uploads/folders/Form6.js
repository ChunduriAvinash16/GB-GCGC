import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Form6() {
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
            <Form.Group as={Row} controlId="Company ID" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Company ID:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
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

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Written test:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Group discussion:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Technical Interview:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                PIU:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not cleared"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Offer Letter:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Available"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Available"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </form>
        </div>
      </div>
    </div>
  );
}
