import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Container,
} from "reactstrap";

interface Props {}

const TopNavbar = (props: Props) => {
  return (
    <div>
      <Navbar color="light" expand="lg" sticky="true" light>
        <Container className="d-flex">
          <NavbarBrand className="me-auto test-class" href="/">
            Hope For The Nations
          </NavbarBrand>
          <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
          <Collapse navbar className="me-auto">
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Who we are
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  What we do
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">Stories of Hope</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Give</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="test-class" href="/">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <Button className="btn-cta">Donate</Button>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default TopNavbar;
