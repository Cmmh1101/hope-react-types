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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar fixed="top" className="shadow" light expand="md">
      <NavbarBrand
        href="/"
        className="logo-brand d-flex flex-row justify-content-center align-items-center"
      >
        <img
          className="logo-img"
          src="../../../images/logo.png"
          alt="logo brand"
        />{" "}
        <div className="d-none d-lg-flex">Hope For The Nations</div>
      </NavbarBrand>
      <div className="d-flex">
        <NavLink
          to={{
            pathname:
              "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
          }}
          target="_blank"
          className="btn text-light btn-cta d-sm-flex mr-2 d-md-none menu-btn"
        >
          Donate
        </NavLink>
        <NavbarToggler onClick={toggle} />
      </div>

      <Collapse isOpen={isOpen} navbar>
        <Nav tag="ul" className="ml-auto" navbar>
          <NavItem tag="li" className="navigation-link my-2 my-md-0">
            <NavLink
              to="/"
              onClick={toggle}
              // className={(isActive) =>
              //   "nav-active" + (!isActive ? "nav-inactive" : "")
              // }
              activeClassName="nav-active"
            >
              Home
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle className="drop-item px-0" nav caret>
              Who We Are
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink
                  to="/purpose"
                  activeClassName="nav-active"
                  onClick={toggle}
                >
                  Our Purpose
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/leadership"
                  activeClassName="nav-active"
                  onClick={toggle}
                >
                  Leadership
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem tag="li" className="navigation-link my-2 my-md-0">
            <NavLink
              to="/programs"
              activeClassName="nav-active"
              onClick={toggle}
            >
              Programs
            </NavLink>
          </NavItem>
          <NavItem
            tag="li"
            className="navigation-link my-2 my-md-0"
            onClick={toggle}
          >
            <NavLink to="/storiesOfHope" activeClassName="nav-active">
              Blog
            </NavLink>
          </NavItem>
          <NavItem tag="li" className="navigation-link my-2 my-md-0">
            <NavLink
              to="/contactUs"
              activeClassName="nav-active"
              onClick={toggle}
            >
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
  );
};
export default TopNavbar;
