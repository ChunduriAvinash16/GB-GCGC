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

class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalsection = this.handleModalsection.bind(this);
  }
  handleModalsection() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="danger" className="Rounded p-3">
          <CardTitle align="left">G</CardTitle>
          <CardSubtitle align="left">
            Section{" "}
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModalsection();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModalpass()}>
            <Modal.Header closeButton>Edit Section</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="Section" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="Section" />
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

export default Section;
