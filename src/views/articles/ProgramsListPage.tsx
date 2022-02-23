import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import DonateBanner from "../homepage/components/DonateBanner";
import ProgramsList from "./components/ProgramsList";

const ProgramsListPage = () => {
  return (
    <div>
      <div className="banner-divider">
        <BannerDivider
          bannerText="Programs list page"
          imgSrc="https://media.istockphoto.com/photos/team-teamwork-business-join-hand-together-concept-power-of-volunteer-picture-id1017183652?k=20&m=1017183652&s=612x612&w=0&h=G3MUs6fliJ_R_Tj2B_G4mGH1RvWdVjgXnhzokGuaFxI="
          altText="team huddle"
        />
      </div>
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={10} className="mt-5 mx-auto">
            <ProgramsList />
          </Col>
        </Row>
      </Container>
      <DonateBanner />
    </div>
  );
};

export default ProgramsListPage;
