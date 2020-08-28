import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Alert,
  Collapse,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import { DoughnutExample } from "./comp/Doughnut";

class CurrentJobS extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalcurrentjob = this.handleModalcurrentjob.bind(this);
  }
  handleModalcurrentjob() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
          <hr></hr>

          <div class="container-fluid">
            <Row>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Analyst
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                CustomerSales
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Plant Engineer
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                RRD Engineer
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Network Engineer
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Operations Engineer
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Software Developer
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Software Engineer
              </Col>
              <Col lg="4" md="6" sm="12">
                <DoughnutExample />
                Software Tester
              </Col>
            </Row>
          </div>
          <br></br>
          <Button
            onClick={() => {
              this.handleModalcurrentjob();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalcurrentjob()}
          >
            <Modal.Header closeButton>Edit </Modal.Header>
            <Modal.Body>
              <Table className="CurrentJobSEdit" responsive>
                <tr>
                  <td>Analyst</td>
                  <td>
                    <input type="text" name="Analyst" />
                  </td>
                </tr>
                <tr>
                  <td>CostumerSales</td>
                  <td>
                    <input type="text" name="CustomerSales" />
                  </td>
                </tr>
                <tr>
                  <td>Plant Engineer</td>
                  <td>
                    <input type="text" name="PlantEngineer" />
                  </td>
                </tr>
                <tr>
                  <td>RRD Engineer</td>
                  <td>
                    <input type="text" name="RRDEngineer" />
                  </td>
                </tr>
                <tr>
                  <td>Network Engineer</td>
                  <td>
                    <input type="text" name="NetworkEngineer" />
                  </td>
                </tr>
                <tr>
                  <td>Operations Engineer</td>
                  <td>
                    <input type="text" name="OperationsEngineer" />
                  </td>
                </tr>
                <tr>
                  <td>Software Developer</td>
                  <td>
                    <input type="text" name="SoftwareDeveloper" />
                  </td>
                </tr>
                <tr>
                  <td>Software Engineer</td>
                  <td>
                    <input type="text" name="SoftwareEngineer" />
                  </td>
                </tr>
                <tr>
                  <td>Software Tester</td>
                  <td>
                    <input type="text" name="SoftwareTester" />
                  </td>
                </tr>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button>Submit</Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default CurrentJobS;
