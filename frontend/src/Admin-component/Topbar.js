import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarToggler, Collapse } from "reactstrap";


const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      className="navbar shadow-sm p-2 mb-5 rounded"
      expand="lg"
      style={{ backgroundColor: "#767B91", color: "white" }}
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar className="ml-auto pb-2">
        <div className="ml-auto pt-2">
          <img src={require("./Pic1.jpeg")} align="right" width="80px" height="100px" />
          <p align="center">
            {" "}
            Welcome Kishor Buddha
          </p>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
