import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faReply,
  faCog,
  faCalendar,
  faUserEdit,
  faUpload,
  faPeopleArrows,
  faChalkboardTeacher,
  faCopy,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import Personaldetails from "../Uploads/personaldetails";
import Academicdetails from "../Uploads/academicdetails";
import Ari from "../Uploads/ari";
import AreAmcat from "../Uploads/areamcat";
import AreCoCubes from "../Uploads/arecocubes";
import Cdt from "../Uploads/cdt";
import Ita from "../Uploads/ita";
import Companydetails from "../Uploads/companydetails";

class sidebar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div className="Navbar1">
        <Router>
          <Navbar dark color="dark" expand="md">
            <div class="container-fluid">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/gitamlogo.png" height="50" width="50" />
                GITAM Bengaluru
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <span className="tab1"></span>
                <Nav vertical className="list-unstyled pb-3">
                  <NavItem>
                    <NavLink tag={Link} to={"/home"}>
                      <FontAwesomeIcon icon={faHome} className="mr-2" />
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={"/calendar"}>
                      <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                      Calendar
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={"/individualstudent"}>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="mr-2"
                      />
                      Individual student
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={"/allstudents"}>
                      <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
                      Allstudents
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={"/Uploads"}>
                      <FontAwesomeIcon icon={faUpload} className="mr-2" />
                      Uploads
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={"/settings"}>
                      <FontAwesomeIcon icon={faCog} className="mr-2" />
                      Settings
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to={"/logout"}>
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                      Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Switch>
            <Route path="/personaldetails" component={Personaldetails} />
            <Route path="/academicdetails" component={Academicdetails} />
            <Route path="/ari" component={Ari} />
            <Route path="/areamcat" component={AreAmcat} />
            <Route path="/arecocubes" component={AreCoCubes} />
            <Route path="/cdt" component={Cdt} />
            <Route path="/ita" component={Ita} />
            <Route path="/companydetails" component={Companydetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default sidebar2;
