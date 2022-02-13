import React from "react";
import { Col } from "reactstrap";

interface Props {
  headerText: string;
  className?: string;
  subText?: string;
  subTitleDeco?: string;
}

const MainHeader = ({
  headerText,
  className,
  subText,
  subTitleDeco,
}: Props) => {
  return (
    <Col xs={12} className="main-header">
      <h2>{headerText}</h2>
      <span className="subtitle-deco">{subTitleDeco}</span>
      <p>{subText}</p>
    </Col>
  );
};

export default MainHeader;
