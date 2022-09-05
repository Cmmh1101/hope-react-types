import React from "react";
import { Col, Container, Row } from "reactstrap";
import DonateBanner from "../../utils/DonateBanner";
import FollowUs from "../../utils/FollowUs";
import Header from "../../utils/Header";
import MainHeader from "../../utils/MainHeader";
import TeamMemberCard from "./components/TeamMemberCard";

const Leadership = () => {
  const teamMembers = [
    {
      fullName: "Luzbell Wood",
      ocupation: "Founder & Director",
      photo: "../../../images/leadership/profile-luz.png",
    },
    {
      fullName: "Aimee Wood",
      ocupation: "Director & Digital Designer",
      photo: "../../../images/leadership/profile-gaby.png",
    },
    {
      fullName: "Nancy Valera",
      ocupation: "Assist. Director Development",
      photo: "../../../images/face-placeholder.png",
    },
    {
      fullName: "Carla Montano",
      ocupation: "Tech Director",
      photo: "../../../images/leadership/profile-carla.png",
    },
    {
      fullName: "Maria Brady",
      ocupation: "Project Manager",
      photo: "../../../images/face-placeholder.png",
    },
    {
      fullName: "Ana Salcedo",
      ocupation: "Leader - Caracas, Vzla",
      photo: "../../../images/leadership/profile-ana.png",
    },
    // {
    //   fullName: "Evel Castro",
    //   ocupation: "Leader - Caracas, Vzla",
    //   photo: "../../../images/leadership/profile-carla.png",
    // },
  ];

  const volunteers = [
    { fullName: "Lerymar Castillo", ocupation: "Media", project: "" },
    { fullName: "Barbara Poncio", ocupation: "Operativa", project: "" },
    {
      fullName: "Lizllisay de Lopez",
      ocupation: "Assist. Director Finance",
      project: "",
    },
    { fullName: "Yliana Sosa", ocupation: "Legal Dpt", project: "" },
    {
      fullName: "Eladio Lopez",
      ocupation: "Operations",
      project: "Fishing Farming Program",
    },
    {
      fullName: "Cecilio Olivo",
      ocupation: "Communities affairs",
      project: "Community Garden Program",
    },
    {
      fullName: "Hugo Valera",
      ocupation: "Ambassador",
      project: "Community Garden Program",
    },
  ];

  return (
    <>
      <Header
        titleWIthEffect="Who we are"
        bannerTitle="leadership"
        background="../../../../images/voluntarios.jpg"
        className="jumbo-header text-center"
        overlay={true}
      />
      <Container>
        <Row
          tag="article"
          className="d-flex justify-content-center align-items-center"
        >
          <Col xs={12}>
            <MainHeader headerText="Leadership" />
          </Col>
          <Col xs={12} md={6} className="about-img-container">
            <img
              className="custom-shadow"
              src="../../../images/voluntarios.jpg"
              alt="kids eating placeholder text"
            />
          </Col>
          <Col xs={12} md={6} className="mt-4 px-5">
            <p>
              Luzbell Woods Founder of Hope for The Nations, is from Venezuela
              and currently resides in Tennessee, US. Where she serves youth
              students teaching and sharing God's word.
            </p>
            <p>
              Her passion has always been to help and serve others, which lead
              her to found Hope For The Nations, where her and her family have
              been dedicating to help unfortunate communities in her home
              country Venezuela through God's word and donations received she
              shares Hope and opportunities to the needed.
            </p>
          </Col>
        </Row>

        <Row className="d-flex flex-column">
          <MainHeader headerText="Meet Our Team" />
          <Col className="meet-our-team-wrapper mb-5">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.fullName}
                fullName={member.fullName}
                ocupation={member.ocupation}
                photo={member.photo}
              />
            ))}
          </Col>
          <Col xs={12} className="my-5">
            <h4 className="text-center">Ambassadors - Venezuela</h4>
          </Col>
          <Col xs={12} className="volunteers-wrapper">
            {volunteers.map((volunt) => (
              <Col
                key={volunt.fullName}
                xs={12}
                md={3}
                className="volunteers my-4"
              >
                <h5>{volunt.fullName}</h5>
                <p>{volunt.ocupation}</p>
                <p>{volunt.project}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default Leadership;
