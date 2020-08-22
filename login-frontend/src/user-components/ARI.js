import React from "react";
import { BarChart } from "./comp/Barchart";
import {
  Card,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

function ARI() {
  return (
    <div className="ARI">
      <div class="container" style={{marginLeft:'7rem'}}>
        <Row>
          <Col sm="12">
            <Card className="Rounded p-3">
              <CardSubtitle align="left">ARI</CardSubtitle>
              <hr></hr>
              <BarChart />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ARI;
