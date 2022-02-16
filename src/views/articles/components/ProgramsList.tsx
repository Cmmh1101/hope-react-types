import React from "react";

import articlesData from "../../../articlesData";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramsList = () => {
  return (
    <Row>
      <Col xs={12} className="d-flex flex-wrap">
        {articlesData.map((article, key) => {
          return (
            <Col
              xs={12}
              md={4}
              key={key}
              className="d-flex justify-content-center align-items-center flex-column my-3"
            >
              <img src={article.icon} alt={article.title} className="my-3" />
              <h4 className="my-3">{article.title}</h4>
              <p>{article.content.toString().substring(0, 100)}...</p>
              <Link
                to={`/program/${article.name}`}
                color="primary"
                className="my-3"
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
