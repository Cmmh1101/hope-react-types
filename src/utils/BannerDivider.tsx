import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainHeader from "./MainHeader";

interface Props {
  className?: string;
  bannerText: string;
  bannerContent?: string;
  imgSrc: string;
  altText: string;
  sectionTitle?: string;
}

const BannerDivider = ({
  bannerText,
  bannerContent,
  imgSrc,
  altText,
  sectionTitle,
}: Props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="mx-auto mb-5">
            <MainHeader
              sectionHighlight={sectionTitle}
              headerText={bannerText}
              subText={bannerContent}
              customClass="banner-divider-principal-text"
            />
          </Col>
        </Row>
      </Container>
      <div className="banner-image-container">
        <img className="banner-image" src={imgSrc} alt={altText} />
      </div>
      <div className="banner-image-overlay" />
    </>
  );
};

export default BannerDivider;
