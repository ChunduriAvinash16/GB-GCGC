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

class Pass extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalpass = this.handleModalpass.bind(this);
  }
  handleModalpass() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="warning" className="Rounded p-3">
          <CardTitle align="left">A</CardTitle>
          <CardSubtitle align="left">
            Pass Category{" "}
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModalpass();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModalpass()}>
            <Modal.Header closeButton>Edit Pass Category</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="Pass" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="Pass" />
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

export default Pass;
