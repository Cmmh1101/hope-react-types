import React from "react";
import { Col, Container, Row } from "reactstrap";
import articleData from "../../../articlesData";
import BannerDivider from "../../../utils/BannerDivider";
import NotFoundPage from "../../404page";
import ProgramsList from "./ProgramsList";

const ProgramPage = ({ match }: any) => {
  const name = match.params.name;
  const article = articleData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  // const relatedPrograms = articleData.filter((art) => art.name !== name);

  return (
    <>
      <div className="banner-divider">
        <BannerDivider
          className="banner-content"
          bannerText={article.title}
          imgSrc={article.image}
          altText={article.alt}
        />
      </div>

      <Container>
        <Row>
          <Col
            xs={12}
            md={10}
            className="mx-auto d-flex justify-contente-center align-items-center"
          >
            <Col xs={12} md={6} className="my-3 mx-auto">
              <h3 className="my-5">{article.description} short description</h3>
              {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
              ))}
            </Col>
            <Col xs={12} md={6}>
              <iframe
                width="400"
                height="315"
                src="https://www.youtube.com/embed/E1xkXZs0cAQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Col>
        </Row>
      </Container>
      <section className="bg-info my-5 py-5">
        <Container>
          <Row>
            <Col md={10} className="mx-auto px-3">
              <span className="span-highlight">{article.highligh}</span>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col xs={12} md={10} className="mx-auto px-4">
            <h4 className="mt-5 mb-0">Our Programs</h4>
            <ProgramsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgramPage;
