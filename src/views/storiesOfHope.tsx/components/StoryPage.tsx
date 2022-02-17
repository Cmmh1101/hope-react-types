import React from "react";
import { Col, Container, Row } from "reactstrap";
import articleData from "../../../articlesData";
import BannerDivider from "../../../utils/BannerDivider";
import NotFoundPage from "../../404page";
import StoriesList from "./StoriesList";

const StoryPage = ({ match }: any) => {
  const name = match.params.name;
  const article = articleData.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  //   const relatedArticles = articleData.filter(
  //     (article) => article.name !== name
  //   );

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
          <Col xs={12} className="my-3 mx-auto">
            <h3>{article.description} short description</h3>
          </Col>
          <Col xs={12} className="my-3 mx-auto">
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </Col>
          <Col xs={12}>
            <span className="span-highlight text-primary">
              {article.highligh}
            </span>
          </Col>
          <StoriesList />
        </Row>
      </Container>
    </>
  );
};

export default StoryPage;
