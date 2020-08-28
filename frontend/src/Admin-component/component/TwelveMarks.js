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

class TwelveMarks extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleModaltwelve = this.handleModaltwelve.bind(this);
  }
  handleModaltwelve() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div class="container-fluid">
        <Alert color="warning" className="Rounded p-3">
          <CardTitle align="left">90%</CardTitle>
          <CardSubtitle align="left">
            Inter Percentage{" "}
            <span className="gap">
              <Button
                onClick={() => {
                  this.handleModaltwelve();
                }}
              >
                Edit
              </Button>
            </span>
          </CardSubtitle>
          <Modal show={this.state.show} onHide={() => this.handleModaltwelve()}>
            <Modal.Header closeButton>Edit Inter Percentage</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="InterMarks" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" name="InterMarks" />
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

export default TwelveMarks;
