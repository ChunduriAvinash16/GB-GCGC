import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faUserEdit,
  faUpload,
  faChalkboardTeacher,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
const viewHeight = window.outerHeight;
const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <Link to={"/home"}>
          <h3>GITAM Career Guidance Cell</h3>
        </Link>
      </div>
      <div align="center" className="pt-2 pb-2">
        <h4>Menu</h4>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={"/home"}>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/IndividualStudentEntry"}>
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
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
            <NavLink tag={Link} to={"/"}>
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  </div>
);

export default SideBar;
