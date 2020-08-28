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
import { RadarExample } from "./comp/Radar";

class Cocubes extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalcocubes = this.handleModalcocubes.bind(this);
  }
  handleModalcocubes() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
          <hr></hr>
          <RadarExample />
          <br></br>
          <Button
            onClick={() => {
              this.handleModalcocubes();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalcocubes()}
            size="lg"
            style={{ maxWidth: "1600px", width: "80%" }}
          >
            <Modal.Header closeButton>Edit Cocubes Marks</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="cocubesedit" responsive>
                  <thead>
                    <tr>
                      <th>English</th>
                      <th>Quants</th>
                      <th>Domain</th>
                      <th>Analytical</th>
                      <th>CF</th>
                      <th>Coding</th>
                      <th>WET</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="English"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Quants"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Analytical"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="CF"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Coding"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="WET"
                          style={{ width: "50px" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </form>
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

export default Cocubes;
