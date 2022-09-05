import React from "react";
import { Col } from "reactstrap";

interface Props {
  fullName: string;
  ocupation: string;
  contact?: string;
  photo: string;
}

const TeamMemberCard = ({ fullName, ocupation, photo }: Props) => {
  return (
    <Col xs={8} md={3} className="custom-shadow m-2 team-member-card">
      <div className="team-member-image">
        <img src={photo} alt="profile" />
      </div>
      <h5>{fullName}</h5>
      <p>{ocupation}</p>
    </Col>
  );
};

export default TeamMemberCard;
