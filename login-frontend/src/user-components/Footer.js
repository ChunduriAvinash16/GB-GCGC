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
              <div className="container" >
                <Row>
                  <Col></Col>
                  <Col xl="12" lg="12" md="12" xs="12" className="p-2" style={{marginLeft:'4rem'}}>
                    <img
                      src="assets/images/Kishor.jpeg"
                      height="70"
                      width="70"
                    ></img>
                    <br></br>
                    <div style={{ fontSize: "8px" }}>
                      <center>Dr.Kishor Buddha</center>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Col xs="12"style={{marginLeft:'3rem'}}>
                        <Row>
                          <Col xl="2"></Col>
                          <Col xl="1" lg="3" md="3" xs="12"style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/Siddharth.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Siddharth</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/DeviPriya.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Devi Priya</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/Avinash.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Avinash</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/varsha.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Sree Varsha</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/Madhu.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }} style={{marginLeft:'1rem'}}>
                              <center>Madhu Priya</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/Jain.jpeg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Gulab Jain</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/Charan.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Charan</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" style={{marginLeft:'1rem'}}>
                            <img
                              src="assets/images/souji.jpg"
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Soujanya</center>
                            </div>
                          </Col>
                          <Col xl="2"></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-lg-9">&nbsp;</Col>
                </Row>
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div className="col-auto" style={{marginLeft:'20rem'}}>
                  <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                </div>
              </div>
              <Col>
                <div align="right" style={{ fontSize: "10px" }}>
                  Under the Guidance of Dr. Kishor Buddha
                </div>
              </Col>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
