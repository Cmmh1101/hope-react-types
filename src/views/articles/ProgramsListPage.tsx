import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import ProgramsList from "./components/ProgramsList";

const ProgramsListPage = () => {
  return (
    <div>
      <div className="banner-divider inner-page-hero">
        <BannerDivider
          bannerText="Programs list page"
          imgSrc="https://media.istockphoto.com/photos/team-teamwork-business-join-hand-together-concept-power-of-volunteer-picture-id1017183652?k=20&m=1017183652&s=612x612&w=0&h=G3MUs6fliJ_R_Tj2B_G4mGH1RvWdVjgXnhzokGuaFxI="
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
      <DonateInterPages />
      <FollowUs />
    </div>
  );
};

export default ProgramsListPage;
