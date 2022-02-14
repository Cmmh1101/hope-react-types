import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const TopNavbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hope For The Nations</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" onClick={toggle}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={toggle}>
                Who we are
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/programs" onClick={toggle}>
                Programs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={toggle}>
                Stories of Hope
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="" onClick={toggle}>
                Contact
              </NavLink>
            </NavItem>
            <Button className="btn-cta">Donate</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default TopNavbar;
