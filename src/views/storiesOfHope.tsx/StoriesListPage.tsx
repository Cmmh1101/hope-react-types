import React from "react";
import { Col, Container, Row } from "reactstrap";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import DonateBanner from "../../utils/DonateBanner";
import StoriesList from "./components/StoriesList";
import Header from "../../utils/Header";

const StoriesListPage = () => {
  return (
    <>
      <Header
        bannerTitle="Stories Of Hope"
        background="../../../images/programs/light-of-hope-hair-style.jpg"
        className="jumbo-header text-center"
        overlay={true}
      />
      <Container>
        <Row className="mt-5">
          <Col xs={12} className="mt-5 mx-auto">
            <MainHeader headerText="Meet some of our beneficiaries" />
            <StoriesList />
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default StoriesListPage;
