import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Jumbotron, Row } from "reactstrap";

interface Props {
  background: string;
  title?: string;
  titleWIthEffect?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  bannerTitle?: string;
  overlay: boolean;
}

const Header = ({
  background,
  title,
  titleWIthEffect,
  buttonText,
  description,
  className,
  bannerTitle,
  overlay,
}: Props) => {
  return (
    <header>
      <Jumbotron
        fluid
        style={{ backgroundImage: `url(${background})` }}
        className={`${className} p-5`}
      >
        <Container
          fluid
          className={title ? "flex-end-container" : "header-container"}
        >
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={!title && 10} lg={!title && 9}>
              {titleWIthEffect && (
                <span className="title-clear">{titleWIthEffect}</span>
              )}
              {title && <h1 className="display-3">{title}</h1>}
              {bannerTitle && (
                <h3 className={titleWIthEffect && "subtitle-top"}>
                  {bannerTitle}
                </h3>
              )}
              {description && <p className="lead">{description}</p>}
              {buttonText && (
                <Link to="/programs" className="btn btn-cta">
                  {buttonText}
                </Link>
              )}
            </Col>
          </Row>
        </Container>
        {overlay && (
          <div className={title ? "hero-overlay" : "banner-overlay"} />
        )}
      </Jumbotron>
    </header>
  );
};

export default Header;
