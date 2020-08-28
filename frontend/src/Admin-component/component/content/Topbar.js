import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-2 mb-5 bg-white rounded"
      expand="lg"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar className="ml-auto pb-2">
        <div className="ml-auto pt-2">
          <img src={require("./Pic1.jpeg")} align="right" width="75px" />
          <p className="pt-3" align="center">
            {" "}
            Welcome Kishor Buddha
          </p>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
