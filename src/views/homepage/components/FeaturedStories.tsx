import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import storiesData from "../../../storiesData";
import FacebookFeed from "../../../utils/FacebookFeed";

const FeaturedStories = () => {
  return (
    <Row className="mb-5">
      <Col
        xs={12}
        lg={8}
        className="mb-5 mb-lg-0 d-flex flex-wrap mx-auto justify-content-center align-items-center"
      >
        {storiesData
          .filter((story) => story.featured)
          .map((article: any, i) => {
            return (
              <Col xs={12} key={i} className="stories-list-container">
                <Link
                  to={`/storyOfHope/${article.name}`}
                  color="primary"
                  className="my-3 mb-5 flex-wrap stories-list-container-link"
                >
                  <Col
                    xs={12}
                    md={6}
                    className="p-0 stories-list-img-container"
                  >
                    <div
                      className="w-100"
                      style={{
                        backgroundImage: `url(${article.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    className="pr-0 pl-4 stories-list-content-container"
                  >
                    <h4 className="my-3">{article.title}</h4>
                    <span>{article.date}</span>
                    <p className="">
                      {article.content.toString().substring(0, 60)}...
                    </p>
                  </Col>
                </Link>
              </Col>
            );
          })}
      </Col>
      <Col
        xs={12}
        lg={4}
        className="d-flex justify-content-center align-items-center"
      >
        <FacebookFeed />
      </Col>
      <Col xs={12} className="d-flex justify-content-center mt-5">
        <Link to="/storiesOfHope" className="btn btn-cta">
          See All Stories
        </Link>
      </Col>
    </Row>
  );
};

export default FeaturedStories;
