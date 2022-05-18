import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
// import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import DonateBanner from "../../utils/DonateBanner";
import StoriesList from "./components/StoriesList";

const StoriesListPage = () => {
  return (
    <div>
      <div className="banner-divider inner-page-hero">
        <BannerDivider
          bannerText="Stories Of Hope"
          imgSrc="../../../images/programs/light-of-hope-hair-style.jpg"
          altText="team huddle"
        />
      </div>
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
    </div>
  );
};

export default StoriesListPage;
