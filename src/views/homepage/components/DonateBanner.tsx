import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BibleVerses from "../../../utils/BibleVerses";

const DonateBanner = () => {
  return (
    <Container fluid className="p-5 donate-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center flex-wrap">
          <Col
            xs={12}
            md={8}
            xl={4}
            className="d-flex justify-content-center align-items-center"
          >
            {/* <p className="text-center text-md-end text-right mb-xs-4 mb-md-0">
              We would love for you to consider partnering with us to reach and
              empower the people in Venezuela
            </p> */}
            <BibleVerses />
          </Col>
          <Col
            xs={12}
            md={4}
            xl={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Button className="btn-cta">DONATE</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateBanner;
