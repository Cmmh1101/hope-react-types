import React from "react";
import { Col, Container, Row } from "reactstrap";
import storiesData from "../../../storiesData";
import BannerDivider from "../../../utils/BannerDivider";
import DonateInterPages from "../../../utils/DonateInterPages";
import FollowUs from "../../../utils/FollowUs";
import StoryBannerImageSmall from "../../../utils/StoryBannerImageSmall";
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
              <article className="mx-auto px-0">
                <img
                  className="story-side-image ml-5"
                  src={article.storyImage?.image1}
                  alt={article.storyImage?.alt}
                />
                {article.content.map((paragraph, key) => (
                  <p className="mb-4" key={key}>
                    {paragraph}
                  </p>
                ))}
              </article>
            </Col>
            <Col xs={12} className="d-flex my-5">
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
        </Row>
      </Container>
      <section className="highlight-section my-5 py-5">
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
      <DonateInterPages />
      <FollowUs />
    </>
  );
};

export default StoryPage;
