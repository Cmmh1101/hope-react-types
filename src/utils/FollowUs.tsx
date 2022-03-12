import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import MainHeader from "./MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface Props {}

const FollowUs = (props: Props) => {
  return (
    <Container fluid className="p-5 donate-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center flex-wrap">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <MainHeader headerText="Follow Us" customClass="follow-header" />
          </Col>
          <Col
            xs={12}
            md={4}
            xl={4}
            className="d-flex justify-content-between align-items-center follow-icons mb-5"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default FollowUs;
