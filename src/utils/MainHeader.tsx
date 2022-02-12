import React from "react";
import { Col } from "reactstrap";

interface Props {
  headerText: string;
  className?: string;
  subText?: string;
}

const MainHeader = ({ headerText, className, subText }: Props) => {
  return (
    <Col xs={12} className={className}>
      <h2>{headerText}</h2>
      <p>{subText}</p>
    </Col>
  );
};

export default MainHeader;
