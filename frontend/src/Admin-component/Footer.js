import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Alert,
  Table,
} from "reactstrap";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
//import Hyperlink from 'react-native-hyperlink';
//import SocialMediaBar from 'react-social-media-bar';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="footer">
            <div className="footer1 pt-2">
              <div>Developers</div>
            </div>
            <div className="footer2">
              <div className="container-fluid">
                <br/>
                <Row>
                  <Col>
                    <Row>
                      <Col xs="12">
                        <Row>
                          <Col xl="2"></Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/Siddharth.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Siddharth</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/DeviPriya.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Devi Priya</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/Avinash.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Avinash</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/varsha.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Sree Varsha</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/Madhu.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Madhu Priya</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/Jain.jpeg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Gulab Jain</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/Charan.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Charan</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src="asserts/images/souji.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "9px" }}>
                              <center>Soujanya</center>
                            </div>
                          </Col>
                          <Col xl="2"></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col className="col-lg-9">&nbsp;</Col>
                  <Col>
                    <div align="right" style={{ fontSize: "10px" }}>
                      Under the Guidance of Dr. Kishor Buddha
                    </div>
                  </Col>
                </Row>
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
