import React from "react";
import { Col, Container, Row } from "reactstrap";
import articleData from "../../../articlesData";
import FollowUs from "../../../utils/FollowUs";
import HighlightMessage from "../../../utils/HighlightMessage";
import StoryBannerImageSmall from "../../../utils/StoryBannerImageSmall";
import NotFoundPage from "../../404page";
import DonateBanner from "../../../utils/DonateBanner";
import ProgramsList from "./ProgramsList";
import Header from "../../../utils/Header";

const ProgramPage = ({ match }: any) => {
  const name = match.params.name;
  const article = articleData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // const relatedPrograms = articleData.filter((art) => art.name !== name);

  return (
    <>
      <Header
        titleWIthEffect="Programs"
        bannerTitle={article.title}
        background={article.image}
        className="jumbo-header text-center"
        overlay={true}
      />

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
                <img
                  className="custom-shadow"
                  style={{
                    width: "98%",
                    height: "500px",
                    objectPosition: "center top",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                  src={article.image}
                  alt={article.title}
                />
              </Col>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center flex-wrap p-0 my-5"
            >
              <StoryBannerImageSmall
                image={article.programImage2?.image}
                altText={article.programImage2?.alt}
              />
              <StoryBannerImageSmall
                image={article.programImage4?.image}
                altText={article.programImage4?.alt}
              />
            </Col>
            <HighlightMessage text={article.highligh} customClass="my-5" />
            {/* <Col xs={12} className="mt-5">
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
              </Col> */}
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
