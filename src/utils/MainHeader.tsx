import React from "react";
import { Col, Row } from "reactstrap";

interface Props {
  headerText: string;
  customClass?: string;
  subText?: string;
  subTitleDeco?: string;
  sectionHighlight?: string;
}

const MainHeader = ({
  headerText,
  customClass,
  subText,
  subTitleDeco,
  sectionHighlight,
}: Props) => {
  return (
    <Row className="mx-auto my-5 py-5">
      <Col xs={12} className={`main-header ${customClass}`}>
        <span>{sectionHighlight}</span>
        <h2 className={customClass}>{headerText}</h2>
        <span className="subtitle-deco">{subTitleDeco}</span>
        <p>{subText}</p>
      </Col>
    </Row>
  );
};

export default MainHeader;
