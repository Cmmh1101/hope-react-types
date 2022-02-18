import React from "react";
import storiesData from "../../../storiesData";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const StoriesList = () => {
  return (
    <Row className="mb-5">
      <Col
        xs={12}
        className="d-flex flex-wrap justify-content-center align-items-center my-5"
      >
        {storiesData.map((article, key) => {
          return (
            <Col xs={12} md={6} key={key} className="stories-list-containter">
              <Link
                to={`/storyOfHope/${article.name}`}
                color="primary"
                className="my-3 mb-5 stories-list-containter-link"
              >
                <Col md={6} className="p-0 stories-list-img-containter">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="my-3"
                  />
                </Col>
                <Col
                  md={6}
                  className="pr-0 pl-4 stories-list-content-container"
                >
                  <h4 className="my-3">{article.title}</h4>
                  <p className="">
                    {article.date}
                    {/* {article.content.toString().substring(0, 60)}... */}
                  </p>
                </Col>
              </Link>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};

export default StoriesList;
