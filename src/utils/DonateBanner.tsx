import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BibleVerses from "./BibleVerses";

const DonateBanner = () => {
  return (
    <Container
      fluid
      className="p-5 donate-section"
      style={{
        backgroundImage: "url(../../../images/sea.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row>
        <Col xs={12} className="donate-banner">
          <BibleVerses />
          <Button
            href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
            target="_blank"
            className="btn-cta"
          >
            DONATE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateBanner;
