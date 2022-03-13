import React from "react";
import { Container, Row, Col } from "reactstrap";
import MainHeader from "./MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

const FollowUs = (props: Props) => {
  return (
    <Container fluid className="p-5 follow-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center flex-wrap">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <MainHeader headerText="Follow Us" customClass="follow-header" />
          </Col>
          <Col xs={12} md={4} xl={4} className="follow-links mb-5">
            <Link to="/" className="mx-5">
              <FontAwesomeIcon icon={faFacebook} className="follow-icons" />
            </Link>
            <Link to="/" className="mx-5 follow-icons">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default FollowUs;
