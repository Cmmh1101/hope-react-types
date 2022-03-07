import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-5">
          <Col sm={6} md={3} className="footer-col">
            <NavLink to="/" className="footer-img-container">
              <img
                className="logo-img mt-0"
                src="../../../images/logo.png"
                alt="logo brand"
              />
            </NavLink>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>MENU</h4>
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>CONTACT US</h4>
            <p>Tlf: +123456789</p>
            <p>Email</p>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>FOLLOW US</h4>
            <Link to="/">
              <i className="fa fa-facebook" aria-hidden="true" />
              Facebook
            </Link>
            <Link to="/">
              <i className="fa fa-facebook" aria-hidden="true" />
              YouTube
            </Link>
          </Col>
        </Row>
      </Container>
      <section className="text-center rights">
        <small>COPYRIGHT © 2022 HOPE FOR THE NATIONS | CREDITS</small>
      </section>
    </footer>
  );
};

export default Footer;
