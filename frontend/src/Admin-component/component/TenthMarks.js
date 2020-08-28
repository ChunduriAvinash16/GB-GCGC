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

class TenthMarks extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModaltenth = this.handleModaltenth.bind(this);
  }
  handleModaltenth() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="success" className="Rounded p-3">
          <CardTitle align="left">90%</CardTitle>
          <CardSubtitle align="left">
            Tenth Percentage{" "}
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModaltenth();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModaltenth()}>
            <Modal.Header closeButton>Edit Tenth Marks</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="TenthMarks" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="TenthMarks" />
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

export default TenthMarks;
