import React from "react";
import { Col, Container, Row } from "reactstrap";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import DonateBanner from "../../utils/DonateBanner";
import ProgramsList from "./components/ProgramsList";
import Header from "../../utils/Header";

const ProgramsListPage = () => {
  return (
    <>
      <Header
        bannerTitle="Our Programs"
        background="../../../images/programs/hunger5.png"
        className="jumbo-header text-center"
        overlay={true}
      />
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={10} className="mb-5 mx-auto">
            <MainHeader headerText="Our Programs" />
            <ProgramsList />
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default ProgramsListPage;
