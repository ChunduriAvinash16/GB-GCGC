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

class BtechMarks extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalbtech = this.handleModalbtech.bind(this);
  }
  handleModalbtech() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="danger" className="Rounded p-3">
          <CardTitle align="left">90%</CardTitle>
          <CardSubtitle align="left">
            B Tech Percentage{" "}
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModalbtech();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModalbtech()}>
            <Modal.Header closeButton>Edit B.Tech Marks</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="BtechMarks" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="BtechMarks" />
                      </td>
                      <td>
                        <Button>Submit</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </form>
            </Modal.Body>
          </Modal>
        </Alert>
      </div>
    );
  }
}

export default BtechMarks;
