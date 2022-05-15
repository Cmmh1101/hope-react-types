import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BibleVerses from "./BibleVerses";

const Donate = () => {
  return (
    <Container fluid className="donate-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center flex-wrap">
          <Col
            xs={12}
            md={8}
            xl={4}
            className="d-flex justify-content-center align-items-center"
          >
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

export default Donate;
