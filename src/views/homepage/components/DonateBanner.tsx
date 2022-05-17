import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BibleVerses from "../../../utils/BibleVerses";

const DonateBanner = () => {
  return (
    <Container
      fluid
      className="p-5 donate-section"
      // style={{
      //   backgroundImage: "url(../../../images/bibleOpen.jpg)",

      //   backgroundSize: "auto",
      //   backgroundPosition: "center bottom",
      //   backgroundRepeat: "no-repeat",
      //   height: 300,
      // }}
    >
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center flex-wrap"
        >
          <BibleVerses />
          <Button color="warning" className="">
            DONATE
          </Button>
          {/* <Col
            xs={12}
            md={8}
            xl={4}
            className="d-flex justify-content-center align-items-center donate-verse"
          >
            <BibleVerses />
          </Col> */}
          {/* <Col
            xs={12}
            md={4}
            xl={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Button className="btn-cta">DONATE</Button>
          </Col> */}
        </Col>
      </Row>
    </Container>
  );
};

export default DonateBanner;
