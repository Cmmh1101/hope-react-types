import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import TeamMemberCard from "./components/TeamMemberCard";

const Leadership = () => {
  const teamMembers = [
    {
      fullName: "Luzbell Wood",
      ocupation: "Founder & Director",
      photo: "../../../images/face-placeholder.png",
    },
    {
      fullName: "Aimee Wood",
      ocupation: "Director & Digital Designer",
      photo: "../../../images/face-placeholder.png",
    },
    {
      fullName: "Nancy Valera",
      ocupation: "Assist. Director Development",
      photo: "../../../images/face-placeholder.png",
    },
    {
      fullName: "Carla Montano",
      ocupation: "Web Developer",
      photo: "../../../images/face-placeholder.png",
    },
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
      <div className="banner-divider inner-page-hero mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="LEADERSHIP"
          bannerContent="Who We Are"
          imgSrc="../../../../images/voluntarios.jpg"
          altText="Hope For The Nations Volunteers - Venezuela"
        />
      </div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Col xs={12}>
            <MainHeader headerText="Leadership" />
          </Col>
          <Col xs={12} md={6} className="about-img-container mb-5">
            <img
              className="custom-shadow"
              src="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
              alt="kids eating placeholder text"
            />
          </Col>
          <Col xs={12} md={6} className="mb-5 px-5">
            <p>
              Aqui va a ir una descripcion de la fundadora, familia, historia y
              que incentivo a formar la orgnizacion Aqui va a ir una descripcion
              de la fundadora, familia.
            </p>
            <p>
              Una foto familiar puede verse bien aqui...Aqui va a ir una
              descripcion de la fundadora, familia, historia y que incentivo a
              formar la orgnizacion Aqui va a ir una.
            </p>
            <p>
              Hay que buscar una foto que se vea bien aqui en el banner de abajo
              y que incentivo a formar la orgnizacion Aqui va a ir una
              descripcion de la fundadora, familia.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="banner-divider">
        <BannerDivider
          bannerText=""
          imgSrc="../../../../../../images/voluntarios.jpg"
          altText="Programs Volunteers"
        />
      </div>

      <Container>
        <Row className="mt-5">
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
                className="volunteers my-5"
              >
                <h5>{volunt.fullName}</h5>
                <p>{volunt.ocupation}</p>
                <p>{volunt.project}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
      <DonateInterPages />
      <FollowUs />
    </>
  );
};

export default Leadership;
