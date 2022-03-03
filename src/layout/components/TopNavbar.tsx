import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

const TopNavbar = ({ props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">Hope For The Nations</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav tag="ul" className="ml-auto" navbar>
              <NavItem tag="li" className="mx-2">
                <NavLink to="/" onClick={toggle}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem tag="li" className="mx-2">
                <NavLink to="/" onClick={toggle}>
                  Who we are
                </NavLink>
              </NavItem>

              <NavItem tag="li" className="mx-2">
                <NavLink to="/programs" onClick={toggle}>
                  Programs
                </NavLink>
              </NavItem>
              <NavItem tag="li" className="mx-2">
                <NavLink to="/storiesOfHope" onClick={toggle}>
                  Stories of Hope
                </NavLink>
              </NavItem>
              <NavItem tag="li" className="mx-2">
                <NavLink to="/" onClick={toggle}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem tag="li">
                <NavLink
                  to={{
                    pathname:
                      "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
                  }}
                  target="_blank"
                  className="btn text-light btn-cta"
                  onClick={toggle}
                >
                  Donate now
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default TopNavbar;
