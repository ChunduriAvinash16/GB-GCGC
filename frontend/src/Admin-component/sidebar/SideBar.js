import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faUserEdit,
  faUpload,
  faUser,
  faChalkboardTeacher,
  faSignOutAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link, Redirect } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Collapsible from "react-collapsible";
import UserIcon from "./UserIcon";
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
          <li>
          <NavLink tag={Link} to={"/home"}>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </NavLink>
          </li>
          <hr/>
          <nav className="pl-3" style={{"textAlign":"initial"}}>
              <Collapsible className ="pl-1  fa fa" trigger={<UserIcon/>}>
              <Nav vertical className="list-unstyled pb-3">
                <ul style={{"padding":"0px"}}>
                <li className="pl-3">
                  <NavLink tag={Link} to={"/user-staff"}>
                    Staff
                  </NavLink>
                </li>
                <li className="pl-3">
                  <NavLink tag={Link} to={"/user-student"}>
                    Student
                  </NavLink>
                </li>
                </ul>
              </Nav>
              </Collapsible>
            </nav>
            <hr/>
          <li>
            <NavLink tag={Link} to={"/assessment"}>
                <FontAwesomeIcon icon={faEdit} className="mr-2"/>
                Assessment
            </NavLink>
          </li>
          <hr/>
          <li>
            <NavLink tag={Link} to={"/IndividualStudentEntry"}>
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
              Individual student
            </NavLink>
          </li>
          <hr/>

            <li>            
              <NavLink tag={Link} to={"/allstudents"}>
              <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
              Allstudents
              </NavLink>
            </li>    
            <hr/>

              <li>        
                <NavLink tag={Link} to={"/settings"}>
                <FontAwesomeIcon icon={faCog} className="mr-2"/>
                Settings
                </NavLink>
             </li>          
              <hr/>
              <li>          
                <NavLink tag={Link} onClick={ e=>{localStorage.clear();
                  window.location.href = '/login';}}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        Logout
                      </NavLink>
                </li>        
</Nav>
      </div>
    </div>
  </div>
);

export default SideBar;
