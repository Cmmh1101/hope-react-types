import React from "react";
import { Col, Container, Row } from "reactstrap";
import storiesData from "../../../storiesData";
import BannerDivider from "../../../utils/BannerDivider";
import NotFoundPage from "../../404page";
import StoriesList from "./StoriesList";

const StoryPage = ({ match }: any) => {
  const name = match.params.name;
  const article = storiesData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // const relatedStories = storiesData.filter((art) => art.name !== name);

  return (
    <>
      <div className="banner-divider mb-5">
        <BannerDivider
          className="banner-content"
          bannerText={article.title}
          imgSrc={article.image}
          altText={article.alt}
        />
      </div>

      <Container>
        <Row className="">
          <Col xs={12} className="mx-auto p-0">
            <Col xs={12} className="my-5 mx-auto">
              <h3>{article.description} short description</h3>
            </Col>
            <Col xs={12} className="d-flex">
              <article className="mx-auto pl-0 pr-4">
                <img
                  className="story-side-image"
                  src={article.storyImage?.image1}
                  alt={article.storyImage?.alt}
                />
                {article.content.map((paragraph, key) => (
                  <p className="mb-4" key={key}>
                    {paragraph}
                  </p>
                ))}
              </article>
              {/* <img
                className="story-side-image"
                src={article.storyImage?.image1}
                alt={article.storyImage?.alt}
              /> */}
              {/* <Col md={5} className="d-flex flex-wrap px-0">
                <div className="col-md-12 story-images-container">
                  <img
                    src={article.storyImage?.image1}
                    alt={article.storyImage?.alt}
                  />
                </div>
              </Col> */}
            </Col>
            <Col xs={12} className="d-flex">
              <div
                className="col-md-6 px-0 story-banner-image"
                style={{ height: "300px" }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center bottom",
                  }}
                  src={article.storyImage2?.image}
                  alt={article.storyImage2?.alt}
                />
              </div>
              <div className="col-md-6 px-0" style={{ height: "300px" }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center bottom",
                  }}
                  src={article.storyImage3?.image}
                  alt={article.storyImage3?.alt}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <section className="bg-info my-5 py-5">
        <Container>
          <Row>
            <Col xs={12} className="mx-auto px-3">
              <span className="span-highlight">{article.highligh}</span>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col xs={12} className="mx-auto px-4">
            <h4 className="mt-5 mb-0">More stories of Hope</h4>
            <StoriesList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StoryPage;
