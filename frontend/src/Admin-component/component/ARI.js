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
import { BarChart } from "./comp/Barchart";

class ARI extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalARI = this.handleModalARI.bind(this);
  }
  handleModalARI() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col sm="12">
            <Card className="Rounded p-3">
              <CardSubtitle align="left">
                Assesment Report Internal
              </CardSubtitle>
              <hr></hr>
              <BarChart />
              <br></br>
              <Button
                onClick={() => {
                  this.handleModalARI();
                }}
              >
                Edit
              </Button>
              <Modal
                show={this.state.show}
                onHide={() => this.handleModalARI()}
                size="lg"
                style={{ maxWidth: "1600px", width: "80%" }}
              >
                <Modal.Header closeButton>Edit ARI Marks</Modal.Header>
                <Modal.Body>
                  <form>
                    <Table className="ARIedit" responsive>
                      <tr>
                        <td> </td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>AT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at2"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at3"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at4"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at5"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at6"
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt2"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt3"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt6"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt7"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt4"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt5"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt8"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>DT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt1"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt2"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt3"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt4"
                          />
                        </td>
                        <td></td>
                        <td></td>
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
