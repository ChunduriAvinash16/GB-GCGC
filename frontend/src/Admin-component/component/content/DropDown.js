import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Year of Passing</DropdownToggle>
      <DropdownMenu>
        <DropdownItem disabled>2020</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>2021</DropdownItem>
        <DropdownItem>2022</DropdownItem>
        <DropdownItem>2023</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Example;
