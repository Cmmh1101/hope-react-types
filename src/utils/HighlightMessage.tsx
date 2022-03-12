import React from "react";
import { Col } from "reactstrap";

interface Props {
  text: string;
  customClass?: string;
}

const HighlightMessage = ({ text, customClass }: Props) => {
  return (
    <Col xs={12} className={`mx-auto mt-3 mb-5 px-3 ${customClass}`}>
      <span className="span-highlight">{text}</span>
    </Col>
  );
};

export default HighlightMessage;
