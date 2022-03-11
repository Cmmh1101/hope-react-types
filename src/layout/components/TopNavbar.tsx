import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const TopNavbar = ({ props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" className="shadow" light expand="md">
        <NavbarBrand
          href="/"
          className="logo-brand d-flex flex-column flex-sm-row justify-content-center align-items-center"
        >
          <img
            className="logo-img"
            src="../../../images/logo.png"
            alt="logo brand"
          />{" "}
          <div className="d-md-none d-lg-flex">Hope For The Nations</div>
        </NavbarBrand>
        <div className="menu-btn-container">
          <NavLink
            to={{
              pathname:
                "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
            }}
            target="_blank"
            className="btn text-light btn-cta d-sm-flex d-md-none menu-btn"
            onClick={toggle}
          >
            Donate
          </NavLink>
        </div>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav tag="ul" className="ml-auto" navbar>
            <NavItem tag="li" className="navigation-link">
              <NavLink to="/" onClick={toggle}>
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="drop-item px-0" nav caret>
                Who We Are
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink to="/purpose" onClick={toggle}>
                    Our Purpose
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/leadership" onClick={toggle}>
                    Leadership
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem tag="li" className="navigation-link">
              <NavLink to="/programs" onClick={toggle}>
                Programs
              </NavLink>
            </NavItem>
            <NavItem tag="li" className="navigation-link">
              <NavLink to="/storiesOfHope" onClick={toggle}>
                Stories of Hope
              </NavLink>
            </NavItem>
            <NavItem tag="li" className="navigation-link">
              <NavLink to="/contactUs" onClick={toggle}>
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
                className="btn btn-cta d-none d-md-flex"
                onClick={toggle}
              >
                Donate
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default TopNavbar;
