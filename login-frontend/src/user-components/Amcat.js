import React from "react";
import { RadarExample2 } from "./comp/Radar2";
import {
  Card,
  CardSubtitle,

} from "reactstrap";

function Amcat() {
  return (
    <div className="Amcat">
      <Card className="Rounded p-3">
        <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
        <hr></hr>
        <RadarExample2 />
      </Card>
    </div>
  );
}
export default Amcat;
