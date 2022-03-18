import React from "react";
import { Col, Container, Row } from "reactstrap";
import articleData from "../../../articlesData";
import BannerDivider from "../../../utils/BannerDivider";
import DonateInterPages from "../../../utils/DonateInterPages";
import FollowUs from "../../../utils/FollowUs";
import HighlightMessage from "../../../utils/HighlightMessage";
import StoryBannerImageSmall from "../../../utils/StoryBannerImageSmall";
import NotFoundPage from "../../404page";
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
          bannerText={article.title}
          imgSrc={article.image}
          altText={article.alt}
        />
      </header>
      <Container>
        <Row>
          <Col xs={12} className="mx-auto">
            <Col xs={12} className="my-5 mx-auto">
              <h3 className="my-5">{article.description} short description</h3>
              {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
              ))}
            </Col>
            <Col xs={12} className="mt-5">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/E1xkXZs0cAQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
      <DonateInterPages />
      <FollowUs />
    </>
  );
};

export default ProgramPage;
