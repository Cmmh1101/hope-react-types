import React from "react";
import articlesData from "../../../articlesData";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramsList = () => {
  return (
    <Row className="programs-section">
      <Col xs={12} className="d-flex flex-wrap">
        {articlesData.map((article, key) => {
          return (
            <Col xs={12} md={4} key={key} className="programs-list pt-3">
              <img
                src={article.icon}
                alt={article.title}
                className="my-3 program-icon"
              />

              <h4 className="my-3">{article.title}</h4>
              <p className="text-center">
                {article.content.toString().substring(0, 100)}...
              </p>
              <Link
                to={`/program/${article.name}`}
                color="primary"
                className="mt-3 btn btn-cta"
              >
                Learn More
              </Link>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};

export default ProgramsList;
