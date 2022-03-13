import React from "react";
import { Col, Container, Row } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import DonateInterPages from "../../utils/DonateInterPages";
import FollowUs from "../../utils/FollowUs";
import MainHeader from "../../utils/MainHeader";
import TeamMemberCard from "./components/TeamMemberCard";

interface Props {}

const Leadership = (props: Props) => {
  const teamMembers = [
    {
      fullName: "Luzbell Wood",
      ocupation: "Founder Director",
      photo: "../../../images/face-placeholder.png",
      location: "Memphis, TN",
    },
    {
      fullName: "Aimee Wood",
      ocupation: "Director & Digital Designer",
      photo: "../../../images/face-placeholder.png",
      location: "Memphis, TN",
    },
    {
      fullName: "Nancy Valera",
      ocupation: "Assist. Director Development",
      photo: "../../../images/face-placeholder.png",
      location: "Caracas, Venezuela",
    },
    {
      fullName: "Carla Montano",
      ocupation: "Web Developer",
      photo: "../../../images/face-placeholder.png",
      location: "Mississippi, USA",
    },
  ];

  return (
    <>
      <div className="banner-divider mb-5">
        <BannerDivider
          className="banner-content"
          bannerText="LEADERSHIP"
          bannerContent="Who We Are"
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Col xs={12}>
            <MainHeader headerText="Leadership" />
          </Col>
          <Col
            xs={12}
            md={6}
            className="about-img-container mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              className="custom-shadow"
              src="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
              alt="kids eating placeholder text"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="mb-5 d-flex justify-content-center align-items-center"
          >
            <p>
              Aqui va a ir una descripcion de la fundadora, familia, historia y
              que incentivo a formar la orgnizacion Aqui va a ir una descripcion
              de la fundadora, familia, historia y que incentivo a formar la
              orgnizacion Aqui va a ir una descripcion de la fundadora, familia,
              historia y que incentivo a formar la orgnizacion.
            </p>
          </Col>

          <MainHeader headerText="Meet Our Team" />

          <Col xs={12} className="meet-our-team-wrapper">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.fullName}
                fullName={member.fullName}
                ocupation={member.ocupation}
                photo={member.photo}
                location={member.location}
              />
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
