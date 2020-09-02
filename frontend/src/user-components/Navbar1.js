import React,{Component} from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Row,
  Col
} from "reactstrap";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import Personaldetails from "./Personaldetails";
import Changepassword from "./Changepassword";
import Calender from "./Calender";
import Axios from "axios";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "../login-components/LoginComponent";
import Login from "../login-components/Login";

class Navbar1 extends Component {
 
  render() {
    return (
      <div className="App container-fluid">
          <Navbar dark color="dark" expand="lg">
            <div class="container-fluid">
              <Row>
                <div className="col-12 col-md-3 col-lg-3 col-x-1" style={{"text-align": "initial"}}>
                <NavbarBrand className="mr-auto" href="/">
                <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                GITAM Bengaluru
                </NavbarBrand>
                </div>
                <div className="col-12 col-md-6 col-lg-7 col-x-1">
                <h2 style={{"color":"aliceblue"}} >
                      Gitam Career Guidance Cell
                    </h2>
                </div>
                <div className="col-12 col-md-2 col-lg-2 col-x-1" style={{"textAlign":"end"}}>
                    {/*<NavLink
                    classNam="nav-link"
                      tag={Link}
                      to="/settings"
                    >
                     
                    </NavLink>*/}
                    <i class="fa fa-cog fa-lg" style={{"color":"aliceblue"}}></i>
                    {/*<NavLink
                      className="nav-link"
                      tag={Link}
                      to="/"
                      style={{ color: "lightgreen" }}
                    >
                    
                    </NavLink>*/}
                    <i class="fa fa-power-off fa-lg p-3" style={{"color":"aliceblue"}}></i>
                   {/* <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link active"
                      tag={Link}
                      to="/Dashboard1"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-home fa-lg"></span>
                    </NavLink>
                   </NavItem>*/}
                </div>
              </Row>
              <span className="tab1"></span>
                <Nav navbar> 
             
               
                  {/*<NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/changepassword"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-key"></span>&nbsp;Change Password
                    </NavLink>
                  </NavItem>*/}
                </Nav>
            </div>
          </Navbar>
      </div>
    );
  }
}

export default Navbar1;
