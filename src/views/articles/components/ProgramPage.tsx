import React from "react";
import { Col, Container, Row } from "reactstrap";
import articleData from "../../../articlesData";
import BannerDivider from "../../../utils/BannerDivider";
import FollowUs from "../../../utils/FollowUs";
import HighlightMessage from "../../../utils/HighlightMessage";
import StoryBannerImageSmall from "../../../utils/StoryBannerImageSmall";
import NotFoundPage from "../../404page";
import DonateBanner from "../../../utils/DonateBanner";
import ProgramsList from "./ProgramsList";

const ProgramPage = ({ match }: any) => {
  const name = match.params.name;
  const article = articleData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // const relatedPrograms = articleData.filter((art) => art.name !== name);

  return (
    <>
      <header className="banner-divider inner-page-hero">
        <BannerDivider
          className="banner-content"
          sectionTitle="Programs"
          bannerText={article.title}
          imgSrc={article.image}
          altText={article.alt}
        />
      </header>
      <Container>
        <Row>
          <Col xs={12} className="mx-auto">
            <h3 className="my-5">{article.description}</h3>
            <Col xs={12} className="mx-auto d-md-flex">
              <Col xs={12} md={6} className="my-5 mx-auto mx-md-0">
                {article.content.map((paragraph, key) => (
                  <p key={key}>{paragraph}</p>
                ))}
              </Col>
              <Col xs={12} md={6} className="mt-5">
                <iframe
                  className="custom-shadow"
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/E1xkXZs0cAQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
            </Col>
            <Col xs={12} className="d-flex flex-wrap my-5">
              <StoryBannerImageSmall
                image={article.programImage2?.image}
                altText={article.programImage2?.alt}
              />
              <StoryBannerImageSmall
                image={article.programImage4?.image}
                altText={article.programImage4?.alt}
              />
              <StoryBannerImageSmall
                image={article.programImage3?.image}
                altText={article.programImage3?.alt}
              />
            </Col>
            <HighlightMessage text={article.highligh} customClass="my-5" />

            <Col xs={12} className="mx-auto px-4">
              <h4 className="my-5 mb-0">Our Programs</h4>
              <ProgramsList />
            </Col>
          </Col>
        </Row>
      </Container>
      <DonateBanner />
      <FollowUs />
    </>
  );
};

export default ProgramPage;
