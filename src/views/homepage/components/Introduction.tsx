import React from "react";
import { Col, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

interface Props {}

const Introduction = (props: Props) => {
  return (
    <>
      <Row className="full-section">
        <Col xs={12}>
          <MainHeader
            headerText="How is God calling you to"
            subTitleDeco="give, love, help!"
          />
          <Col xs={12} className="d-flex flex-wrap mt-5">
            <Col xs={12} md={6} className="">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/E1xkXZs0cAQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
            <Col xs={12} md={6} className="p-5 list-sec">
              <div>
                <h3 className="text-start">WE BELEIVE</h3>
                <ul>
                  <li>The circle of poverty...</li>
                  <li>All can share their gifts and talents...</li>
                  <li>In ministry done with excellence...</li>
                </ul>
              </div>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Introduction;
