import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  const year = new Date();

  return (
    <footer>
      <Container fluid>
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
            <Col
              xs={12}
              className="d-flex mt-0 follow-icons-footer justify-content-center align-items-center"
            >
              <Link
                to={{
                  pathname: "https://www.facebook.com/hopeforthenations7",
                }}
                target="_blank"
                className="mx-4"
              >
                <FontAwesomeIcon icon={faFacebook} className="follow-icons" />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.youtube.com/channel/UCN0GdsHHo__oHqqZ63IUB7g",
                }}
                target="_blank"
                className="mx-4"
              >
                <FontAwesomeIcon icon={faYoutube} className="follow-icons" />
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
      <section className="text-center rights">
        <small>COPYRIGHT © {year.getFullYear()} HOPE FOR THE NATIONS</small>
      </section>
    </footer>
  );
};

export default Footer;
