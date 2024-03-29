import React from "react";
import { Col, Container, Row } from "reactstrap";
import storiesData from "../../../storiesData";
import FollowUs from "../../../utils/FollowUs";
import HighlightMessage from "../../../utils/HighlightMessage";
import StoryBannerImageSmall from "../../../utils/StoryBannerImageSmall";
import NotFoundPage from "../../404page";
import DonateBanner from "../../../utils/DonateBanner";
import StoriesList from "./StoriesList";
import Header from "../../../utils/Header";

const StoryPage = ({ match }: any) => {
  const name = match.params.name;
  const article = storiesData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // const relatedStories = storiesData.filter((art) => art.name !== name);

  return (
    <>
      <Header
        titleWIthEffect="Hope"
        bannerTitle={article.title}
        background={article.image}
        className="jumbo-header text-center"
        overlay={true}
      />
      <Container>
        <Row>
          <Col xs={12} className="mx-auto p-0">
            <Col xs={12} className="my-5 mx-auto">
              <h3>{article.description}</h3>
            </Col>

            <Col xs={12} tag="article" className="mx-autopx-0">
              <div
                className="col-xs-12 col-md-4 ml-md-5 mb-3 mb-md-5 px-0 float-right"
                style={{ height: "400px", maxHeight: "100%" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  className="custom-shadow"
                  src={article.storyImage?.image1}
                  alt={article.storyImage?.alt}
                />
              </div>

              {article.content.map((paragraph, key) => (
                <p className="mb-4" key={key}>
                  {paragraph}
                </p>
              ))}
            </Col>

            <Col xs={12} className="d-flex flex-wrap my-5">
              <StoryBannerImageSmall
                image={article.storyImage2?.image}
                altText={article.storyImage2?.alt}
              />
              <StoryBannerImageSmall
                image={article.storyImage4?.image}
                altText={article.storyImage4?.alt}
              />
              <StoryBannerImageSmall
                image={article.storyImage3?.image}
                altText={article.storyImage3?.alt}
              />
            </Col>
          </Col>
          <HighlightMessage text={article.highligh} />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} className="mx-auto px-4">
            <h4 className="mt-5 mb-5">More stories of Hope</h4>
            <StoriesList />
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default StoryPage;
