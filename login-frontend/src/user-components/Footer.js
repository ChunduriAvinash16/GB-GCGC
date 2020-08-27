import React from "react";
import {

  Row,
  Col,

} from "reactstrap";

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
                        <Row>
                          <Col xl='1'/>
                          <Col xl='1'/>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require ("../asstes/Siddharth.jpg") }
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Siddharth</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require ("../asstes/DeviPriya.jpg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Devi Priya</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require("../asstes/Avinash.jpg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Avinash</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" >
                            <img
                              src={require("../asstes/varsha.jpg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>SreeVarsha</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require("../asstes/Madhu.JPG")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }} >
                              MadhuPriya
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require("../asstes/Jain.jpeg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Gulab Jain</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12" >
                            <img
                              src={require("../asstes/Charan.jpg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Charan</center>
                            </div>
                          </Col>
                          <Col xl="1" lg="3" md="3" xs="12">
                            <img
                              src={require("../asstes/souji.jpg")}
                              height="70"
                              width="70"
                            ></img>
                            <br></br>
                            <div style={{ fontSize: "11px" }}>
                              <center>Soujanya</center>
                            </div>
                          </Col>
                      </Row>
                  <Row>
                   <Col className="col-lg-9">&nbsp;</Col>
                 </Row>
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div className="col-auto">
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
