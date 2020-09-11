import React, { Component,useState } from 'react';
import { Container, Row, Col, Card,Button} from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Placements extends Component{
    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false,
            setDropdownOpen:false,
            dropdownOpen1:false,

        }
        this.toggle=this.toggle.bind(this);
        this.toggle1=this.toggle1.bind(this);

    }
    toggle(e){
        this.setState({
            dropdownOpen:!this.state.dropdownOpen
        })
    }
    toggle1(e){
        this.setState({
            dropdownOpen1:!this.state.dropdownOpen1
        })
    }
    render(){
        return( 
        <div className="container">
                <Row  style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontWeight: "700"}}>
                    <Col xs="12" className="p-2" align="center">
                        <div>Placements</div>
                    </Col>
                </Row>
            <div className="container" style={{ backgroundColor: "white" }}>
                 
                <br/>
                <Row >
                        <Col lg="3" style={{textAlign:"left"}}>Company Name</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                        <Col lg="3" style={{textAlign:"left"}}>YOP</Col>
                        <Col lg="3" style={{"width":"inherit"}}>
                        <select className="form-control">
                            <option value={"2021"}>2021</option>
                            <option value={"2022"}>2022</option>
                            <option value={"2023"}>2023</option>
                        </select>
                      </Col>
                </Row>
                <br/>
                <Row>
                        <Col lg="3"  style={{textAlign:"left"}}>Date of interview</Col>
                            <Col lg="3">
                            <input type="date" className="form-control"/>
                            </Col>
                        <Col lg="3"  style={{textAlign:"left"}}>Campus</Col>
                            <Col lg="3" style={{"width":"inherit"}}>
                            <select className="form-control">
                            <option value={"Vishakapatnam"}>Vishakapatnam</option>
                            <option value={"Hyderabad"}>Hyderabad</option>
                            <option value={"Bengaluru"}>Bengaluru</option>
                        </select>
                             </Col> 
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Job Description</Col>
                        <Col lg="3"><textarea className="form-control" style={{height:"90px"}}/></Col>
                         <Col lg="6">
                            <Row>
                                <Col lg="6"  style={{textAlign:"left"}}>Branch</Col>
                                    <Col lg="6">
                                        <input type="text" className="form-control"/>
                                    </Col>
                            </Row>
                            <br/>
                             <Row>   
                                <Col lg="6"  style={{textAlign:"left"}}>Gender</Col>
                                <Col lg="6">   
                                    <Row>
                                        <Col lg="6">
                                            <div className="form-check">
                                                <label>
                                                    <input type="checkbox" name="react-tips" value="male" className="form-check-input"/>
                                                    Male
                                                </label>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className="form-check">
                                                <label>
                                                    <input type="checkbox" name="react-tips" value="female" className="form-check-input"/>
                                                    Female
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Package Offered</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>Backlogs</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Company URL</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>SSC Percentage above</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>List Of Students</Col>
                        <Col lg="3">
                            <input type="file" />
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>Inter Percentage Above</Col>
                        <Col lg="3">
                            <input type="text" className="form-control"/>
                        </Col>
                </Row>
                <br/>
                <Row align="center">
                    <Col align="center">
                        <Button type="submit" style={{backgroundColor: "#2A324B",borderColor: "#2A324B",color: "white"}}>
                            Submit
                        </Button>
                    </Col>
                  </Row>
                  <br/>
            </div>
            <br/><br/>
        </div>
        )
    }
}

export default Placements;