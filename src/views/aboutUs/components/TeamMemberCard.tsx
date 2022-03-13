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
    <Col md={3} className="custom-shadow team-member-card mx-1">
      <div className="team-member-image">
        <img src={photo} alt="profile photo" />
      </div>
      <h5>{fullName}</h5>
      <p>{ocupation}</p>
    </Col>
  );
};

export default TeamMemberCard;
