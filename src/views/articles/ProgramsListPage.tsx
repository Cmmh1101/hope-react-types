import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import DonateBanner from "../../utils/DonateBanner";
import ProgramsList from "./components/ProgramsList";

const ProgramsListPage = () => {
  return (
    <div>
      <div className="banner-divider inner-page-hero">
        <BannerDivider
          bannerText="Our Programs"
          imgSrc="../../../images/programs/garden4.png"
          altText="team huddle"
        />
      </div>
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={10} className="mt-5 mx-auto">
            <MainHeader headerText="Our Programs" />
            <ProgramsList />
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </div>
  );
};

export default ProgramsListPage;
