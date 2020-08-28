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

class Branch extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModalbranch = this.handleModalbranch.bind(this);
  }
  handleModalbranch() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="success" className="Rounded p-3">
          <CardTitle align="left">CSE</CardTitle>
          <CardSubtitle align="left">
            Branch
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModalbranch();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModalbranch()}>
            <Modal.Header closeButton>Edit Branch</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="Branch" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="Branch" />
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

export default Branch;
