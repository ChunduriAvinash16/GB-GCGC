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

class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginid:props.value,
      fName:"",
      lName:"",
      isNavOpen: false,
    };
        this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  componentDidMount(prevProps){
        Axios.get("http://localhost:80/login-backend/UserNavbar.php?id="+this.state.loginid)
        .then(res => {
          console.log(res.data);
          this.setState({
            fName: res.data[0]['first_name'],
            lName: res.data[0]['last_name']
          })
        })
  }

  render() {
    return (
      <div className="App container-fluid">
        <Router>
          <Navbar dark color="dark" expand="lg">
            <div class="container-fluid">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                GITAM Bengaluru
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <span className="tab1"></span>
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link active"
                      tag={Link}
                      to="/Dashboard"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-home fa-lg"></span>&nbsp;Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/personaldetails"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-info fa-lg"></span>&nbsp;Personal
                      Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link"
                      tag={Link}
                      to="/Calender"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-calendar"></span>&nbsp;Calender
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to={"/leaderboard"}
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-trophy"></span>&nbsp;Leader Board
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/changepassword"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-key"></span>&nbsp;Change Password
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link"
                      tag={Link}
                      to="/Login"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-sign-out"></span>&nbsp;Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
            <span className="col-xs-6 welcome">
              {this.props.value}<br></br>{this.state.lName}
            </span>
            <div className="col-xs-6">
              <img
                src={require("../asstes/gitamlogo.png")}
                height="50"
                width="50"
              ></img>
            </div>
          </Navbar>
          <Switch>
            <Route exact path="/Dashboard"><Dashboard login={this.props.value}/></Route>
            <Route exact path="/leaderboard"><Leaderboard login={this.props.value} /></Route> 
            <Route exact path="/Calender" component={Calender} />
            <Route exact path="/personaldetails"><Personaldetails login={this.props.value}/></Route>
            <Route exact path="/changepassword"><Changepassword login={this.props.value}/> </Route>
            <Route exact path="/Login"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
