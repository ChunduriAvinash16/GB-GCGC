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
import { RadarExample2 } from "./comp/Radar2";

class Amcat extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalamcat = this.handleModalamcat.bind(this);
  }
  handleModalamcat() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
          <hr></hr>
          <RadarExample2 />
          <br></br>
          <Button
            onClick={() => {
              this.handleModalamcat();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalamcat()}
            size="lg"
            style={{ maxWidth: "1600px", width: "80%" }}
          >
            <Modal.Header closeButton>Edit Amcat Marks</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="amcatedit" responsive>
                  <thead>
                    <tr>
                      <th>Logical</th>
                      <th>English</th>
                      <th>Quants</th>
                      <th>Automata</th>
                      <th>Automata_Fix</th>
                      <th>Domain_1</th>
                      <th>Domain_2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="Logical"
                          style={{ width: "50px" }}
                        />
                      </td>
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
                          name="Automata"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Automata_Fix"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain_1"
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain_2"
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

export default Amcat;
