import React from "react";
import { Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

interface Props {}

const Introduction = (props: Props) => {
  return (
    <>
      <Row>
        <MainHeader headerText="Mi types header" className="main-header" />
      </Row>
    </>
  );
};

export default Introduction;
