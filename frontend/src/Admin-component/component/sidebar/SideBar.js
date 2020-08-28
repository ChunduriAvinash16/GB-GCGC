import React from "react";
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
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h4>GITAM Career Guidance Cell</h4>
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
          <NavLink tag={Link} to={"/calendar"}>
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            Calendar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/individualstudent"}>
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
          <NavLink tag={Link} to={"/uploads"}>
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Uploads
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/requests"}>
            <FontAwesomeIcon icon={faReply} className="mr-2" />
            Request
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
    </div>
  </div>
);

export default SideBar;
