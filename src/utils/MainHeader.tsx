import React from "react";
import { Col } from "reactstrap";

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
    <Col xs={12} className={`main-header mx-auto pt-5 ${customClass}`}>
      <span>{sectionHighlight}</span>
      <h2 className={customClass}>{headerText}</h2>
      <span className="subtitle-deco">{subTitleDeco}</span>
      <p>{subText}</p>
    </Col>
  );
};

export default MainHeader;
