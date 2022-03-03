import React from "react";
import storiesData from "../../../storiesData";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import FacebookFeed from "../../../utils/FacebookFeed";

// interface Props {
//   articles?: any
// }

const ProgramsList = () => {
  return (
    <Row className="mb-5">
      <Col
        xs={8}
        className="d-flex flex-wrap mx-auto justify-content-center align-items-center"
      >
        {storiesData.map((article: any, key: any) => {
          return (
            <Col xs={12} key={key} className="stories-list-containter">
              <Link
                to={`/storyOfHope/${article.name}`}
                color="primary"
                className="my-3 mb-5 flex-wrap stories-list-containter-link"
              >
                <Col xs={12} md={6} className="p-0 stories-list-img-containter">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="my-3"
                  />
                </Col>
                <Col
                  xs={12}
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
      <Col
        xs={12}
        md={4}
        className="d-flex justify-content-center align-items-center"
      >
        <FacebookFeed />
      </Col>
    </Row>
  );
};

export default ProgramsList;
