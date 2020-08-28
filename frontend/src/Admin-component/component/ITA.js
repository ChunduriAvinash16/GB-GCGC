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
import { BarExample } from "./comp/SimpleBarchart";

class ARI extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalITA = this.handleModalITA.bind(this);
  }
  handleModalITA() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col md="12">
            <Card className="Rounded p-3">
              <CardSubtitle align="left">
                Integrated Training Attendance
              </CardSubtitle>
              <hr></hr>
              <BarExample />
              <br></br>
              <Button
                onClick={() => {
                  this.handleModalITA();
                }}
              >
                Edit
              </Button>
              <Modal
                show={this.state.show}
                onHide={() => this.handleModalITA()}
                size="lg"
                style={{ maxWidth: "1600px", width: "80%" }}
              >
                <Modal.Header closeButton>Edit ITA Marks</Modal.Header>
                <Modal.Body>
                  <form>
                    <Table className="itaedit" responsive>
                      <tr>
                        <td>SST</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="asst1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="asst2"
                          />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat2"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat3"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat4"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat5"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>DT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt2"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt3"
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </Table>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button>Submit</Button>
                </Modal.Footer>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ARI;
