import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Form4() {
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
              controlId="Assessment patner"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Assessment patner:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" value="CoCubes" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Assessment date" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Assessment date:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Assessment ID" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Assessment ID:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Overall Aptitude" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Overall Aptitude:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="English" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                English:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Quantitative" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Quantitative:
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
            <Form.Group as={Row} controlId="Domian" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Domian:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Computer Fundamentals"
              style={style.btn}
            >
              <Form.Label style={style.label} column lg="4">
                Computer Fundamentals:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="coding" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                coding:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="WET" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                WET:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Personality" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Personality:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Over all score" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Over all score:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Over all rank" style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Over all rank:
              </Form.Label>
              <Col lg="8">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Analyst:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Customer Service Executive:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Graduate Engineer(Plant):
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Graduate Engineer(R and D):
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Network Engineer:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Operations Executive:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Sales Executive:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Software Developer:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Software Engineer:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={style.btn}>
              <Form.Label style={style.label} column lg="4">
                Software Tester:
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  inline
                  type="radio"
                  label="Eligible"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Not Eligible"
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
